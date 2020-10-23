namespace Chia

module Tables =
    open Fable.React
    open Fable.React.Props
    open Shared.Tables
    open Fulma

    let showTable (tableData: TableRecord) siteMsg setMsg limit dispatch =

        let section =
            match limit with
            | Some l when l < tableData.Content.Length -> l
            | _ -> tableData.Content.Length

        let table =
            div [ Style [ unbox ("overflow", "auto") ] ]
                [ Table.table [ Table.IsBordered; Table.IsFullWidth; Table.IsStriped ]
                      [ thead []
                            [ tr []
                                  [ th [ OnClick(fun e -> dispatch (siteMsg (setMsg ("sort", "0")))) ]
                                        [ unbox (tableData.Header.[0].ToString()) ]
                                    for i in 1 .. tableData.Header.Length - 1 do
                                        th [ OnClick(fun e -> dispatch (siteMsg (setMsg ("sort", i.ToString())))) ]
                                            [ unbox (tableData.Header.[i].ToString()) ] ] ]
                        tbody []
                            [ for i in 0 .. (section - 1) ->
                                tr []
                                    [ for j in 0 .. tableData.Content.[i].Length - 1 ->
                                        th [] [ unbox (tableData.Content.[i].[j].ToString()) ] ] ] ] ] // :?> (float*string) |> fun (sum,meh) -> (convertFloatToString (Math.Round(sum ,3))) + " " + meh

        table
