namespace Goji
open System
open Goji
open OfficeOpenXml
open System.IO
open CreateBlob
open FSharp.Control.Tasks.ContextInsensitive

module ExcelUtils = 
    ///Function to start an ExcelApplication
    let startExcelApp () =
        let memoryStream = new MemoryStream ()
        let xlspackage = new ExcelPackage (memoryStream)
        xlspackage
    ///ReportHeader
    let reportHeader (reportName : string) (measures : Measure []) (wks : ExcelWorksheet) =
        let timeFrom =
            if measures <> [||] then
                measures
                |> Array.map (fun x -> x.Time)
                |> Array.min
                |> getNiceDateString
            else ""

        let timeTo =
            if measures <> [||] then
                measures
                |> Array.map (fun x -> x.Time)
                |> Array.max
                |> getNiceDateString
            else ""

        wks.Cells.[1, 1].Value <- "ReportName:"
        wks.Cells.[1, 2].Value <- reportName
        wks.Cells.[3, 1].Value <- "Date from:"
        wks.Cells.[4, 1].Value <- "Dat to:"
        wks.Cells.[3, 2].Value <- timeFrom
        wks.Cells.[4, 2].Value <- timeTo
