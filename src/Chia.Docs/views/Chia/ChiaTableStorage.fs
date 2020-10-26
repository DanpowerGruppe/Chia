module ChiaTableStorage

open Feliz
open Feliz.Bulma
open Utils

let overview =
    Html.div
        [ Bulma.title.h1 [ Html.text "Chia.TableStorage" ]
          Bulma.subtitle.h2
              [ Html.text "Helper to save data to Azure tables" ]
          Bulma.content
              [ Html.p "To save data to a Azure table you first have to create table mapper:"
                code """
                    open Microsoft.WindowsAzure.Storage.Table
                    let tableMapper (testData: TestData) =
                        DynamicTableEntity(testData.PartKey, testData.RowKey.GetValue)
                        |> setDateTimeOffsetProperty "Date" testData.Date
                        |> setDoubleProperty "Value" testData.Value
                        |> setStringProperty "Text" testData.Text
                    """
                Html.p "Next make a reference to yout azure table:"
                code """
                    let testTable = getTable TestTable azAccount
                     """
                Html.p "Then you can upload your testData with the 'saveData' command:"
                code """

                let uploadTestData =
                    task {
                        let testData =
                            { PartKey = "PartKey"
                              RowKey = DateTime.Now |> SortableRowKey.toRowKey
                              Date = DateTimeOffset.Now
                              Value = 0.2
                              Text = "isWorking" }
                        let! _ = saveData tableMapper testTable fileWriterConfig testData
                }"""
                Html.p "You can also upload a data array as a batch:"
                code
                    """
                    let uploadTestDataBatch =
                        task {
                            let testData =
                                [|{
                                    PartKey = "PartKey"
                                    RowKey = DateTime.Now |> SortableRowKey.toRowKey
                                    Date = DateTimeOffset.Now
                                    Value = 0.2
                                    Text = "isWorking" }|]
                            let! _ = saveDataArrayBatch tableMapper testTable fileWriterConfig testData
                    """ ]
          Html.hr []
          fixDocsView "ChiaTableStorage" false ]
