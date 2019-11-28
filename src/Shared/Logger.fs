namespace Chia

module Logger =

    open Chia.FileWriter
    open Microsoft.ApplicationInsights.DataContracts
    open System

    module LogFinished =
        module PiServer =
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
        module AzureFunction =
            let finishedLog = logOk SeverityLevel.Information AzureFunction Finished

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
            let finishedLog = logOk SeverityLevel.Information LocalService Finished

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
        module LocalServer =
            let finishedLog = logOk SeverityLevel.Information LocalServer Finished

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

    module LogStarting =
        module LocalService =

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
        module LocalServer =
            let startingLog = logOk SeverityLevel.Critical LocalServer Starting

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

        module AzureFunction =
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

    module LogCritical =
        module PiServer =
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

        module LocalService =
            let localService = logOk SeverityLevel.Critical LocalService
            let localServiceError exn = logError exn SeverityLevel.Critical LocalService

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
        module AzureFunction =
            let azureFunction = logOk SeverityLevel.Critical AzureFunction
            let azureFunctionError exn = logError exn SeverityLevel.Critical AzureFunction

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
