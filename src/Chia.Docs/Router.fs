module Router

open Feliz.Router

type Page =
    | Chia
    | ChiaInstallation
    | ChiaInitBuilder
    | ChiaAIUtils
    | ChiaRedisCache
    | ChiaEventHub
    | ChiaCreateXml
    | ChiaCreateTable
    | ChiaCreateBlob
    | ChiaPostToQueue
    | ChiaLogger
    | ChiaInfrastructure
    | ChiaGetTableEntry
    | ChiaExcelUtils
    | ChiaTableStorage
    | ChiaClient
    | ChiaClientInstallation
    | ChiaClientPageFlexer

let defaultPage = Chia

let parseUrl = function
    | [ "" ] -> Chia
    | [ "installation" ] -> ChiaInstallation
    | [ "initbuilder" ] -> ChiaInitBuilder
    | [ "aiutils" ] -> ChiaAIUtils
    | [ "rediscache" ] -> ChiaRedisCache
    | [ "eventhub" ] -> ChiaEventHub
    | [ "createxml" ] -> ChiaCreateXml
    | [ "createtable" ] -> ChiaCreateTable
    | [ "createblob" ] -> ChiaCreateBlob
    | [ "posttoqueue" ] -> ChiaPostToQueue
    | [ "gettableentry" ] -> ChiaGetTableEntry
    | [ "logger" ] -> ChiaLogger
    | [ "infrastructure" ] -> ChiaInfrastructure
    | [ "excelutils" ] -> ChiaExcelUtils
    | [ "tablestorage" ] -> ChiaTableStorage
    | [ "client" ] -> ChiaClient
    | [ "clientinstallation" ] -> ChiaClientInstallation
    | [ "clientpageflexer" ] -> ChiaClientPageFlexer
    | _ -> defaultPage

let getHref = function
    | Chia -> Router.format("")
    | ChiaInstallation -> Router.format("installation")
    | ChiaInitBuilder -> Router.format("initbuilder")
    | ChiaAIUtils -> Router.format("aiutils")
    | ChiaRedisCache -> Router.format("rediscache")
    | ChiaEventHub -> Router.format("eventhub")
    | ChiaCreateXml -> Router.format("createxml")
    | ChiaCreateTable -> Router.format("createtable")
    | ChiaCreateBlob -> Router.format("createblob")
    | ChiaPostToQueue -> Router.format("posttoqueue")
    | ChiaGetTableEntry -> Router.format("gettableentry")
    | ChiaLogger -> Router.format("logger")
    | ChiaInfrastructure -> Router.format("infrastructure")
    | ChiaExcelUtils -> Router.format("excelutils")
    | ChiaTableStorage -> Router.format("tablestorage")
    | ChiaClient -> Router.format("client")
    | ChiaClientInstallation -> Router.format("clientinstallation")
    | ChiaClientPageFlexer -> Router.format("clientpageflexer")
