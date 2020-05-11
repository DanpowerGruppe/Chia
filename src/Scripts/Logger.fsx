open System

type LoggerInfo = {
    Source : string
    SeverityLevel : string
    Operation : string
    Destination : string
    TimeSpan : TimeSpan
    FileWriterInfo : string
}


type Logger () =
    member _.Zero _ = {|Source = "1" ; SeverityLevel = ""|}
    member _.Yield _ = {|Blubb = 1 |}
    [<CustomOperation "changeBlubbStat">]
    member _.Output state = state

let log = Logger ()
let x = log {
    do ()
    changeBlubbStat
}

x.Blubb
