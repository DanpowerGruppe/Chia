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

