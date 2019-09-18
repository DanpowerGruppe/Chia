#r "paket:
nuget FSharp.Core
nuget Fake.Core.ReleaseNotes
nuget Fake.Core.Process
nuget Fake.IO.FileSystem
nuget Fake.BuildServer.TeamFoundation
nuget Fake.Core.Target
nuget Fake.DotNet.Cli
nuget Fake.Core.Environment
nuget Fake.Installer.Wix
nuget Newtonsoft.Json
nuget System.ServiceProcess.ServiceController 
nuget Fake.Core.Trace
nuget Fake.IO.Zip
nuget Fake.Tools.Git
nuget Fake.DotNet.Testing.Expecto
nuget Fake.DotNet.Paket
nuget Fake.Core.UserInput
//"

#load ".fake/build.fsx/intellisense.fsx"
#if !FAKE
  #r "netstandard"
#endif 
open System
open System.IO
open Fake.Core
open Fake.DotNet
open Fake.IO
open Fake.Core.TargetOperators
open Fake.IO.Globbing.Operators
open Fake.Tools

//-----------------------------------------------
// Information about the project to be used at NuGet and in AssemblyInfo files
// --------------------------------------------------------------------------------------

let deployDir = Path.getFullName "./deploy"
let release = ReleaseNotes.load "RELEASE_NOTES.md"
let unitTestsPath = Path.getFullName "./src/Chia.Tests/"

let buildDir  = "./build/"

// Git configuration (used for publishing documentation in gh-pages branch)
// The profile where the project is posted
let gitHome = "https://github.com/DanpowerGruppe"
// The name of the project on GitHub
let gitName = "Chia"

// The name of the project
// (used by attributes in AssemblyInfo, name of a NuGet package and directory in 'src')
let project = "Chia"

let projectUrl = sprintf "%s/%s" gitHome gitName

// Short summary of the project
// (used as description in AssemblyInfo and as a short summary for NuGet package)
let summary = "Danpower Reporting Utils"

let copyright = "Copyright \169 2018"
let iconUrl = "https://raw.githubusercontent.com/fsprojects/Chia/master/Goji_logo.png"
let licenceUrl = "https://github.com/fsprojects/Chia/blob/master/LICENSE.md"
let configuration = DotNet.BuildConfiguration.Release

// Longer description of the project
// (used as a description for NuGet package; line breaks are automatically cleaned up)
let description = """This library Chia contains utils for internal Danpower Reporting and is used by serveral reports."""
// List of author names (for NuGet package)
let authors = [ "Tim Forkmann"]
let owner = "Tim Forkmann"
// Tags for your project (for NuGet package)
let tags = "Shared Utils Danpower"

// --------------------------------------------------------------------------------------
// PlatformTools
// --------------------------------------------------------------------------------------
let platformTool tool winTool =
    let tool = if Environment.isUnix then tool else winTool
    match ProcessUtils.tryFindFileOnPath tool with
    | Some t -> t
    | _ ->
        let errorMsg =
            tool + " was not found in path. " +
            "Please install it and make sure it's available from your path. " +
            "See https://safe-stack.github.io/docs/quickstart/#install-pre-requisites for more info"
        failwith errorMsg


// --------------------------------------------------------------------------------------
// Standard DotNet Build Steps
// --------------------------------------------------------------------------------------
let install = lazy DotNet.install DotNet.Versions.FromGlobalJson
let inline withWorkDir wd =
    DotNet.Options.lift install.Value
    >> DotNet.Options.withWorkingDirectory wd

let runTool cmd args workingDir =
    let arguments = args |> String.split ' ' |> Arguments.OfArgs
    RawCommand (cmd, arguments)
    |> CreateProcess.fromCommand
    |> CreateProcess.withWorkingDirectory workingDir
    |> CreateProcess.ensureExitCode
    |> Proc.run
    |> ignore

let runDotNet cmd workingDir =
    let result =
        DotNet.exec (DotNet.Options.withWorkingDirectory workingDir) cmd ""
    if result.ExitCode <> 0 then failwithf "'dotnet %s' failed in %s" cmd workingDir
