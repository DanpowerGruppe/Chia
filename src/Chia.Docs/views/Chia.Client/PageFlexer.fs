module PageFlexer

open Feliz
open Feliz.Bulma
open Utils

let overview =
    Html.div
        [ Bulma.title.h1 [ Html.text "Chia.Client.PageFlexer" ]
          Bulma.subtitle.h2
              [ Html.a
                  [ prop.href "https://css-tricks.com/snippets/css/a-guide-to-flexbox/"
                    prop.text "Flexbox" ]
                Html.text " extension for Chia" ]
          Html.hr []
          Html.p "Use PageFlexer like this"
          code """
          pageFlexer [] [
              Html.div
                  [ Bulma.title.h1 [ Html.text "Chia.Client.PageFlexer" ]
                    Bulma.subtitle.h2 ]]"""
          fixDocsView "ChiaPageFlexer" true
           ]
