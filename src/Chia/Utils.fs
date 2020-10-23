namespace Chia

module SharedUtils =
    open Shared.Ids
    open Shared.Time

    let joinString (s: string []) = String.concat (";") (s)

    let createPartKey (latitude, longitude) =
        (latitude |> string) + "-" + (longitude |> string)

    let getNiceDateString (sortableRowKey: Ids.SortableRowKey) =
        let date = sortableRowKey |> SortableRowKey.toDate
        date.ToString("dd.MM.yyyy HH:mm")

    let matchTimeFrameToCRON (intervall: ReportIntervall) =
        match intervall with
        | Daily -> "0 0 0 * * *"
        | _ -> failwith "not match"