module Client.Tests

open Fable.Mocha
open Router
open Domain
open Chia
open State
let client = testList "Client" [
    testCase "UrlUpdate to EGTechnicalReport works" <| fun _ ->
            let model, _ =  init ()
            let urlChangeMsg = UrlChanged ChiaClientInstallation
            let testModel =  { model with CurrentPage = ChiaClientInstallation }
            let currentModel, _ = update urlChangeMsg model
            Expect.equal currentModel testModel  "BiogasberichtModel should get called"
//     testCase "UrlUpdate to EGTechnicalReport works" <| fun _ ->
//             let page = EGTechnicalReport
//             let model, _ = init ()
//             let currentModel, _ = update (UrlChanged page) model
//             Expect.equal currentModel.CurrentPage page "New Page should be EGTechnicalReport"
//     testCase "UrlUpdate to CCTechnicalReport works" <| fun _ ->
//             let page = CCTechnicalReport
//             let model, _ = init ()
//             let currentModel, _ = update (UrlChanged page) model
//             Expect.equal currentModel.CurrentPage page "New Page should be CCTechnicalReport"
//     testCase "UrlUpdate to DMEAuswertung works" <| fun _ ->
//             let page = DMEAuswertung
//             let model, _ = init ()
//             let currentModel, _ = update (UrlChanged page) model
//             Expect.equal currentModel.CurrentPage page "New Page should be DMEAuswertung"
//     testCase "UrlUpdate to CityCube works" <| fun _ ->
//             let page = CityCube
//             let model, _ = init ()
//             let currentModel, _ = update (UrlChanged page) model
//             Expect.equal currentModel.CurrentPage page "New Page should be CityCube"
//     testCase "Sent CityCubeViewMsg should return CityCube page" <| fun _ ->
//             let page = CityCube
//             let msg = ConfigView.ColorBordersReceived { ColorBorders = [||] }
//             let model, _ = init ()
//             let testModel = { model with SubModel = CityCubeViewModel}
//             let currentModel, _ = update (CityCubeViewMsg msg ) testModel
//             Expect.equal currentModel.CurrentPage page "New Page should be CityCube"
//     testCase "Sent DMEAuswertungViewMsg should return DMEAuswertung page" <| fun _ ->
//             let page = DMEAuswertung
//             let model, _ = init ()
//             let testModel = { model with SubModel = DMEAuswertungViewModel }
//             let msg = ConfigView.ColorBordersReceived { ColorBorders = [||] }
//             let currentModel, _ = update (DMEAuswertungViewMsg msg ) testModel
//             Expect.equal currentModel.CurrentPage page "New Page should be DMEAuswertung"
//     testCase "Sent ConfigViewMsg should return ConfigModel" <| fun _ ->
//             let model, _ = init ()
//             let subModel,_ = ConfigView.init ()
//             let configViewMsg = ConfigView.ColorBordersReceived { ColorBorders = [||] }
//             let nextState, _ = ConfigView.update configViewMsg subModel
//             let testModel = { model with SubModel = ConfigViewModel nextState; CurrentPage = Config }
//             let currentModel, _ = update (ConfigViewMsg configViewMsg ) testModel
//             Expect.equal currentModel testModel  "ConfigModel should get called"

//     testCase "Test DatePicker selection some days" <| fun _ ->
//         let model, _ = BMTechnicalReportView.init ()
//         let dates =
//             let today = DateTime.Now
//             Some (today.AddDays(-1.)), Some today
//         let newModel, _ = BMTechnicalReportView.update (BMTechnicalReportView.DatePickerChanged dates) model
//         Expect.equal (newModel.DateFrom,newModel.DateTo) dates (sprintf "Selected Dates %A should be the same" dates)
//     testCase "Date string should get parsed into month and year" <| fun _ ->
//         let expected = 08, 1987
//         let actual = DateTransform.parseDate "31.08.1987"
//         Expect.equal actual expected "Month should be 8 and Yaer should be 1987"
//     testCase "German date formate string should get parsed into DateTimeOffset" <| fun _ ->
//         let expected = DateTime(1987,08,31) |> DateTimeOffset
//         printfn "Expected %A" expected
//         let actual = DateTransform.getDateTimeOffsetFromGermanTimeStyle "31.08.1987"
//         Expect.equal actual expected "DateTimeOffset should get parsed"
    // testCaseAsync "CCTechnicalReport - Submit gets detailed data" <| async {
    //         let model, _ = init ()

    //         let! technicalReportingData = getTechnicalData (CCTechnicalReportPlants, model.TimeModel)
    //         let formatting = Utils.mapTechnicalReportingDataToFormatting technicalReportingData model.CCDetailData CCTechnicalReportPlants
    //         let selectedPlant = formatting.[0]
    //         let! getDetailedData = getDetailTechnicalData  (selectedPlant, queryTimeModel model.TimeModel)
    //         let newModel, _ = update (Submit formatting.[0]) model
    //         Expect.equal newModel.CCDetailData (Some getDetailedData) "42 is equal 42"
            // Expect.equal 1 model.Todos.Length "There should be 1 todo"
        //     let ccData =
        //         {   PlantName: string
        //             ReducedPowerInPartialLoad: int
        //             OperationHours: int
        //             DownTime: TimeSpan
        //             PowerResults: PowerResults
        //             PartialLoad: TimeSpan
        //             ReturnTemp: TimeSpan
        //             Starts: float
        //             Status: Status }

        //     let technicalReportingData =
        //         { HasTimeTable = false
        //           Location = testLocation
        //           Area = ReportingArea.CC
        //           Time = DateTimeOffset.Now }
        //     let formatting =
        //         { Color = "lime", 1
        //           Location = testLocation
        //           PlantType = CCTechnicalReportPlants
        //           RowData = technicalReportingData
        //           DetailedData = None }
        //     let model, _ = init ()

        //     let model, _ = update (Submit newTodo) model

        //     Expect.equal 1 model.Todos.Length "There should be 1 todo"
        //     Expect.equal newTodo model.Todos.[0] "Todo should equal new todo"

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
