namespace Chia
    module SharedUtils =
        open Shared
        open Shared.Ids
        let joinString (s : string []) = String.concat (";") (s)

        let createPartKey (latitude, longitude) =
            (latitude |> string) + "-" + (longitude |> string)

        let getNiceDateString (sortableRowKey : Ids.SortableRowKey) =
            let date = sortableRowKey |> SortableRowKey.toDate
            date.ToString("dd.MM.yyyy HH:mm")

