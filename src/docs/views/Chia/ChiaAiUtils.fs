module ChiaAIUtils

open Feliz
open Feliz.Bulma
open Shared

let overview =
    Html.div
        [ Bulma.title.h1 [ Html.text "Chia.AIUtils " ]
          Bulma.subtitle.h2 [ Html.text "Helper for ApplicationInsights" ]
          Html.hr []
          Bulma.content
              [ Html.p "Use the AI helper to post a EventTelemetry"
                code """
                open Chia
                open FileWriter
                open Microsoft.ApplicationInsights.DataContracts
                eventMsg "FTP files uploaded"
                    [ "Files", missingFiles |> Set.toList |> sprintf "%A"
                      "ExistingFiles", existingFiles |> Seq.length |> sprintf "%i" ] fileWriterInfo
                """
                Html.p "Use the AI helper to track an exception"
                code """
                open Chia
                open FileWriter
                open Microsoft.ApplicationInsights.DataContracts
                errorMsg (exn "NoAttachmentError")
                    [ "Mail", details.Mail
                      "EmailAddress", details.EmailAddress
                      "Subject", details.Subject ] fileWriterInfo
                """ ]
          fixDocsView "ChiaAIUtils" false ]