// --------------------------------------------------------------------------------------
// Clean Build Results
// --------------------------------------------------------------------------------------

Target.create "Clean" (fun _ ->
    !!"src/**/bin"
    |> Shell.cleanDirs
    !! "src/**/obj/*.nuspec"
    |> Shell.cleanDirs

    Shell.cleanDirs [buildDir; "temp"; "docs/output"; deployDir;]
)

open System.Text.RegularExpressions
module Util =

    let visitFile (visitor: string->string) (fileName: string) =
        File.ReadAllLines(fileName)
        |> Array.map (visitor)
        |> fun lines -> File.WriteAllLines(fileName, lines)

    let replaceLines (replacer: string->Match->string option) (reg: Regex) (fileName: string) =
        fileName |> visitFile (fun line ->
            let m = reg.Match(line)
            if not m.Success
            then line
            else
                match replacer line m with
                | None -> line
                | Some newLine -> newLine)

// --------------------------------------------------------------------------------------
// Build a NuGet package

Target.create "Build" (fun _ ->
    !! "src/**/*.fsproj"
    |> Seq.iter (fun s ->
        let dir = Path.GetDirectoryName s
        DotNet.build id dir)
)

Target.create "UnitTests" (fun _ ->
    runDotNet "run" unitTestsPath
)

Target.create "PrepareRelease" (fun _ ->
    Git.Branches.checkout "" false "master"
    Git.CommandHelper.directRunGitCommand "" "fetch origin" |> ignore
    Git.CommandHelper.directRunGitCommand "" "fetch origin --tags" |> ignore

    Git.Staging.stageAll ""
    Git.Commit.exec "" (sprintf "Bumping version to %O" release.NugetVersion)
    Git.Branches.pushBranch "" "origin" "master"

    let tagName = string release.NugetVersion
    Git.Branches.tag "" tagName
    Git.Branches.pushTag "" "origin" tagName
)

Target.create "Pack" (fun _ ->
    let nugetVersion = release.NugetVersion

    let pack project =
        let projectPath = sprintf "src/%s/%s.fsproj" project project
        let args =
            let defaultArgs = MSBuild.CliArguments.Create()
            { defaultArgs with
                      Properties = [
                          "Title", project
                          "PackageVersion", nugetVersion
                          "Authors", (String.Join(" ", authors))
                          "Owners", owner
                          "PackageRequireLicenseAcceptance", "false"
                          "Description", description
                          "Summary", summary
                          "PackageReleaseNotes", ((String.toLines release.Notes).Replace(",",""))
                          "Copyright", copyright
                          "PackageTags", tags
                          "PackageProjectUrl", projectUrl
                          "PackageIconUrl", iconUrl
                          "PackageLicenseUrl", licenceUrl
                      ] }
        
        DotNet.pack (fun p ->
            { p with
                  NoBuild = false
                  Configuration = configuration
                  OutputPath = Some "build"
                  MSBuildParams = args
              }) projectPath 

    pack "Chia"
)

let getBuildParam = Environment.environVar
let isNullOrWhiteSpace = String.IsNullOrWhiteSpace

// Workaround for https://github.com/fsharp/FAKE/issues/2242
let pushPackage _ =
    let nugetCmd fileName key = sprintf "nuget push %s -k %s -s nuget.org" fileName key
    let key =
        match getBuildParam "nuget-key" with
        | s when not (isNullOrWhiteSpace s) -> s
        | _ -> UserInput.getUserPassword "NuGet Key: "
    let fileName = IO.Directory.GetFiles(buildDir, "*.nupkg", SearchOption.TopDirectoryOnly) |> Seq.map Path.GetFileName |> Seq.head
    Trace.tracef "fileName %s" fileName
    let cmd = nugetCmd fileName key
    runDotNet cmd buildDir 
Target.create "Push" (fun _ -> pushPackage [] )

// Build order
"Clean"
    ==> "Build"
    ==> "UnitTests"
    ==> "PrepareRelease"
    ==> "Pack"
    ==> "Push"

Target.runOrDefault "Build"