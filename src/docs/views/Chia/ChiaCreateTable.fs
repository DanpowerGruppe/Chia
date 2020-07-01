module ChiaCreateTable

open Feliz
open Feliz.Bulma
open Shared

let overview =
    Html.div
        [ Bulma.title.h1 [ Html.text "Chia.CreateTable" ]
          Bulma.subtitle.h2
              [ Html.text "Create your Azure tables by using Chia"
                ]
          Html.hr []
          Bulma.content
              [ Html.p "Create and get a reference to your Azure table like this:"
                code """
                open Chia.CreateTable
                let testTable = getTable "TestTable" azAccount """ ]

          Html.hr []
          Bulma.content
              [ Html.p "Safely delete to your Azure table like this:"
                code """
                open Chia.CreateTable
                let isDeleted = task {
                    let! testTable = deleteTable "TestTable" azAccount
                    return textTable
                } """ ]

          Html.hr []
          // getProperties

          // setProperties

          Bulma.content
              [ Html.p "Get properties from a DynamicTableEntity:"
                code """
                open Chia.CreateTable
                let mapWaterMarkValues (entity : DynamicTableEntity) : WaterMark =
                    { WaterMarkPartKey = WaterMarkPartKey entity.PartitionKey
                      MeterId = getMeterIdFromKey entity.RowKey
                      WaterMarkSortableRowKey = SortableRowKey (getStringProperty "WaterMarkSortableRowKey" entity)
                      WaterMarkDateTime = getStringProperty "DateTime" entity
                      Source = getStringProperty "Source" entity
                      UploadType = getStringProperty "UploadType" entity }
                 """ ]


                ]
