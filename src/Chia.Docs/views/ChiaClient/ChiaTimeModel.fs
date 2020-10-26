module ChiaTimeModel

open Feliz
open Feliz.Bulma
open Utils
open Chia.Shared
open Chia.PageFlexer
open Chia.Shared.Time
open Elmish
open Thoth.Elmish

type Model = {
    SelectionTimeSpan : Selection<ReportIntervall> list option
    SelectedTimeSpan : ReportIntervall
    Debouncer : Debouncer.State
}

let init () =

    let initTimeSpanSelection : Selection<ReportIntervall> list =
        [ { Value = Monthly
            Text = "Monatlich" }
          { Value = Daily
            Text = "Täglich" } ]

    let initialModel =
        { SelectedTimeSpan = Daily
          Debouncer = Debouncer.create()
          SelectionTimeSpan = Some initTimeSpanSelection }
    initialModel, Cmd.none

type Msg =
| SetTime of string * string

let update msg model =
    match msg with
    | SetTime(target, e) ->
        let date = getDateTimeOffsetFromGermanTimeStyle e
        let newTimeModel = inputToTimeModel target date model.TimeModel
        let (debouncerModel, debouncerCmd) =
            model.Debouncer |> Debouncer.bounce (TimeSpan.FromSeconds 1.5) "user_input" EndOfInput
        { model with TimeModel = newTimeModel
                     Debouncer = debouncerModel },
        Cmd.batch [ Cmd.map DebouncerSelfMsg debouncerCmd
                    toastTimeSelect date ]

let overview model dispatch =
    Html.div
        [ Bulma.title.h1 [ Html.text "Chia.Client.TimeModel" ]
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
