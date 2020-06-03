module Router

open Feliz.Router

type Page =
    | Chia
    // | BulmaInstallation
    // | BulmaAPIDescription
    // | QuickViewOverview
    // | QuickViewInstallation
    // | CalendarOverview
    // | CalendarInstallation
    // | TooltipOverview
    // | TooltipInstallation
    // | CheckradioOverview
    // | CheckradioInstallation
    // | SwitchOverview
    // | SwitchInstallation
    // | PopoverOverview
    // | PopoverInstallation
    // | PageLoaderOverview
    // | PageLoaderInstallation

let defaultPage = Chia

let parseUrl = function
    | [ "" ] -> Chia
    // | [ "installation" ] -> BulmaInstallation
    // | [ "api-description" ] -> BulmaAPIDescription
    // | [ "quickview"; "installation" ] -> QuickViewInstallation
    // | [ "quickview" ] -> QuickViewOverview
    // | [ "calendar"; "installation" ] -> CalendarInstallation
    // | [ "calendar" ] -> CalendarOverview
    // | [ "tooltip"; "installation" ] -> TooltipInstallation
    // | [ "tooltip" ] -> TooltipOverview
    // | [ "checkradio"; "installation" ] -> CheckradioInstallation
    // | [ "checkradio" ] -> CheckradioOverview
    // | [ "switch"; "installation" ] -> SwitchInstallation
    // | [ "switch" ] -> SwitchOverview
    // | [ "popover"; "installation" ] -> PopoverInstallation
    // | [ "popover" ] -> PopoverOverview
    // | [ "pageloader"; "installation" ] -> PageLoaderInstallation
    // | [ "pageloader" ] -> PageLoaderOverview
    | _ -> defaultPage

let getHref = function
    | Chia -> Router.format("")
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
