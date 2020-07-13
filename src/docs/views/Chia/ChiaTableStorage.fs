module ChiaTableStorage

open Feliz
open Feliz.Bulma
open Shared

let overview =
    Html.div
        [ Bulma.title.h1 [ Html.text "Chia.TableStorage" ]
          Bulma.subtitle.h2
              [ Html.text "Helper to save data to Azure tables" ]
          fixDocsView "ChiaTableStorage" false ]
