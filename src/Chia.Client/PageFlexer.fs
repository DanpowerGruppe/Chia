namespace Chia

    module PageFlexer =
        open Fable.React
        open Fable.React.Props

        /// pageFlexer
        ///
        /// Stretched to height of the remaining page
        /// Inside the page flexer elemtents can be arranged in the order of:
        ///
        /// pageHeader
        /// pageContent or scrollpageContent
        /// pageFooter
        ///
        /// pageContent is always needed, the other two are optional
        /// You can use one of the "frames" functions to avoid having to write pageFlexer [] [ pageContent [] ] all the time.

        let pageFlexer props content =
            let props:seq<IHTMLProp> = Seq.concat [[ ClassName "page-flexer" ]; props]
            div props content

        let pageHeader props content =
            let props:seq<IHTMLProp> = Seq.concat [[ ClassName "page-header" ]; props]
            div props content

        let pageContent props content =
            let props:seq<IHTMLProp> = Seq.concat [[ ClassName "page-content" ]; props]
            div props content

        /// set to 60px height but may be changed with a Style prop
        let pageFooter props content =
            let props:seq<IHTMLProp> = Seq.concat [[ ClassName "page-footer" ]; props]
            div props content

        let scrollPageContent props content =
            let props:seq<IHTMLProp> = Seq.concat [[ ClassName "scroll-page-content"; Id "epic-style" ]; props]
            div props content


        /// frames
        let frameContent props content =
            pageFlexer props [pageContent [] content]

        let frameHeaderContent props contentH contentC =
            pageFlexer props
                [ pageHeader [] contentH
                  pageContent [] contentC]

        let frameHeaderContentFooter props contentH contentC contentF =
            pageFlexer props
                [ pageHeader [] contentH
                  pageContent [] contentC
                  pageContent [] contentF ]

        let frameScrollContent props content =
            pageFlexer props [scrollPageContent [] content]

        let frameHeaderScrollContent props contentH contentC =
            pageFlexer props
                [ pageHeader [] contentH
                  scrollPageContent [] contentC]

        let frameHeaderScrollContentFooter props contentH contentC contentF =
            pageFlexer props
                [ pageHeader [] contentH
                  scrollPageContent [] contentC
                  pageContent [] contentF ]
