module ChiaPostToQueue

open Feliz
open Feliz.Bulma

open Shared

let overview =
    Html.div
        [ Bulma.title.h1 [ Html.text "Chia.PostToQueue" ]
          Bulma.subtitle.h2
              [ Html.text "Helper for Azure Queue messages" ]
          Html.hr []
          Bulma.content
              [ Html.p "You can use Chia to sent out a Azure Queue message like this:"
                code """
                open Chia.PostToQueue
                open Chia.CreateTable
                open Chia.Infrastructure

                let azAccount = azConnection fileWriterInfo Location.WestEurope
                let testQueue = getQueue azAccount "test-queue-msg"
                let postToQueue = task {
                  let content = ["Data1";"Data2"]
                  do! postToQueue testQueue content
                }""" ] ]
