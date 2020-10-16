type Logger() =
    member _.Zero _ = {|BlubbString = "1"|}
    member _.Yield _ = {|Blubb = 1|}
    [<CustomOperation "change_blubb">]
    member _.Output state = state 

let logX = Logger() 
let x =
    logX {
    do {}
}

x.Blubb