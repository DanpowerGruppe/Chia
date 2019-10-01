namespace Chia.Client

open Fable.React
open Fable.React.Props
open Domain
open Elmish
open Fulma
open Fable.FontAwesome

module Elements =
    let spinner pathToPic = Image.image [ Image.Is128x128 ] [ img [ Src pathToPic ] ]

module Types =
    type Selection<'a> =
        { Value : 'a
          Text : string }

    type SelectionInformation =
        { Label : string
          DefaultDataLabel : string
          NoDataLabel : string
          Alignment : Screen * TextAlignment.Option }

module Selections =
    open Types

    let basicSelect (data : Selection<_> list option) placeholder noDataMsg msg dispatch =
        match data with
        | Some data when List.isEmpty data -> Select.select [] [ select [] [ option [ Value "" ] [ str noDataMsg ] ] ]
        | None ->
            Select.select []
                [ select [ DefaultValue "lade Daten" ] [ option [ Value "lade Daten" ] [ str "lade Daten" ] ] ]
        | Some data ->
            let data =
                data
                |> List.map (fun x -> Some x.Value, x.Text)
                |> fun x -> (None, placeholder) :: x
            Select.select []
                [ select [ OnChange(fun ev -> dispatch (msg (fst data.[int ev.Value]))) ]
                      [ for (i, (_, text)) in List.indexed data -> option [ Value(string i) ] [ str text ] ] ]

    let selectWithLabel (selectionInformation : SelectionInformation) (data : Selection<_> list option) msg dispatch =
        let select =
            basicSelect data selectionInformation.DefaultDataLabel selectionInformation.NoDataLabel msg dispatch
        Control.div [] [ Label.label [ Label.Modifiers [ Modifier.TextAlignment(selectionInformation.Alignment) ] ]
                             [ str selectionInformation.Label ]
                         select ]

module Export =
    let getExcelLinkByGuid api guid = (sprintf "%s/%s" api guid)

    let showExportClass (api, guid, setMsg, dispatch) =
        match guid with
        | Some guid ->
            if guid <> "failure" then
                let link = getExcelLinkByGuid guid api
                Notification.notification [ Notification.Color IsSuccess
                                            Notification.Props [ Style [ MarginTop "20px" ] ] ]
                    [ a [ Href link
                          OnClick(fun e -> dispatch (setMsg (guid))) ]
                          [ span [ ClassName "sidebar-icon" ] [ i [ ClassName "fa fa-table" ] [] ]
                            span [ ClassName("sidebar-title") ] [ unbox " Bericht herunterladen" ] ] ]
            else
                Notification.notification [ Notification.Color IsDanger
                                            Notification.Props [ Style [ MarginTop "20px" ] ] ]
                    [ unbox ("Erstellung des Berichts gescheitert") ]
        | None -> div [] []

    let exportButton reqMsg dispatch = Button.button [ Button.OnClick(fun ev -> dispatch reqMsg) ] [ str "Exportieren" ]

module Error =
    let showErrorClass (err : exn option) =
        match err with
        | Some err ->
            Notification.notification [ Notification.Color IsDanger
                                        Notification.Props [ Style [ MarginTop "20px" ] ] ] [ unbox (err.Message) ]
        | None -> div [] []

module Menu =
    /// Helper to generate a menu item
    let menuItem label icon isActive msg dispatch =
        Menu.Item.li [ Menu.Item.IsActive isActive
                       Menu.Item.OnClick(fun ev -> dispatch (msg label)) ] [ Icon.icon [ Icon.Size IsSmall ]
                                                                                 [ Fa.i [ icon ] [] ]
                                                                             str label ]
    /// Helper to generate a sub menu
    let subMenu label isActive children =
        li [] [ Menu.Item.a [ Menu.Item.IsActive isActive ] [ str label ]
                ul [] children ]

module Search =
    /// Helper to generate a search bar
    let searchBar placeholder msg dispatch =
        Control.div [ Control.HasIconLeft ] [ Input.text
                                                  [ Input.Placeholder placeholder
                                                    Input.Option.OnChange(fun t -> dispatch (msg t.Value)) ]
                                              Icon.icon [ Icon.IsLeft ] [ i [ ClassName "fa fa-search" ] [] ] ]
