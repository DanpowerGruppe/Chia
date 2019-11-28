namespace Chia

module Logger =

    open Chia.FileWriter
    open Microsoft.ApplicationInsights.DataContracts
    open System

    module LogInfo =
        module PiServer =
            module Incomplete =
                let internal incompleteLog = logOk SeverityLevel.Information PiServer Incomplete

                module Insert =
                    let BlobTable = incompleteLog Insert BlobTable TimeSpan.Zero
                    let AzureTable = incompleteLog Insert AzureTable TimeSpan.Zero
                    let QueueTable = incompleteLog Insert QueueTable TimeSpan.Zero
                    let SqlTable = incompleteLog Insert SqlTable TimeSpan.Zero
                    let LocalStorage = incompleteLog Insert LocalStorage TimeSpan.Zero

                module Upload =
                    let BlobTable = incompleteLog Upload BlobTable TimeSpan.Zero
                    let AzureTable = incompleteLog Upload AzureTable TimeSpan.Zero
                    let QueueTable = incompleteLog Upload QueueTable TimeSpan.Zero
                    let SqlTable = incompleteLog Upload SqlTable TimeSpan.Zero
                    let LocalStorage = incompleteLog Upload LocalStorage TimeSpan.Zero

                module Download =
                    let BlobTable = incompleteLog Download BlobTable TimeSpan.Zero
                    let AzureTable = incompleteLog Download AzureTable TimeSpan.Zero
                    let QueueTable = incompleteLog Download QueueTable TimeSpan.Zero
                    let SqlTable = incompleteLog Download SqlTable TimeSpan.Zero
                    let LocalStorage = incompleteLog Download LocalStorage TimeSpan.Zero

                module Query =
                    let BlobTable = incompleteLog Query BlobTable TimeSpan.Zero
                    let AzureTable = incompleteLog Query AzureTable TimeSpan.Zero
                    let QueueTable = incompleteLog Query QueueTable TimeSpan.Zero
                    let SqlTable = incompleteLog Query SqlTable TimeSpan.Zero
                    let LocalStorage = incompleteLog Query LocalStorage TimeSpan.Zero

                module Create =
                    let BlobTable = incompleteLog Create BlobTable TimeSpan.Zero
                    let AzureTable = incompleteLog Create AzureTable TimeSpan.Zero
                    let QueueTable = incompleteLog Create QueueTable TimeSpan.Zero
                    let SqlTable = incompleteLog Create SqlTable TimeSpan.Zero
                    let LocalStorage = incompleteLog Create LocalStorage TimeSpan.Zero

                module Delete =
                    let BlobTable = incompleteLog Delete BlobTable TimeSpan.Zero
                    let AzureTable = incompleteLog Delete AzureTable TimeSpan.Zero
                    let QueueTable = incompleteLog Delete QueueTable TimeSpan.Zero
                    let SqlTable = incompleteLog Delete SqlTable TimeSpan.Zero
                    let LocalStorage = incompleteLog Delete LocalStorage TimeSpan.Zero

                module Calculation =
                    let BlobTable = incompleteLog Calculation BlobTable TimeSpan.Zero
                    let AzureTable = incompleteLog Calculation AzureTable TimeSpan.Zero
                    let QueueTable = incompleteLog Calculation QueueTable TimeSpan.Zero
                    let SqlTable = incompleteLog Calculation SqlTable TimeSpan.Zero
                    let LocalStorage = incompleteLog Calculation LocalStorage TimeSpan.Zero

            module Finished =
                let finishedLog = logOk SeverityLevel.Information PiServer Finished

                module Insert =
                    let BlobTable = finishedLog Insert BlobTable TimeSpan.Zero
                    let AzureTable = finishedLog Insert AzureTable TimeSpan.Zero
                    let QueueTable = finishedLog Insert QueueTable TimeSpan.Zero
                    let SqlTable = finishedLog Insert SqlTable TimeSpan.Zero
                    let LocalStorage = finishedLog Insert LocalStorage TimeSpan.Zero

                module Upload =
                    let BlobTable = finishedLog Upload BlobTable TimeSpan.Zero
                    let AzureTable = finishedLog Upload AzureTable TimeSpan.Zero
                    let QueueTable = finishedLog Upload QueueTable TimeSpan.Zero
                    let SqlTable = finishedLog Upload SqlTable TimeSpan.Zero
                    let LocalStorage = finishedLog Upload LocalStorage TimeSpan.Zero

                module Download =

                    let BlobTable = finishedLog Download BlobTable TimeSpan.Zero
                    let AzureTable = finishedLog Download AzureTable TimeSpan.Zero
                    let QueueTable = finishedLog Download QueueTable TimeSpan.Zero
                    let SqlTable = finishedLog Download SqlTable TimeSpan.Zero
                    let LocalStorage = finishedLog Download LocalStorage TimeSpan.Zero

                module Query =
                    let BlobTable = finishedLog Query BlobTable TimeSpan.Zero
                    let AzureTable = finishedLog Query AzureTable TimeSpan.Zero
                    let QueueTable = finishedLog Query QueueTable TimeSpan.Zero
                    let SqlTable = finishedLog Query SqlTable TimeSpan.Zero
                    let LocalStorage = finishedLog Query LocalStorage TimeSpan.Zero

                module Create =
                    let BlobTable = finishedLog Create BlobTable TimeSpan.Zero
                    let AzureTable = finishedLog Create AzureTable TimeSpan.Zero
                    let QueueTable = finishedLog Create QueueTable TimeSpan.Zero
                    let SqlTable = finishedLog Create SqlTable TimeSpan.Zero
                    let LocalStorage = finishedLog Create LocalStorage TimeSpan.Zero

                module Delete =
                    let BlobTable = finishedLog Delete BlobTable TimeSpan.Zero
                    let AzureTable = finishedLog Delete AzureTable TimeSpan.Zero
                    let QueueTable = finishedLog Delete QueueTable TimeSpan.Zero
                    let SqlTable = finishedLog Delete SqlTable TimeSpan.Zero
                    let LocalStorage = finishedLog Delete LocalStorage TimeSpan.Zero

                module Calculation =
                    let BlobTable = finishedLog Calculation BlobTable TimeSpan.Zero
                    let AzureTable = finishedLog Calculation AzureTable TimeSpan.Zero
                    let QueueTable = finishedLog Calculation QueueTable TimeSpan.Zero
                    let SqlTable = finishedLog Calculation SqlTable TimeSpan.Zero
                    let LocalStorage = finishedLog Calculation LocalStorage TimeSpan.Zero

        module LocalService =
            let localService = logOk SeverityLevel.Critical LocalService

            module Incomplete =
                let incompleteLog = localService Incomplete

                module Insert =
                    let BlobTable = incompleteLog Insert BlobTable TimeSpan.Zero
                    let AzureTable = incompleteLog Insert AzureTable TimeSpan.Zero
                    let QueueTable = incompleteLog Insert QueueTable TimeSpan.Zero
                    let SqlTable = incompleteLog Insert SqlTable TimeSpan.Zero
                    let LocalStorage = incompleteLog Upload LocalStorage TimeSpan.Zero

                module Upload =
                    let BlobTable = incompleteLog Upload BlobTable TimeSpan.Zero
                    let AzureTable = incompleteLog Upload AzureTable TimeSpan.Zero
                    let QueueTable = incompleteLog Upload QueueTable TimeSpan.Zero
                    let SqlTable = incompleteLog Upload SqlTable TimeSpan.Zero
                    let LocalStorage = incompleteLog Upload LocalStorage TimeSpan.Zero

                module Download =
                    let BlobTable = incompleteLog Download BlobTable TimeSpan.Zero
                    let AzureTable = incompleteLog Download AzureTable TimeSpan.Zero
                    let QueueTable = incompleteLog Download QueueTable TimeSpan.Zero
                    let SqlTable = incompleteLog Download SqlTable TimeSpan.Zero
                    let LocalStorage = incompleteLog Download LocalStorage TimeSpan.Zero

                module Query =
                    let BlobTable = incompleteLog Query BlobTable TimeSpan.Zero
                    let AzureTable = incompleteLog Query AzureTable TimeSpan.Zero
                    let QueueTable = incompleteLog Query QueueTable TimeSpan.Zero
                    let LocalStorage = incompleteLog Query LocalStorage TimeSpan.Zero

                module Create =
                    let BlobTable = incompleteLog Create BlobTable TimeSpan.Zero
                    let AzureTable = incompleteLog Create AzureTable TimeSpan.Zero
                    let QueueTable = incompleteLog Create QueueTable TimeSpan.Zero
                    let SqlTable = incompleteLog Create SqlTable TimeSpan.Zero
                    let LocalStorage = incompleteLog Create LocalStorage TimeSpan.Zero

                module Delete =
                    let BlobTable = incompleteLog Delete BlobTable TimeSpan.Zero
                    let AzureTable = incompleteLog Delete AzureTable TimeSpan.Zero
                    let QueueTable = incompleteLog Delete QueueTable TimeSpan.Zero
                    let SqlTable = incompleteLog Delete SqlTable TimeSpan.Zero
                    let LocalStorage = incompleteLog Delete LocalStorage TimeSpan.Zero

                module Calculation =
                    let BlobTable = incompleteLog Calculation BlobTable TimeSpan.Zero
                    let AzureTable = incompleteLog Calculation AzureTable TimeSpan.Zero
                    let QueueTable = incompleteLog Calculation QueueTable TimeSpan.Zero
                    let SqlTable = incompleteLog Calculation SqlTable TimeSpan.Zero
                    let LocalStorage = incompleteLog Calculation LocalStorage TimeSpan.Zero

            module Starting =
                let startingLog = logOk SeverityLevel.Critical LocalService Starting

                module Insert =
                    let BlobTable = startingLog Insert BlobTable TimeSpan.Zero
                    let AzureTable = startingLog Insert AzureTable TimeSpan.Zero
                    let QueueTable = startingLog Insert QueueTable TimeSpan.Zero
                    let SqlTable = startingLog Insert SqlTable TimeSpan.Zero
                    let LocalStorage = startingLog Upload LocalStorage TimeSpan.Zero

                module Upload =
                    let BlobTable = startingLog Upload BlobTable TimeSpan.Zero
                    let AzureTable = startingLog Upload AzureTable TimeSpan.Zero
                    let QueueTable = startingLog Upload QueueTable TimeSpan.Zero
                    let SqlTable = startingLog Upload SqlTable TimeSpan.Zero
                    let LocalStorage = startingLog Upload LocalStorage TimeSpan.Zero

                module Download =

                    let BlobTable = startingLog Download BlobTable TimeSpan.Zero
                    let AzureTable = startingLog Download AzureTable TimeSpan.Zero
                    let QueueTable = startingLog Download QueueTable TimeSpan.Zero
                    let SqlTable = startingLog Download SqlTable TimeSpan.Zero
                    let LocalStorage = startingLog Upload LocalStorage TimeSpan.Zero

                module Query =
                    let BlobTable = startingLog Query BlobTable TimeSpan.Zero
                    let AzureTable = startingLog Query AzureTable TimeSpan.Zero
                    let QueueTable = startingLog Query QueueTable TimeSpan.Zero
                    let SqlTable = startingLog Query SqlTable TimeSpan.Zero
                    let LocalStorage = startingLog Upload LocalStorage TimeSpan.Zero

                module Create =
                    let BlobTable = startingLog Create BlobTable TimeSpan.Zero
                    let AzureTable = startingLog Create AzureTable TimeSpan.Zero
                    let QueueTable = startingLog Create QueueTable TimeSpan.Zero
                    let SqlTable = startingLog Create SqlTable TimeSpan.Zero
                    let LocalStorage = startingLog Upload LocalStorage TimeSpan.Zero

                module Delete =
                    let BlobTable = startingLog Delete BlobTable TimeSpan.Zero
                    let AzureTable = startingLog Delete AzureTable TimeSpan.Zero
                    let QueueTable = startingLog Delete QueueTable TimeSpan.Zero
                    let SqlTable = startingLog Delete SqlTable TimeSpan.Zero
                    let LocalStorage = startingLog Upload LocalStorage TimeSpan.Zero

                module Calculation =
                    let BlobTable = startingLog Calculation BlobTable TimeSpan.Zero
                    let AzureTable = startingLog Calculation AzureTable TimeSpan.Zero
                    let QueueTable = startingLog Calculation QueueTable TimeSpan.Zero
                    let SqlTable = startingLog Calculation SqlTable TimeSpan.Zero
                    let LocalStorage = startingLog Upload LocalStorage TimeSpan.Zero

            module Finished =
                let finishedLog = logOk SeverityLevel.Critical LocalService Finished

                module Insert =
                    let BlobTable = finishedLog Insert BlobTable TimeSpan.Zero
                    let AzureTable = finishedLog Insert AzureTable TimeSpan.Zero
                    let QueueTable = finishedLog Insert QueueTable TimeSpan.Zero
                    let SqlTable = finishedLog Insert SqlTable TimeSpan.Zero
                    let LocalStorage = finishedLog Upload LocalStorage TimeSpan.Zero

                module Upload =
                    let BlobTable = finishedLog Upload BlobTable TimeSpan.Zero
                    let AzureTable = finishedLog Upload AzureTable TimeSpan.Zero
                    let QueueTable = finishedLog Upload QueueTable TimeSpan.Zero
                    let SqlTable = finishedLog Upload SqlTable TimeSpan.Zero
                    let LocalStorage = finishedLog Upload LocalStorage TimeSpan.Zero

                module Download =

                    let BlobTable = finishedLog Download BlobTable TimeSpan.Zero
                    let AzureTable = finishedLog Download AzureTable TimeSpan.Zero
                    let QueueTable = finishedLog Download QueueTable TimeSpan.Zero
                    let SqlTable = finishedLog Download SqlTable TimeSpan.Zero
                    let LocalStorage = finishedLog Upload LocalStorage TimeSpan.Zero

                module Query =
                    let BlobTable = finishedLog Query BlobTable TimeSpan.Zero
                    let AzureTable = finishedLog Query AzureTable TimeSpan.Zero
                    let QueueTable = finishedLog Query QueueTable TimeSpan.Zero
                    let SqlTable = finishedLog Query SqlTable TimeSpan.Zero
                    let LocalStorage = finishedLog Upload LocalStorage TimeSpan.Zero

                module Create =
                    let BlobTable = finishedLog Create BlobTable TimeSpan.Zero
                    let AzureTable = finishedLog Create AzureTable TimeSpan.Zero
                    let QueueTable = finishedLog Create QueueTable TimeSpan.Zero
                    let SqlTable = finishedLog Create SqlTable TimeSpan.Zero
                    let LocalStorage = finishedLog Upload LocalStorage TimeSpan.Zero

                module Delete =
                    let BlobTable = finishedLog Delete BlobTable TimeSpan.Zero
                    let AzureTable = finishedLog Delete AzureTable TimeSpan.Zero
                    let QueueTable = finishedLog Delete QueueTable TimeSpan.Zero
                    let SqlTable = finishedLog Delete SqlTable TimeSpan.Zero
                    let LocalStorage = finishedLog Upload LocalStorage TimeSpan.Zero

                module Calculation =
                    let BlobTable = finishedLog Calculation BlobTable TimeSpan.Zero
                    let AzureTable = finishedLog Calculation AzureTable TimeSpan.Zero
                    let QueueTable = finishedLog Calculation QueueTable TimeSpan.Zero
                    let SqlTable = finishedLog Calculation SqlTable TimeSpan.Zero
                    let LocalStorage = finishedLog Upload LocalStorage TimeSpan.Zero

        module AzureFunction =
            let azureFunction = logOk SeverityLevel.Critical AzureFunction
            let azureFunctionError exn = logError exn SeverityLevel.Critical AzureFunction

            module Incomplete =
                let incompleteLog exn = azureFunctionError exn Incomplete

                module Insert =
                    let BlobTable exn = incompleteLog exn Insert BlobTable TimeSpan.Zero
                    let AzureTable exn = incompleteLog exn Insert AzureTable TimeSpan.Zero
                    let QueueTable exn = incompleteLog exn Insert QueueTable TimeSpan.Zero
                    let SqlTable exn = incompleteLog exn Insert SqlTable TimeSpan.Zero
                    let LocalStorage exn = incompleteLog exn Upload LocalStorage TimeSpan.Zero

                module Upload =
                    let BlobTable exn = incompleteLog exn Upload BlobTable TimeSpan.Zero
                    let AzureTable exn = incompleteLog exn Upload AzureTable TimeSpan.Zero
                    let QueueTable exn = incompleteLog exn Upload QueueTable TimeSpan.Zero
                    let SqlTable exn = incompleteLog exn Upload SqlTable TimeSpan.Zero
                    let LocalStorage exn = incompleteLog exn Upload LocalStorage TimeSpan.Zero

                module Download =
                    let BlobTable exn = incompleteLog exn Download BlobTable TimeSpan.Zero
                    let AzureTable exn = incompleteLog exn Download AzureTable TimeSpan.Zero
                    let QueueTable exn = incompleteLog exn Download QueueTable TimeSpan.Zero
                    let SqlTable exn = incompleteLog exn Download SqlTable TimeSpan.Zero
                    let LocalStorage exn = incompleteLog exn Download LocalStorage TimeSpan.Zero

                module Query =
                    let BlobTable exn = incompleteLog exn Query BlobTable TimeSpan.Zero
                    let AzureTable exn = incompleteLog exn Query AzureTable TimeSpan.Zero
                    let QueueTable exn = incompleteLog exn Query QueueTable TimeSpan.Zero
                    let LocalStorage exn = incompleteLog exn Query LocalStorage TimeSpan.Zero

                module Create =
                    let BlobTable exn = incompleteLog exn Create BlobTable TimeSpan.Zero
                    let AzureTable exn = incompleteLog exn Create AzureTable TimeSpan.Zero
                    let QueueTable exn = incompleteLog exn Create QueueTable TimeSpan.Zero
                    let SqlTable exn = incompleteLog exn Create SqlTable TimeSpan.Zero
                    let LocalStorage exn = incompleteLog exn Create LocalStorage TimeSpan.Zero

                module Delete =
                    let BlobTable exn = incompleteLog exn Delete BlobTable TimeSpan.Zero
                    let AzureTable exn = incompleteLog exn Delete AzureTable TimeSpan.Zero
                    let QueueTable exn = incompleteLog exn Delete QueueTable TimeSpan.Zero
                    let SqlTable exn = incompleteLog exn Delete SqlTable TimeSpan.Zero
                    let LocalStorage exn = incompleteLog exn Delete LocalStorage TimeSpan.Zero

                module Calculation =
                    let BlobTable exn = incompleteLog exn Calculation BlobTable TimeSpan.Zero
                    let AzureTable exn = incompleteLog exn Calculation AzureTable TimeSpan.Zero
                    let QueueTable exn = incompleteLog exn Calculation QueueTable TimeSpan.Zero
                    let SqlTable exn = incompleteLog exn Calculation SqlTable TimeSpan.Zero
                    let LocalStorage exn = incompleteLog exn Calculation LocalStorage TimeSpan.Zero

            module Starting =
                let startingLog = logOk SeverityLevel.Critical LocalService Starting

                module Insert =
                    let BlobTable = startingLog Insert BlobTable TimeSpan.Zero
                    let AzureTable = startingLog Insert AzureTable TimeSpan.Zero
                    let QueueTable = startingLog Insert QueueTable TimeSpan.Zero
                    let SqlTable = startingLog Insert SqlTable TimeSpan.Zero
                    let LocalStorage = startingLog Upload LocalStorage TimeSpan.Zero

                module Upload =
                    let BlobTable = startingLog Upload BlobTable TimeSpan.Zero
                    let AzureTable = startingLog Upload AzureTable TimeSpan.Zero
                    let QueueTable = startingLog Upload QueueTable TimeSpan.Zero
                    let SqlTable = startingLog Upload SqlTable TimeSpan.Zero
                    let LocalStorage = startingLog Upload LocalStorage TimeSpan.Zero

                module Download =

                    let BlobTable = startingLog Download BlobTable TimeSpan.Zero
                    let AzureTable = startingLog Download AzureTable TimeSpan.Zero
                    let QueueTable = startingLog Download QueueTable TimeSpan.Zero
                    let SqlTable = startingLog Download SqlTable TimeSpan.Zero
                    let LocalStorage = startingLog Upload LocalStorage TimeSpan.Zero

                module Query =
                    let BlobTable = startingLog Query BlobTable TimeSpan.Zero
                    let AzureTable = startingLog Query AzureTable TimeSpan.Zero
                    let QueueTable = startingLog Query QueueTable TimeSpan.Zero
                    let SqlTable = startingLog Query SqlTable TimeSpan.Zero
                    let LocalStorage = startingLog Upload LocalStorage TimeSpan.Zero

                module Create =
                    let BlobTable = startingLog Create BlobTable TimeSpan.Zero
                    let AzureTable = startingLog Create AzureTable TimeSpan.Zero
                    let QueueTable = startingLog Create QueueTable TimeSpan.Zero
                    let SqlTable = startingLog Create SqlTable TimeSpan.Zero
                    let LocalStorage = startingLog Upload LocalStorage TimeSpan.Zero

                module Delete =
                    let BlobTable = startingLog Delete BlobTable TimeSpan.Zero
                    let AzureTable = startingLog Delete AzureTable TimeSpan.Zero
                    let QueueTable = startingLog Delete QueueTable TimeSpan.Zero
                    let SqlTable = startingLog Delete SqlTable TimeSpan.Zero
                    let LocalStorage = startingLog Upload LocalStorage TimeSpan.Zero

                module Calculation =
                    let BlobTable = startingLog Calculation BlobTable TimeSpan.Zero
                    let AzureTable = startingLog Calculation AzureTable TimeSpan.Zero
                    let QueueTable = startingLog Calculation QueueTable TimeSpan.Zero
                    let SqlTable = startingLog Calculation SqlTable TimeSpan.Zero
                    let LocalStorage = startingLog Upload LocalStorage TimeSpan.Zero

            module Finished =
                let finishedLog = logOk SeverityLevel.Critical LocalService Finished

                module Insert =
                    let BlobTable = finishedLog Insert BlobTable TimeSpan.Zero
                    let AzureTable = finishedLog Insert AzureTable TimeSpan.Zero
                    let QueueTable = finishedLog Insert QueueTable TimeSpan.Zero
                    let SqlTable = finishedLog Insert SqlTable TimeSpan.Zero
                    let LocalStorage = finishedLog Upload LocalStorage TimeSpan.Zero

                module Upload =
                    let BlobTable = finishedLog Upload BlobTable TimeSpan.Zero
                    let AzureTable = finishedLog Upload AzureTable TimeSpan.Zero
                    let QueueTable = finishedLog Upload QueueTable TimeSpan.Zero
                    let SqlTable = finishedLog Upload SqlTable TimeSpan.Zero
                    let LocalStorage = finishedLog Upload LocalStorage TimeSpan.Zero

                module Download =

                    let BlobTable = finishedLog Download BlobTable TimeSpan.Zero
                    let AzureTable = finishedLog Download AzureTable TimeSpan.Zero
                    let QueueTable = finishedLog Download QueueTable TimeSpan.Zero
                    let SqlTable = finishedLog Download SqlTable TimeSpan.Zero
                    let LocalStorage = finishedLog Upload LocalStorage TimeSpan.Zero

                module Query =
                    let BlobTable = finishedLog Query BlobTable TimeSpan.Zero
                    let AzureTable = finishedLog Query AzureTable TimeSpan.Zero
                    let QueueTable = finishedLog Query QueueTable TimeSpan.Zero
                    let SqlTable = finishedLog Query SqlTable TimeSpan.Zero
                    let LocalStorage = finishedLog Upload LocalStorage TimeSpan.Zero

                module Create =
                    let BlobTable = finishedLog Create BlobTable TimeSpan.Zero
                    let AzureTable = finishedLog Create AzureTable TimeSpan.Zero
                    let QueueTable = finishedLog Create QueueTable TimeSpan.Zero
                    let SqlTable = finishedLog Create SqlTable TimeSpan.Zero
                    let LocalStorage = finishedLog Upload LocalStorage TimeSpan.Zero

                module Delete =
                    let BlobTable = finishedLog Delete BlobTable TimeSpan.Zero
                    let AzureTable = finishedLog Delete AzureTable TimeSpan.Zero
                    let QueueTable = finishedLog Delete QueueTable TimeSpan.Zero
                    let SqlTable = finishedLog Delete SqlTable TimeSpan.Zero
                    let LocalStorage = finishedLog Upload LocalStorage TimeSpan.Zero

                module Calculation =
                    let BlobTable = finishedLog Calculation BlobTable TimeSpan.Zero
                    let AzureTable = finishedLog Calculation AzureTable TimeSpan.Zero
                    let QueueTable = finishedLog Calculation QueueTable TimeSpan.Zero
                    let SqlTable = finishedLog Calculation SqlTable TimeSpan.Zero
                    let LocalStorage = finishedLog Upload LocalStorage TimeSpan.Zero

    module LogCritical =
        module PiServer =
            module Incomplete =
                let incompleteLog exn = logError exn SeverityLevel.Critical PiServer Incomplete

                module Insert =
                    let BlobTable exn = incompleteLog exn Insert BlobTable TimeSpan.Zero
                    let AzureTable exn = incompleteLog exn Insert AzureTable TimeSpan.Zero
                    let QueueTable exn = incompleteLog exn Insert QueueTable TimeSpan.Zero
                    let SqlTable exn = incompleteLog exn Insert SqlTable TimeSpan.Zero
                    let LocalStorage exn = incompleteLog exn Insert LocalStorage TimeSpan.Zero

                module Upload =
                    let BlobTable exn = incompleteLog exn Upload BlobTable TimeSpan.Zero
                    let AzureTable exn = incompleteLog exn Upload AzureTable TimeSpan.Zero
                    let QueueTable exn = incompleteLog exn Upload QueueTable TimeSpan.Zero
                    let SqlTable exn = incompleteLog exn Upload SqlTable TimeSpan.Zero
                    let LocalStorage exn = incompleteLog exn Upload LocalStorage TimeSpan.Zero

                module Download =
                    let BlobTable exn = incompleteLog exn Download BlobTable TimeSpan.Zero
                    let AzureTable exn = incompleteLog exn Download AzureTable TimeSpan.Zero
                    let QueueTable exn = incompleteLog exn Download QueueTable TimeSpan.Zero
                    let SqlTable exn = incompleteLog exn Download SqlTable TimeSpan.Zero
                    let LocalStorage exn = incompleteLog exn Download LocalStorage TimeSpan.Zero

                module Query =
                    let BlobTable exn = incompleteLog exn Query BlobTable TimeSpan.Zero
                    let AzureTable exn = incompleteLog exn Query AzureTable TimeSpan.Zero
                    let QueueTable exn = incompleteLog exn Query QueueTable TimeSpan.Zero
                    let SqlTable exn = incompleteLog exn Query SqlTable TimeSpan.Zero
                    let LocalStorage exn = incompleteLog exn Query LocalStorage TimeSpan.Zero

                module Create =
                    let BlobTable exn = incompleteLog exn Create BlobTable TimeSpan.Zero
                    let AzureTable exn = incompleteLog exn Create AzureTable TimeSpan.Zero
                    let QueueTable exn = incompleteLog exn Create QueueTable TimeSpan.Zero
                    let SqlTable exn = incompleteLog exn Create SqlTable TimeSpan.Zero
                    let LocalStorage exn = incompleteLog exn Create LocalStorage TimeSpan.Zero

                module Delete =
                    let BlobTable exn = incompleteLog exn Delete BlobTable TimeSpan.Zero
                    let AzureTable exn = incompleteLog exn Delete AzureTable TimeSpan.Zero
                    let QueueTable exn = incompleteLog exn Delete QueueTable TimeSpan.Zero
                    let SqlTable exn = incompleteLog exn Delete SqlTable TimeSpan.Zero
                    let LocalStorage exn = incompleteLog exn Delete LocalStorage TimeSpan.Zero

                module Calculation =
                    let BlobTable exn = incompleteLog exn Calculation BlobTable TimeSpan.Zero
                    let AzureTable exn = incompleteLog exn Calculation AzureTable TimeSpan.Zero
                    let QueueTable exn = incompleteLog exn Calculation QueueTable TimeSpan.Zero
                    let SqlTable exn = incompleteLog exn Calculation SqlTable TimeSpan.Zero
                    let LocalStorage exn = incompleteLog exn Calculation LocalStorage TimeSpan.Zero

            module Finished =
                let finishedLog = logOk SeverityLevel.Critical PiServer Finished

                module Insert =
                    let BlobTable = finishedLog Insert BlobTable TimeSpan.Zero
                    let AzureTable = finishedLog Insert AzureTable TimeSpan.Zero
                    let QueueTable = finishedLog Insert QueueTable TimeSpan.Zero
                    let SqlTable = finishedLog Insert SqlTable TimeSpan.Zero
                    let LocalStorage = finishedLog Insert LocalStorage TimeSpan.Zero

                module Upload =
                    let BlobTable = finishedLog Upload BlobTable TimeSpan.Zero
                    let AzureTable = finishedLog Upload AzureTable TimeSpan.Zero
                    let QueueTable = finishedLog Upload QueueTable TimeSpan.Zero
                    let SqlTable = finishedLog Upload SqlTable TimeSpan.Zero
                    let LocalStorage = finishedLog Upload LocalStorage TimeSpan.Zero

                module Download =

                    let BlobTable = finishedLog Download BlobTable TimeSpan.Zero
                    let AzureTable = finishedLog Download AzureTable TimeSpan.Zero
                    let QueueTable = finishedLog Download QueueTable TimeSpan.Zero
                    let SqlTable = finishedLog Download SqlTable TimeSpan.Zero
                    let LocalStorage = finishedLog Download LocalStorage TimeSpan.Zero

                module Query =
                    let BlobTable = finishedLog Query BlobTable TimeSpan.Zero
                    let AzureTable = finishedLog Query AzureTable TimeSpan.Zero
                    let QueueTable = finishedLog Query QueueTable TimeSpan.Zero
                    let SqlTable = finishedLog Query SqlTable TimeSpan.Zero
                    let LocalStorage = finishedLog Query LocalStorage TimeSpan.Zero

                module Create =
                    let BlobTable = finishedLog Create BlobTable TimeSpan.Zero
                    let AzureTable = finishedLog Create AzureTable TimeSpan.Zero
                    let QueueTable = finishedLog Create QueueTable TimeSpan.Zero
                    let SqlTable = finishedLog Create SqlTable TimeSpan.Zero
                    let LocalStorage = finishedLog Create LocalStorage TimeSpan.Zero

                module Delete =
                    let BlobTable = finishedLog Delete BlobTable TimeSpan.Zero
                    let AzureTable = finishedLog Delete AzureTable TimeSpan.Zero
                    let QueueTable = finishedLog Delete QueueTable TimeSpan.Zero
                    let SqlTable = finishedLog Delete SqlTable TimeSpan.Zero
                    let LocalStorage = finishedLog Delete LocalStorage TimeSpan.Zero

                module Calculation =
                    let BlobTable = finishedLog Calculation BlobTable TimeSpan.Zero
                    let AzureTable = finishedLog Calculation AzureTable TimeSpan.Zero
                    let QueueTable = finishedLog Calculation QueueTable TimeSpan.Zero
                    let SqlTable = finishedLog Calculation SqlTable TimeSpan.Zero
                    let LocalStorage = finishedLog Calculation LocalStorage TimeSpan.Zero

            module Starting =
                let startedLog = logOk SeverityLevel.Critical PiServer Starting

                module Insert =
                    let BlobTable = startedLog Insert BlobTable TimeSpan.Zero
                    let AzureTable = startedLog Insert AzureTable TimeSpan.Zero
                    let QueueTable = startedLog Insert QueueTable TimeSpan.Zero
                    let SqlTable = startedLog Insert SqlTable TimeSpan.Zero
                    let LocalStorage = startedLog Insert LocalStorage TimeSpan.Zero

                module Upload =
                    let BlobTable = startedLog Upload BlobTable TimeSpan.Zero
                    let AzureTable = startedLog Upload AzureTable TimeSpan.Zero
                    let QueueTable = startedLog Upload QueueTable TimeSpan.Zero
                    let SqlTable = startedLog Upload SqlTable TimeSpan.Zero
                    let LocalStorage = startedLog Upload LocalStorage TimeSpan.Zero

                module Download =

                    let BlobTable = startedLog Download BlobTable TimeSpan.Zero
                    let AzureTable = startedLog Download AzureTable TimeSpan.Zero
                    let QueueTable = startedLog Download QueueTable TimeSpan.Zero
                    let SqlTable = startedLog Download SqlTable TimeSpan.Zero
                    let LocalStorage = startedLog Download LocalStorage TimeSpan.Zero

                module Query =
                    let BlobTable = startedLog Query BlobTable TimeSpan.Zero
                    let AzureTable = startedLog Query AzureTable TimeSpan.Zero
                    let QueueTable = startedLog Query QueueTable TimeSpan.Zero
                    let SqlTable = startedLog Query SqlTable TimeSpan.Zero
                    let LocalStorage = startedLog Query LocalStorage TimeSpan.Zero

                module Create =
                    let BlobTable = startedLog Create BlobTable TimeSpan.Zero
                    let AzureTable = startedLog Create AzureTable TimeSpan.Zero
                    let QueueTable = startedLog Create QueueTable TimeSpan.Zero
                    let SqlTable = startedLog Create SqlTable TimeSpan.Zero
                    let LocalStorage = startedLog Create LocalStorage TimeSpan.Zero

                module Delete =
                    let BlobTable = startedLog Delete BlobTable TimeSpan.Zero
                    let AzureTable = startedLog Delete AzureTable TimeSpan.Zero
                    let QueueTable = startedLog Delete QueueTable TimeSpan.Zero
                    let SqlTable = startedLog Delete SqlTable TimeSpan.Zero
                    let LocalStorage = startedLog Delete LocalStorage TimeSpan.Zero

                module Calculation =
                    let BlobTable = startedLog Calculation BlobTable TimeSpan.Zero
                    let AzureTable = startedLog Calculation AzureTable TimeSpan.Zero
                    let QueueTable = startedLog Calculation QueueTable TimeSpan.Zero
                    let SqlTable = startedLog Calculation SqlTable TimeSpan.Zero
                    let LocalStorage = startedLog Calculation LocalStorage TimeSpan.Zero

        module LocalService =
            let localService = logOk SeverityLevel.Critical LocalService
            let localServiceError exn = logError exn SeverityLevel.Critical LocalService

            module Incomplete =
                let incompleteLog exn = localServiceError exn Incomplete

                module Insert =
                    let BlobTable exn = incompleteLog exn Insert BlobTable TimeSpan.Zero
                    let AzureTable exn = incompleteLog exn Insert AzureTable TimeSpan.Zero
                    let QueueTable exn = incompleteLog exn Insert QueueTable TimeSpan.Zero
                    let SqlTable exn = incompleteLog exn Insert SqlTable TimeSpan.Zero
                    let LocalStorage exn = incompleteLog exn Insert LocalStorage TimeSpan.Zero

                module Upload =
                    let BlobTable exn = incompleteLog exn Upload BlobTable TimeSpan.Zero
                    let AzureTable exn = incompleteLog exn Upload AzureTable TimeSpan.Zero
                    let QueueTable exn = incompleteLog exn Upload QueueTable TimeSpan.Zero
                    let SqlTable exn = incompleteLog exn Upload SqlTable TimeSpan.Zero
                    let LocalStorage exn = incompleteLog exn Calculation LocalStorage TimeSpan.Zero

                module Download =
                    let BlobTable exn = incompleteLog exn Download BlobTable TimeSpan.Zero
                    let AzureTable exn = incompleteLog exn Download AzureTable TimeSpan.Zero
                    let QueueTable exn = incompleteLog exn Download QueueTable TimeSpan.Zero
                    let SqlTable exn = incompleteLog exn Download SqlTable TimeSpan.Zero
                    let LocalStorage exn = incompleteLog exn Calculation LocalStorage TimeSpan.Zero

                module Query =
                    let BlobTable exn = incompleteLog exn Query BlobTable TimeSpan.Zero
                    let AzureTable exn = incompleteLog exn Query AzureTable TimeSpan.Zero
                    let QueueTable exn = incompleteLog exn Query QueueTable TimeSpan.Zero
                    let SqlTable exn = incompleteLog exn Query SqlTable TimeSpan.Zero
                    let LocalStorage exn = incompleteLog exn Calculation LocalStorage TimeSpan.Zero

                module Create =
                    let BlobTable exn = incompleteLog exn Create BlobTable TimeSpan.Zero
                    let AzureTable exn = incompleteLog exn Create AzureTable TimeSpan.Zero
                    let QueueTable exn = incompleteLog exn Create QueueTable TimeSpan.Zero
                    let SqlTable exn = incompleteLog exn Create SqlTable TimeSpan.Zero
                    let LocalStorage exn = incompleteLog exn Calculation LocalStorage TimeSpan.Zero

                module Delete =
                    let BlobTable exn = incompleteLog exn Delete BlobTable TimeSpan.Zero
                    let AzureTable exn = incompleteLog exn Delete AzureTable TimeSpan.Zero
                    let QueueTable exn = incompleteLog exn Delete QueueTable TimeSpan.Zero
                    let SqlTable exn = incompleteLog exn Delete SqlTable TimeSpan.Zero
                    let LocalStorage exn = incompleteLog exn Calculation LocalStorage TimeSpan.Zero

                module Calculation =
                    let BlobTable exn = incompleteLog exn Calculation BlobTable TimeSpan.Zero
                    let AzureTable exn = incompleteLog exn Calculation AzureTable TimeSpan.Zero
                    let QueueTable exn = incompleteLog exn Calculation QueueTable TimeSpan.Zero
                    let SqlTable exn = incompleteLog exn Calculation SqlTable TimeSpan.Zero
                    let LocalStorage exn = incompleteLog exn Calculation LocalStorage TimeSpan.Zero

            module Finished =
                let finishedLog = logOk SeverityLevel.Critical LocalService Finished

                module Insert =
                    let BlobTable = finishedLog Insert BlobTable TimeSpan.Zero
                    let AzureTable = finishedLog Insert AzureTable TimeSpan.Zero
                    let QueueTable = finishedLog Insert QueueTable TimeSpan.Zero
                    let SqlTable = finishedLog Insert SqlTable TimeSpan.Zero
                    let LocalStorage = finishedLog Insert LocalStorage TimeSpan.Zero

                module Upload =
                    let BlobTable = finishedLog Upload BlobTable TimeSpan.Zero
                    let AzureTable = finishedLog Upload AzureTable TimeSpan.Zero
                    let QueueTable = finishedLog Upload QueueTable TimeSpan.Zero
                    let SqlTable = finishedLog Upload SqlTable TimeSpan.Zero
                    let LocalStorage = finishedLog Upload LocalStorage TimeSpan.Zero

                module Download =

                    let BlobTable = finishedLog Download BlobTable TimeSpan.Zero
                    let AzureTable = finishedLog Download AzureTable TimeSpan.Zero
                    let QueueTable = finishedLog Download QueueTable TimeSpan.Zero
                    let SqlTable = finishedLog Download SqlTable TimeSpan.Zero
                    let LocalStorage = finishedLog Download LocalStorage TimeSpan.Zero

                module Query =
                    let BlobTable = finishedLog Query BlobTable TimeSpan.Zero
                    let AzureTable = finishedLog Query AzureTable TimeSpan.Zero
                    let QueueTable = finishedLog Query QueueTable TimeSpan.Zero
                    let SqlTable = finishedLog Query SqlTable TimeSpan.Zero
                    let LocalStorage = finishedLog Query LocalStorage TimeSpan.Zero

                module Create =
                    let BlobTable = finishedLog Create BlobTable TimeSpan.Zero
                    let AzureTable = finishedLog Create AzureTable TimeSpan.Zero
                    let QueueTable = finishedLog Create QueueTable TimeSpan.Zero
                    let SqlTable = finishedLog Create SqlTable TimeSpan.Zero
                    let LocalStorage = finishedLog Create LocalStorage TimeSpan.Zero

                module Delete =
                    let BlobTable = finishedLog Delete BlobTable TimeSpan.Zero
                    let AzureTable = finishedLog Delete AzureTable TimeSpan.Zero
                    let QueueTable = finishedLog Delete QueueTable TimeSpan.Zero
                    let SqlTable = finishedLog Delete SqlTable TimeSpan.Zero
                    let LocalStorage = finishedLog Delete LocalStorage TimeSpan.Zero

                module Calculation =
                    let BlobTable = finishedLog Calculation BlobTable TimeSpan.Zero
                    let AzureTable = finishedLog Calculation AzureTable TimeSpan.Zero
                    let QueueTable = finishedLog Calculation QueueTable TimeSpan.Zero
                    let SqlTable = finishedLog Calculation SqlTable TimeSpan.Zero
                    let LocalStorage = finishedLog Calculation LocalStorage TimeSpan.Zero

            module Starting =
                let startedLog = logOk SeverityLevel.Critical LocalService Starting

                module Insert =
                    let BlobTable = startedLog Insert BlobTable TimeSpan.Zero
                    let AzureTable = startedLog Insert AzureTable TimeSpan.Zero
                    let QueueTable = startedLog Insert QueueTable TimeSpan.Zero
                    let SqlTable = startedLog Insert SqlTable TimeSpan.Zero
                    let LocalStorage = startedLog Insert LocalStorage TimeSpan.Zero

                module Upload =
                    let BlobTable = startedLog Upload BlobTable TimeSpan.Zero
                    let AzureTable = startedLog Upload AzureTable TimeSpan.Zero
                    let QueueTable = startedLog Upload QueueTable TimeSpan.Zero
                    let SqlTable = startedLog Upload SqlTable TimeSpan.Zero
                    let LocalStorage = startedLog Upload LocalStorage TimeSpan.Zero

                module Download =

                    let BlobTable = startedLog Download BlobTable TimeSpan.Zero
                    let AzureTable = startedLog Download AzureTable TimeSpan.Zero
                    let QueueTable = startedLog Download QueueTable TimeSpan.Zero
                    let SqlTable = startedLog Download SqlTable TimeSpan.Zero
                    let LocalStorage = startedLog Download LocalStorage TimeSpan.Zero

                module Query =
                    let BlobTable = startedLog Query BlobTable TimeSpan.Zero
                    let AzureTable = startedLog Query AzureTable TimeSpan.Zero
                    let QueueTable = startedLog Query QueueTable TimeSpan.Zero
                    let SqlTable = startedLog Query SqlTable TimeSpan.Zero
                    let LocalStorage = startedLog Query LocalStorage TimeSpan.Zero

                module Create =
                    let BlobTable = startedLog Create BlobTable TimeSpan.Zero
                    let AzureTable = startedLog Create AzureTable TimeSpan.Zero
                    let QueueTable = startedLog Create QueueTable TimeSpan.Zero
                    let SqlTable = startedLog Create SqlTable TimeSpan.Zero
                    let LocalStorage = startedLog Create LocalStorage TimeSpan.Zero

                module Delete =
                    let BlobTable = startedLog Delete BlobTable TimeSpan.Zero
                    let AzureTable = startedLog Delete AzureTable TimeSpan.Zero
                    let QueueTable = startedLog Delete QueueTable TimeSpan.Zero
                    let SqlTable = startedLog Delete SqlTable TimeSpan.Zero
                    let LocalStorage = startedLog Delete LocalStorage TimeSpan.Zero

                module Calculation =
                    let BlobTable = startedLog Calculation BlobTable TimeSpan.Zero
                    let AzureTable = startedLog Calculation AzureTable TimeSpan.Zero
                    let QueueTable = startedLog Calculation QueueTable TimeSpan.Zero
                    let SqlTable = startedLog Calculation SqlTable TimeSpan.Zero
                    let LocalStorage = startedLog Calculation LocalStorage TimeSpan.Zero

        module AzureFunction =
            let azureFunction = logOk SeverityLevel.Critical AzureFunction
            let azureFunctionError exn = logError exn SeverityLevel.Critical AzureFunction

            module Incomplete =
                let incompleteLog exn = azureFunctionError exn Incomplete

                module Insert =
                    let BlobTable exn = incompleteLog exn Insert BlobTable TimeSpan.Zero
                    let AzureTable exn = incompleteLog exn Insert AzureTable TimeSpan.Zero
                    let QueueTable exn = incompleteLog exn Insert QueueTable TimeSpan.Zero
                    let SqlTable exn = incompleteLog exn Insert SqlTable TimeSpan.Zero
                    let LocalStorage exn = incompleteLog exn Insert LocalStorage TimeSpan.Zero

                module Upload =
                    let BlobTable exn = incompleteLog exn Upload BlobTable TimeSpan.Zero
                    let AzureTable exn = incompleteLog exn Upload AzureTable TimeSpan.Zero
                    let QueueTable exn = incompleteLog exn Upload QueueTable TimeSpan.Zero
                    let SqlTable exn = incompleteLog exn Upload SqlTable TimeSpan.Zero
                    let LocalStorage exn = incompleteLog exn Calculation LocalStorage TimeSpan.Zero

                module Download =
                    let BlobTable exn = incompleteLog exn Download BlobTable TimeSpan.Zero
                    let AzureTable exn = incompleteLog exn Download AzureTable TimeSpan.Zero
                    let QueueTable exn = incompleteLog exn Download QueueTable TimeSpan.Zero
                    let SqlTable exn = incompleteLog exn Download SqlTable TimeSpan.Zero
                    let LocalStorage exn = incompleteLog exn Calculation LocalStorage TimeSpan.Zero

                module Query =
                    let BlobTable exn = incompleteLog exn Query BlobTable TimeSpan.Zero
                    let AzureTable exn = incompleteLog exn Query AzureTable TimeSpan.Zero
                    let QueueTable exn = incompleteLog exn Query QueueTable TimeSpan.Zero
                    let SqlTable exn = incompleteLog exn Query SqlTable TimeSpan.Zero
                    let LocalStorage exn = incompleteLog exn Calculation LocalStorage TimeSpan.Zero

                module Create =
                    let BlobTable exn = incompleteLog exn Create BlobTable TimeSpan.Zero
                    let AzureTable exn = incompleteLog exn Create AzureTable TimeSpan.Zero
                    let QueueTable exn = incompleteLog exn Create QueueTable TimeSpan.Zero
                    let SqlTable exn = incompleteLog exn Create SqlTable TimeSpan.Zero
                    let LocalStorage exn = incompleteLog exn Calculation LocalStorage TimeSpan.Zero

                module Delete =
                    let BlobTable exn = incompleteLog exn Delete BlobTable TimeSpan.Zero
                    let AzureTable exn = incompleteLog exn Delete AzureTable TimeSpan.Zero
                    let QueueTable exn = incompleteLog exn Delete QueueTable TimeSpan.Zero
                    let SqlTable exn = incompleteLog exn Delete SqlTable TimeSpan.Zero
                    let LocalStorage exn = incompleteLog exn Calculation LocalStorage TimeSpan.Zero

                module Calculation =
                    let BlobTable exn = incompleteLog exn Calculation BlobTable TimeSpan.Zero
                    let AzureTable exn = incompleteLog exn Calculation AzureTable TimeSpan.Zero
                    let QueueTable exn = incompleteLog exn Calculation QueueTable TimeSpan.Zero
                    let SqlTable exn = incompleteLog exn Calculation SqlTable TimeSpan.Zero
                    let LocalStorage exn = incompleteLog exn Calculation LocalStorage TimeSpan.Zero

            module Finished =
                let finishedLog = logOk SeverityLevel.Critical LocalService Finished

                module Insert =
                    let BlobTable = finishedLog Insert BlobTable TimeSpan.Zero
                    let AzureTable = finishedLog Insert AzureTable TimeSpan.Zero
                    let QueueTable = finishedLog Insert QueueTable TimeSpan.Zero
                    let SqlTable = finishedLog Insert SqlTable TimeSpan.Zero
                    let LocalStorage = finishedLog Insert LocalStorage TimeSpan.Zero

                module Upload =
                    let BlobTable = finishedLog Upload BlobTable TimeSpan.Zero
                    let AzureTable = finishedLog Upload AzureTable TimeSpan.Zero
                    let QueueTable = finishedLog Upload QueueTable TimeSpan.Zero
                    let SqlTable = finishedLog Upload SqlTable TimeSpan.Zero
                    let LocalStorage = finishedLog Upload LocalStorage TimeSpan.Zero

                module Download =

                    let BlobTable = finishedLog Download BlobTable TimeSpan.Zero
                    let AzureTable = finishedLog Download AzureTable TimeSpan.Zero
                    let QueueTable = finishedLog Download QueueTable TimeSpan.Zero
                    let SqlTable = finishedLog Download SqlTable TimeSpan.Zero
                    let LocalStorage = finishedLog Download LocalStorage TimeSpan.Zero

                module Query =
                    let BlobTable = finishedLog Query BlobTable TimeSpan.Zero
                    let AzureTable = finishedLog Query AzureTable TimeSpan.Zero
                    let QueueTable = finishedLog Query QueueTable TimeSpan.Zero
                    let SqlTable = finishedLog Query SqlTable TimeSpan.Zero
                    let LocalStorage = finishedLog Query LocalStorage TimeSpan.Zero

                module Create =
                    let BlobTable = finishedLog Create BlobTable TimeSpan.Zero
                    let AzureTable = finishedLog Create AzureTable TimeSpan.Zero
                    let QueueTable = finishedLog Create QueueTable TimeSpan.Zero
                    let SqlTable = finishedLog Create SqlTable TimeSpan.Zero
                    let LocalStorage = finishedLog Create LocalStorage TimeSpan.Zero

                module Delete =
                    let BlobTable = finishedLog Delete BlobTable TimeSpan.Zero
                    let AzureTable = finishedLog Delete AzureTable TimeSpan.Zero
                    let QueueTable = finishedLog Delete QueueTable TimeSpan.Zero
                    let SqlTable = finishedLog Delete SqlTable TimeSpan.Zero
                    let LocalStorage = finishedLog Delete LocalStorage TimeSpan.Zero

                module Calculation =
                    let BlobTable = finishedLog Calculation BlobTable TimeSpan.Zero
                    let AzureTable = finishedLog Calculation AzureTable TimeSpan.Zero
                    let QueueTable = finishedLog Calculation QueueTable TimeSpan.Zero
                    let SqlTable = finishedLog Calculation SqlTable TimeSpan.Zero
                    let LocalStorage = finishedLog Calculation LocalStorage TimeSpan.Zero

            module Starting =
                let startedLog = logOk SeverityLevel.Critical LocalService Starting

                module Insert =
                    let BlobTable = startedLog Insert BlobTable TimeSpan.Zero
                    let AzureTable = startedLog Insert AzureTable TimeSpan.Zero
                    let QueueTable = startedLog Insert QueueTable TimeSpan.Zero
                    let SqlTable = startedLog Insert SqlTable TimeSpan.Zero
                    let LocalStorage = startedLog Insert LocalStorage TimeSpan.Zero

                module Upload =
                    let BlobTable = startedLog Upload BlobTable TimeSpan.Zero
                    let AzureTable = startedLog Upload AzureTable TimeSpan.Zero
                    let QueueTable = startedLog Upload QueueTable TimeSpan.Zero
                    let SqlTable = startedLog Upload SqlTable TimeSpan.Zero
                    let LocalStorage = startedLog Upload LocalStorage TimeSpan.Zero

                module Download =

                    let BlobTable = startedLog Download BlobTable TimeSpan.Zero
                    let AzureTable = startedLog Download AzureTable TimeSpan.Zero
                    let QueueTable = startedLog Download QueueTable TimeSpan.Zero
                    let SqlTable = startedLog Download SqlTable TimeSpan.Zero
                    let LocalStorage = startedLog Download LocalStorage TimeSpan.Zero

                module Query =
                    let BlobTable = startedLog Query BlobTable TimeSpan.Zero
                    let AzureTable = startedLog Query AzureTable TimeSpan.Zero
                    let QueueTable = startedLog Query QueueTable TimeSpan.Zero
                    let SqlTable = startedLog Query SqlTable TimeSpan.Zero
                    let LocalStorage = startedLog Query LocalStorage TimeSpan.Zero

                module Create =
                    let BlobTable = startedLog Create BlobTable TimeSpan.Zero
                    let AzureTable = startedLog Create AzureTable TimeSpan.Zero
                    let QueueTable = startedLog Create QueueTable TimeSpan.Zero
                    let SqlTable = startedLog Create SqlTable TimeSpan.Zero
                    let LocalStorage = startedLog Create LocalStorage TimeSpan.Zero

                module Delete =
                    let BlobTable = startedLog Delete BlobTable TimeSpan.Zero
                    let AzureTable = startedLog Delete AzureTable TimeSpan.Zero
                    let QueueTable = startedLog Delete QueueTable TimeSpan.Zero
                    let SqlTable = startedLog Delete SqlTable TimeSpan.Zero
                    let LocalStorage = startedLog Delete LocalStorage TimeSpan.Zero

                module Calculation =
                    let BlobTable = startedLog Calculation BlobTable TimeSpan.Zero
                    let AzureTable = startedLog Calculation AzureTable TimeSpan.Zero
                    let QueueTable = startedLog Calculation QueueTable TimeSpan.Zero
                    let SqlTable = startedLog Calculation SqlTable TimeSpan.Zero
                    let LocalStorage = startedLog Calculation LocalStorage TimeSpan.Zero
