module ChiaCreateTable

open Feliz
open Feliz.Bulma
open Shared

let overview =
    Html.div
        [ Bulma.title.h1 [ Html.text "Chia.CreateTable" ]
          Bulma.subtitle.h2 [ Html.text "Create your Azure tables by using Chia" ]
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
          fixDocsView "ChiaCreateTable" false ]
