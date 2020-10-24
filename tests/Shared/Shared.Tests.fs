module Shared.Tests

#if FABLE_COMPILER
open Fable.Mocha
#else
open Expecto
#endif
open Chia
open SharedUtils


let shared = testList "Shared" [
    testCase "Join strings" <| fun _ ->
        let expected = "1;2"
        let strArry = [|"1";"2"|]
        let actual = joinString strArry
        Expect.equal actual expected "Should be 1;2"
]
