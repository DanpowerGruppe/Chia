module View

open Domain
open Feliz
open Feliz.Bulma
open Router

let menuPart model dispatch =
    let item (t: string) p =
        let isActive =
            if model.CurrentPage = p then [ helpers.isActive ] else []

        Bulma.menuItem.a
            [ yield! isActive
              prop.onClick (fun _ -> (SentToast t) |> dispatch)
              prop.text t
              prop.href (getHref p) ]

    Bulma.menu
        [ Bulma.menuLabel "Chia"
          Bulma.menuList [ item "Overview" Chia ]
          Bulma.menuList
              [ item "Installation" ChiaInstallation
                item "InitBuilder" ChiaInitBuilder
                item "Infrastructure" ChiaInfrastructure
                item "Logger" ChiaLogger
                item "CreateTable" ChiaCreateTable
                item "CreateBlob" ChiaCreateBlob
                item "CreateXml" ChiaCreateXml
                item "PostToQueue" ChiaPostToQueue
                item "GetTableEntry" ChiaGetTableEntry
                item "RedisCache" ChiaRedisCache
                item "EventHub" ChiaEventHub
                item "TableStorage" ChiaTableStorage
                item "AIUtils" ChiaAIUtils
                item "ExcelUtils" ChiaExcelUtils ]
          Bulma.menuLabel "Chia.Client"
          Bulma.menuList
              [ item "Overview" ChiaClient
                item "Installation" ChiaClientInstallation
                item "PageFlexer" ChiaClientPageFlexer ] ]

let contentPart model dispatch =
    match model.CurrentPage with
    | Chia -> Chia.overview
    | ChiaInstallation -> Chia.installation
    | ChiaInitBuilder -> ChiaInitBuilder.overview
    | ChiaAIUtils -> ChiaAIUtils.overview
    | ChiaRedisCache -> ChiaRedisCache.overview
    | ChiaEventHub -> ChiaEventHub.overview
    | ChiaCreateXml -> ChiaCreateXml.overview
    | ChiaCreateTable -> ChiaCreateTable.overview
    | ChiaCreateBlob -> ChiaCreateBlob.overview
    | ChiaPostToQueue -> ChiaPostToQueue.overview
    | ChiaGetTableEntry -> ChiaGetTableEntry.overview
    | ChiaLogger -> ChiaLogger.overview
    | ChiaInfrastructure -> ChiaInfrastructure.overview
    | ChiaExcelUtils -> ChiaExcelUtils.overview
    | ChiaTableStorage -> ChiaTableStorage.overview
    | ChiaClient -> Client.overview
    | ChiaClientInstallation -> Client.installation
    | ChiaClientPageFlexer -> PageFlexer.overview

open Zanaptak.TypedCssClasses

type Icon =
    CssClasses<"https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css", Naming.PascalCase>

type tailwind = CssClasses<"../../src/Chia.Docs/public/css/tailwind-generated.css", Naming.Verbatim>

let view (model: Model) (dispatch: Msg -> unit) =

    let render =
        Html.div
            [ prop.classes
                [ tailwind.container
                  tailwind.``md:flex``
                  tailwind.``justify-center`` ]
              prop.children
                  [ Bulma.section
                      [ Bulma.tile
                          [ tile.isAncestor
                            prop.children
                                [ Bulma.tile
                                    [ tile.is2
                                      prop.children (menuPart model dispatch) ]
                                  Bulma.tile (contentPart model dispatch) ] ] ] ] ]

    React.router
        [ router.onUrlChanged (parseUrl >> UrlChanged >> dispatch)
          router.children [render] ]
