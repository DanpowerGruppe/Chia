namespace Chia.Client

module CreateXml =
    open System.IO
    open System.Text
    open System.Xml

    /// F# Element Tree
    type Xml =
        | Element of string * string * Xml seq

        member this.WriteContentTo(writer : XmlWriter) =
            let rec write element =
                match element with
                | Element(name, value, children) ->
                    writer.WriteStartElement(name)
                    writer.WriteString(value)
                    children |> Seq.iter write
                    writer.WriteEndElement()
            write this

        override this.ToString() =
            let output = StringBuilder()
            using
                (new XmlTextWriter(new StringWriter(output),
                                   Formatting = Formatting.Indented))
                this.WriteContentTo
            output.ToString()

    /// Create the Xml-File and write the report to stream.
    let createXml (report : Xml, reportName) =
        let streamWriter = File.CreateText(reportName)
        streamWriter.Write(report)
        streamWriter.Close()
