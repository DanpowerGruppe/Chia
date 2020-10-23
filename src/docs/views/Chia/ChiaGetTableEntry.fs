module ChiaGetTableEntry

open Feliz
open Feliz.Bulma
open Utils

let overview =
    Html.div
        [ Bulma.title.h1 [ Html.text "Chia.GetTableEntry" ]
          Bulma.subtitle.h2
              [ Html.text "Get table entities from a Azure tables by using Chia"
                ]
          Html.hr []
          Bulma.content
              [ Html.p "First define your data type"
                code """
                type TestData = {
                  PartKey : string
                  RowKey :  SortableRowKey
                  Date : DateTimeOffset
                  Value : float
                  Text : string
                }
                 """ ]
          Html.hr []
          Bulma.content
              [ Html.p "Then you can get your values like this"
                code """
                open Chia.GetTableEntry
                open Microsoft.WindowsAzure.Storage.Table
                let mapTestData entity : TestData =
                    { Date = getDateTimeOffsetProperty "Date" entity
                      PartKey = entity.PartitionKey
                      RowKey = SortableRowKey entity.RowKey
                      Text = getStringProperty "Text" entity
                      Value = getDoubleProperty "Value" entity }
                let! values = getValues mapTestData testTable
                 """ ]
          Html.hr []
          Bulma.content
              [ Html.p "If you want to receive a single table record you can use following helper:"
                code """
                open Chia.GetTableEntry
                open Microsoft.WindowsAzure.Storage.Table
                let mapTestData entity : TestData =
                    { Date = getDateTimeOffsetProperty "Date" entity
                      PartKey = entity.PartitionKey
                      RowKey = SortableRowKey entity.RowKey
                      Text = getStringProperty "Text" entity
                      Value = getDoubleProperty "Value" entity }
                let partKey, rowKey = "AddYourPartKey","AddYourRowKey"
                let! value = oneValue (partKey,rowKey) mapTestData testTable
                """ ]
          fixDocsView "ChiaGetTableEntry" false
           ]
