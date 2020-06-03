module View

open Domain
open Feliz
open Feliz.Bulma
open Router

let menuPart model =
    let item (t:string) p =
        let isActive =
            if model.CurrentPage = p then [ helpers.isActive; color.hasBackgroundPrimary ] else []
        Bulma.menuItem.a [
            yield! isActive
            yield prop.text t
            yield prop.href (getHref p)
        ]

    Bulma.menu [
        Bulma.menuLabel "Chia"
        Bulma.menuList [
            item "Overview" Chia
        ]
        Bulma.menuList [
            item "Installation" ChiaInstallation
        ]
        Bulma.menuLabel "Chia.Client"
        Bulma.menuList [
            item "Overview" ChiaClient
        ]
        Bulma.menuList [
            item "Installation" ChiaClientInstallation
        ]
        // Bulma.menuLabel "Feliz.Bulma.QuickView"
        // Bulma.menuList [
        //     item "Overview" QuickViewOverview
        //     item "Installation" QuickViewInstallation
        // ]
        // Bulma.menuLabel "Feliz.Bulma.Calendar"
        // Bulma.menuList [
        //     item "Overview" CalendarOverview
        //     item "Installation" CalendarInstallation
        // ]
        // Bulma.menuLabel "Feliz.Bulma.Tooltip"
        // Bulma.menuList [
        //     item "Overview" TooltipOverview
        //     item "Installation" TooltipInstallation
        // ]
        // Bulma.menuLabel "Feliz.Bulma.Checkradio"
        // Bulma.menuList [
        //     item "Overview" CheckradioOverview
        //     item "Installation" CheckradioInstallation
        // ]
        // Bulma.menuLabel "Feliz.Bulma.Popover"
        // Bulma.menuList [
        //     item "Overview" PopoverOverview
        // ]
        // Bulma.menuLabel "Feliz.Bulma.PageLoader"
        // Bulma.menuList [
        //     item "Overview" PageLoaderOverview
        //     item "Installation" PageLoaderInstallation
        // ]
        // Bulma.menuLabel "Feliz.Bulma.Switch"
        // Bulma.menuList [
        //     item "Overview" SwitchOverview
        //     item "Installation" SwitchInstallation
        // ]
    ]

let contentPart model dispatch =
    match model.CurrentPage with
    | Chia -> Chia.overview
    | ChiaInstallation -> Chia.installation
    | ChiaClient -> ChiaClient.overview
    | ChiaClientInstallation -> ChiaClient.installation
    // | BulmaInstallation -> Views.Bulma.installation
    // | BulmaAPIDescription -> Views.Bulma.apiDescription
    // | QuickViewOverview -> Views.QuickView.overview model dispatch
    // | QuickViewInstallation -> Views.QuickView.installation
    // | CalendarOverview -> Views.Calendar.overview
    // | CalendarInstallation -> Views.Calendar.installation
    // | TooltipOverview -> Views.Tooltip.overview
    // | TooltipInstallation -> Views.Tooltip.installation
    // | CheckradioOverview -> Views.Checkradio.overview
    // | CheckradioInstallation -> Views.Checkradio.installation
    // | SwitchOverview -> Views.Switch.overview
    // | SwitchInstallation -> Views.Switch.installation
    // | PopoverOverview -> Views.Popover.overview
    // | PopoverInstallation -> Views.Popover.installation
    // | PageLoaderOverview -> Views.PageLoader.overview model dispatch
    // | PageLoaderInstallation -> Views.PageLoader.installation

let view (model : Model) (dispatch : Msg -> unit) =
    let render =
        Bulma.container [
            Bulma.section [
                Bulma.tile [
                    tile.isAncestor
                    prop.children [
                        Bulma.tile [
                            tile.is2
                            prop.children (menuPart model)
                        ]
                        Bulma.tile (contentPart model dispatch)
                    ]
                ]
            ]
        ]
    Router.router [
        Router.onUrlChanged (parseUrl >> UrlChanged >> dispatch)
        Router.application render
    ]
