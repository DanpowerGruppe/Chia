namespace Chia.Client

open OfficeOpenXml
open System.IO

module ExcelUtils =
    ///Function to start an ExcelApplication
    let startExcelApp () =
        let memoryStream = new MemoryStream ()
        let xlspackage = new ExcelPackage (memoryStream)
        xlspackage

