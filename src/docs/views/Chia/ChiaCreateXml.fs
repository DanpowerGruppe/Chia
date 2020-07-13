module ChiaCreateXml

open Feliz
open Feliz.Bulma
open Shared
let overview =
    Html.div
        [ Bulma.title.h1 [ Html.text "Chia.CreateXml" ]

          fixDocsView "ChiaCreateXml" false              ]
