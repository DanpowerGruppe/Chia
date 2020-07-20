module ChiaFileWriter

open Feliz
open Feliz.Bulma
open Shared

let overview =
    Html.div
        [ Bulma.title.h1 [ Html.text "Chia.FileWriter" ]
          Bulma.subtitle.h2
              [ Html.text "The filewriter contains all your configuration infos for Chia."
                ]
          Html.hr []
          Bulma.content
              [ Html.p "The filewriterinfo is actually the hardest part of Chia. You have to initilize your filewriter before you can use all the power of Chia."
                Html.p "You first have to set your development status and you also have to set your CompanyInitials and set a ProjectName."
                Html.p "You also have to thing about where you want to get you logs get created. You can ether log locally or on Azure"
                Html.p "Finally you can initilize your filewriter with `initFileWriter`"
                code """
                open Chia.Domain.Logging
                open Chia.Domain.Config
                open Chia.FileWriter
                open Chia.InitBuilder
                let devStatus = getDevStatusFromEnv  /// Get your devStatus from you enviroment variable. For example pass in an enviroment variable in Fake --> '-e devStatus=Productive
                let fileWriterConfig =
                    initWriter {
                        devStatus Development
                        companyInitials "dp"
                        projectName "TestChia"
                        devOption (Azure "aiKey")
                    }""" ]
          Html.hr []
          Bulma.content
              [ Html.p "If you want to log to ApplicationInsight you additionally have to create a new Application Insight resource in Azure and set your ApplicationInsights key."
                code """
                open Chia.Domain.Logging
                open Chia.Domain.Config
                open Chia.FileWriter
                let devStatus = getDevStatusFromEnv  /// Get your devStatus from you enviroment variable. For example pass in an enviroment variable in Fake --> '-e devStatus=Productive
                let aiKey = "<InsertYourApplicationInsightsKey" ///Get this key from your app.config or from KeyFault
                let fileWriterInfo = initFileWriter devStatus (CompanyInitials "CompanyInitials") (ProjectName "ProjectName") Local ""
                let fileWriterInfoAzure = initFileWriter devStatus (CompanyInitials "CompanyInitials") (ProjectName "ProjectNames") Azure aiKey
                let fileWriterInfoLocalAndAzure = initFileWriter devStatus "ProjectName" LocalAndAzure aiKey""" ]
          fixDocsView "ChiaFileWriter" false      ]
