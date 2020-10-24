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
    // | BulmaInstallation -> Router.format("installation")
    // | BulmaAPIDescription -> Router.format("api-description")
    // | QuickViewOverview -> Router.format("quickview")
    // | QuickViewInstallation -> Router.format("quickview","installation")
    // | CalendarOverview -> Router.format("calendar")
    // | CalendarInstallation -> Router.format("calendar","installation")
    // | TooltipOverview -> Router.format("tooltip")
    // | TooltipInstallation -> Router.format("tooltip","installation")
    // | CheckradioOverview -> Router.format("checkradio")
    // | CheckradioInstallation -> Router.format("checkradio","installation")
    // | SwitchOverview -> Router.format("switch")
    // | SwitchInstallation -> Router.format("switch","installation")
    // | PopoverOverview -> Router.format("popover")
    // | PopoverInstallation -> Router.format("popover","installation")
    // | PageLoaderOverview -> Router.format("pageloader")
    // | PageLoaderInstallation -> Router.format("pageloader","installation")
