namespace Chia.Client
    open System
    [<AutoOpen>]
    module Domain =
        module Logging =
          type DevOption =
            | Local
            | Azure
            | LocalAndAzure
        module Config =


            type DevStatus =
                | Development
                | Test
                | PreProductive
                | Productive
                member this.GetValue =
                    match this with
                    | Development -> "development"
                    | Test -> "test"
                    | PreProductive -> "preproductive"
                    | Productive -> "productive"

        module Time =

            type ReportIntervall =
                | Daily
                | Weekly
                | Monthly
                | Quarterly
                | Halfyearly
                | Yearly

            type TimeFilters =
                { StartDate : string
                  StartDateLeavingPlants : string
                  EndDate : string
                  EndDateLeavingPlants : string
                  EndDateMinusOneDay : string option
                  StartVuPeriode : int
                  EndVuPeriode : int
                  EndVuPeriodeLast : int option
                  EndVuPeriodeQuotes : int }

            type TimeSpans =
                | Year
                | Halfyear
                | Quarter
                | Month
                | Week
                | Day
            type Aggregation =
            | Accumulated
            | Explicit
            type TimeModel =
                { ReportIntervall: ReportIntervall
                  DateStart: DateTimeOffset
                  DateEnd: DateTimeOffset }
        type Selection<'a> = { Value: 'a; Text: string }

        module Ids =
            type ReportId =
                | ReportId of reportId : int
                member this.GetValue = (fun (ReportId id) -> id) this
                member this.GetValueAsString = (fun (ReportId id) -> string id) this


            type SortableRowKey =
                | SortableRowKey of string
                member this.GetValue = (fun (SortableRowKey id) -> id) this
        module SortableRowKey =
            let toRowKey (dateTime : DateTime) =
                String.Format("{0:D19}", DateTime.MaxValue.Ticks - dateTime.Ticks) |> Ids.SortableRowKey
            let toDate (Ids.SortableRowKey ticks) = DateTime(DateTime.MaxValue.Ticks - int64 ticks)

        module Tables =
            type TableEntity =
                | Text of string
                | Float of float
                | Integer of int
                override this.ToString() =
                    match this with
                    | Text t -> t
                    | Float f -> let text = Math.Round(f,3) |> string
                                 text.Replace(".", ",")
                    | Integer i -> string i
            type TableRecord =
                { Header : TableEntity []
                  Content : TableEntity [] [] }

                member this.TransposeContent() =
                    match this.Content.Length with
                    | 0 ->
                        { Header = [||]
                          Content = [||] }
                    | _ ->
                        let content =
                            [| for y in 0..this.Content.[0].Length - 1 ->
                                   [| for x in 0..this.Content.Length ->
                                          match x with
                                          | 0 -> this.Header.[y]
                                          | _ -> this.Content.[x - 1].[y] |] |]
                        { Header = content.[0]
                          Content = content.[1..] }

                member this.SortBy(col, asc) =
                    let sort() =
                        /// new approach:
                        /// turn ints into floats and sort ints and floats
                        /// then sort string and append

                        let rec getArrays numbers strings (content : TableEntity [] []) =
                            if Array.isEmpty content then
                                (numbers,strings)
                            else
                                let line = content.[0]
                                match line.[col] with
                                | Integer i ->
                                    let crit = i |> float
                                    getArrays (Array.concat [|numbers;[|(crit,line)|]|]) strings content.[1..]
                                | Float f ->
                                    let crit = f
                                    getArrays (Array.concat [|numbers;[|(crit,line)|]|]) strings content.[1..]
                                | Text t -> getArrays numbers (Array.concat [|strings;[|(t,line)|]|])  content.[1..]

                        match col with
                        | col when col < this.Header.Length ->
                            let numbers,strings = getArrays [||] [||] this.Content

                            let sortedNumbers =
                                match asc with
                                | true ->
                                    numbers
                                    |> Array.sortBy (fun (crit,_) -> crit)
                                    |> Array.map (fun (_,content) -> content)
                                | false ->
                                    numbers
                                    |> Array.sortByDescending (fun (crit,_) -> crit)
                                    |> Array.map (fun (_,content) -> content)

                            let sortedStrings =
                                match asc with
                                | true ->
                                    strings
                                    |> Array.sortBy (fun (crit,_) -> crit)
                                    |> Array.map (fun (_,content) -> content)
                                | false ->
                                    strings
                                    |> Array.sortByDescending (fun (crit,_) -> crit)
                                    |> Array.map (fun (_,content) -> content)

                            let newContent = Array.concat [|sortedNumbers; sortedStrings|]

                            { this with Content = newContent }
                        | _ -> this
                    match this.Content.Length with
                    | 0 -> this
                    | _ when this.Content.[0].Length < col -> this
                    | _ -> sort()
