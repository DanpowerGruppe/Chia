module TimeModel

open Feliz
open Feliz.Bulma
open Utils
open System
open Chia.Shared.Time
open Elmish
open Thoth.Elmish
open Chia.TimeModelHelper
open Chia.Style
type Model = {
    TimeModel : TimeModel
    Debouncer : Debouncer.State
    Error : exn option}

let init () =


    let initTimeModel : TimeModel =
        {   ReportIntervall = Daily
            DateStart = DateTime(DateTime.Now.Year, DateTime.Now.Month, DateTime.Now.Day) |> DateTimeOffset
            DateEnd = DateTime(DateTime.Now.Year, DateTime.Now.Month, DateTime.Now.Day).AddDays(1.) |> DateTimeOffset}

    let initialModel =
        { TimeModel = initTimeModel
          Debouncer = Debouncer.create()
          Error = None }
    initialModel, Cmd.none

type Msg =
| SetTime of string * string
| EndOfInput
| DebouncerSelfMsg of Debouncer.SelfMessage<Msg>

let toastTimeSelect (time: DateTimeOffset) =
    successToast "ZeitFilter" ("Zeit wurde geändert auf " + time.ToString())

let update msg model =
    match msg with
    | SetTime(target, e) ->
        let date = getDateTimeOffsetFromGermanTimeStyle e
        let newTimeModel = inputToTimeModel target date model.TimeModel
        let (debouncerModel, debouncerCmd) =
            model.Debouncer |> Debouncer.bounce (TimeSpan.FromSeconds 1.5) "user_input" EndOfInput
        { model with TimeModel = newTimeModel
                     Debouncer = debouncerModel }, Cmd.batch [ Cmd.map DebouncerSelfMsg debouncerCmd; toastTimeSelect date ]
    | DebouncerSelfMsg debouncerMsg ->
        let (debouncerModel, debouncerCmd) = Debouncer.update debouncerMsg model.Debouncer
        { model with Debouncer = debouncerModel }, debouncerCmd
    | EndOfInput ->
        let cmd = Cmd.none
        { model with Error = None }, cmd
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
