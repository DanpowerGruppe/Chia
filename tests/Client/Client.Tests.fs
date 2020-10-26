module Client.Tests

open Fable.Mocha
open Router
open Domain
open Chia
open State
let client = testList "Client" [
    testCase "UrlUpdate to ChiaClientInstallation works" <| fun _ ->
            let model, _ =  init ()
            let urlChangeMsg = UrlChanged ChiaClientInstallation
            let testModel =  { model with CurrentPage = ChiaClientInstallation }
            let currentModel, _ = update urlChangeMsg model
            Expect.equal currentModel testModel  "New Page should be ChiaClientInstallation"

]

let all =
    testList "All"
        [
#if FABLE_COMPILER // This preprocessor directive makes editor happy
            Shared.Tests.shared
#endif
            client
        ]

[<EntryPoint>]
let main _ = Mocha.runTests all
