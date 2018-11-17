declare module goog {
    function require(name: 'goog.dom.TagName'): typeof goog.dom.TagName;
}

declare module goog.dom {

    /**
     * A tag name with the type of the element stored in the generic.
     * @param {string} tagName
     * @constructor
     * @template T
     */
    class TagName<T> {
        constructor(tagName: string);
        
        /** @type {!goog.dom.TagName<!HTMLAnchorElement>} */
        static A: goog.dom.TagName<HTMLAnchorElement>;
        
        /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
        static ABBR: goog.dom.TagName<goog.dom.HtmlElement>;
        
        /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
        static ACRONYM: goog.dom.TagName<goog.dom.HtmlElement>;
        
        /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
        static ADDRESS: goog.dom.TagName<goog.dom.HtmlElement>;
        
        /** @type {!goog.dom.TagName<!HTMLAppletElement>} */
        static APPLET: goog.dom.TagName<HTMLAppletElement>;
        
        /** @type {!goog.dom.TagName<!HTMLAreaElement>} */
        static AREA: goog.dom.TagName<HTMLAreaElement>;
        
        /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
        static ARTICLE: goog.dom.TagName<goog.dom.HtmlElement>;
        
        /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
        static ASIDE: goog.dom.TagName<goog.dom.HtmlElement>;
        
        /** @type {!goog.dom.TagName<!HTMLAudioElement>} */
        static AUDIO: goog.dom.TagName<HTMLAudioElement>;
        
        /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
        static B: goog.dom.TagName<goog.dom.HtmlElement>;
        
        /** @type {!goog.dom.TagName<!HTMLBaseElement>} */
        static BASE: goog.dom.TagName<HTMLBaseElement>;
        
        /** @type {!goog.dom.TagName<!HTMLBaseFontElement>} */
        static BASEFONT: goog.dom.TagName<HTMLBaseFontElement>;
        
        /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
        static BDI: goog.dom.TagName<goog.dom.HtmlElement>;
        
        /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
        static BDO: goog.dom.TagName<goog.dom.HtmlElement>;
        
        /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
        static BIG: goog.dom.TagName<goog.dom.HtmlElement>;
        
        /** @type {!goog.dom.TagName<!HTMLQuoteElement>} */
        static BLOCKQUOTE: goog.dom.TagName<HTMLQuoteElement>;
        
        /** @type {!goog.dom.TagName<!HTMLBodyElement>} */
        static BODY: goog.dom.TagName<HTMLBodyElement>;
        
        /** @type {!goog.dom.TagName<!HTMLBRElement>} */
        static BR: goog.dom.TagName<HTMLBRElement>;
        
        /** @type {!goog.dom.TagName<!HTMLButtonElement>} */
        static BUTTON: goog.dom.TagName<HTMLButtonElement>;
        
        /** @type {!goog.dom.TagName<!HTMLCanvasElement>} */
        static CANVAS: goog.dom.TagName<HTMLCanvasElement>;
        
        /** @type {!goog.dom.TagName<!HTMLTableCaptionElement>} */
        static CAPTION: goog.dom.TagName<HTMLTableCaptionElement>;
        
        /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
        static CENTER: goog.dom.TagName<goog.dom.HtmlElement>;
        
        /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
        static CITE: goog.dom.TagName<goog.dom.HtmlElement>;
        
        /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
        static CODE: goog.dom.TagName<goog.dom.HtmlElement>;
        
        /** @type {!goog.dom.TagName<!HTMLTableColElement>} */
        static COL: goog.dom.TagName<HTMLTableColElement>;
        
        /** @type {!goog.dom.TagName<!HTMLTableColElement>} */
        static COLGROUP: goog.dom.TagName<HTMLTableColElement>;
        
        /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
        static COMMAND: goog.dom.TagName<goog.dom.HtmlElement>;
        
        /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
        static DATA: goog.dom.TagName<goog.dom.HtmlElement>;
        
        /** @type {!goog.dom.TagName<!HTMLDataListElement>} */
        static DATALIST: goog.dom.TagName<HTMLDataListElement>;
        
        /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
        static DD: goog.dom.TagName<goog.dom.HtmlElement>;
        
        /** @type {!goog.dom.TagName<!HTMLModElement>} */
        static DEL: goog.dom.TagName<HTMLModElement>;
        
        /** @type {!goog.dom.TagName<!HTMLDetailsElement>} */
        static DETAILS: goog.dom.TagName<HTMLDetailsElement>;
        
        /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
        static DFN: goog.dom.TagName<goog.dom.HtmlElement>;
        
        /** @type {!goog.dom.TagName<!HTMLDialogElement>} */
        static DIALOG: goog.dom.TagName<HTMLDialogElement>;
        
        /** @type {!goog.dom.TagName<!HTMLDirectoryElement>} */
        static DIR: goog.dom.TagName<HTMLDirectoryElement>;
        
        /** @type {!goog.dom.TagName<!HTMLDivElement>} */
        static DIV: goog.dom.TagName<HTMLDivElement>;
        
        /** @type {!goog.dom.TagName<!HTMLDListElement>} */
        static DL: goog.dom.TagName<HTMLDListElement>;
        
        /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
        static DT: goog.dom.TagName<goog.dom.HtmlElement>;
        
        /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
        static EM: goog.dom.TagName<goog.dom.HtmlElement>;
        
        /** @type {!goog.dom.TagName<!HTMLEmbedElement>} */
        static EMBED: goog.dom.TagName<HTMLEmbedElement>;
        
        /** @type {!goog.dom.TagName<!HTMLFieldSetElement>} */
        static FIELDSET: goog.dom.TagName<HTMLFieldSetElement>;
        
        /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
        static FIGCAPTION: goog.dom.TagName<goog.dom.HtmlElement>;
        
        /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
        static FIGURE: goog.dom.TagName<goog.dom.HtmlElement>;
        
        /** @type {!goog.dom.TagName<!HTMLFontElement>} */
        static FONT: goog.dom.TagName<HTMLFontElement>;
        
        /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
        static FOOTER: goog.dom.TagName<goog.dom.HtmlElement>;
        
        /** @type {!goog.dom.TagName<!HTMLFormElement>} */
        static FORM: goog.dom.TagName<HTMLFormElement>;
        
        /** @type {!goog.dom.TagName<!HTMLFrameElement>} */
        static FRAME: goog.dom.TagName<HTMLFrameElement>;
        
        /** @type {!goog.dom.TagName<!HTMLFrameSetElement>} */
        static FRAMESET: goog.dom.TagName<HTMLFrameSetElement>;
        
        /** @type {!goog.dom.TagName<!HTMLHeadingElement>} */
        static H1: goog.dom.TagName<HTMLHeadingElement>;
        
        /** @type {!goog.dom.TagName<!HTMLHeadingElement>} */
        static H2: goog.dom.TagName<HTMLHeadingElement>;
        
        /** @type {!goog.dom.TagName<!HTMLHeadingElement>} */
        static H3: goog.dom.TagName<HTMLHeadingElement>;
        
        /** @type {!goog.dom.TagName<!HTMLHeadingElement>} */
        static H4: goog.dom.TagName<HTMLHeadingElement>;
        
        /** @type {!goog.dom.TagName<!HTMLHeadingElement>} */
        static H5: goog.dom.TagName<HTMLHeadingElement>;
        
        /** @type {!goog.dom.TagName<!HTMLHeadingElement>} */
        static H6: goog.dom.TagName<HTMLHeadingElement>;
        
        /** @type {!goog.dom.TagName<!HTMLHeadElement>} */
        static HEAD: goog.dom.TagName<HTMLHeadElement>;
        
        /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
        static HEADER: goog.dom.TagName<goog.dom.HtmlElement>;
        
        /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
        static HGROUP: goog.dom.TagName<goog.dom.HtmlElement>;
        
        /** @type {!goog.dom.TagName<!HTMLHRElement>} */
        static HR: goog.dom.TagName<HTMLHRElement>;
        
        /** @type {!goog.dom.TagName<!HTMLHtmlElement>} */
        static HTML: goog.dom.TagName<HTMLHtmlElement>;
        
        /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
        static I: goog.dom.TagName<goog.dom.HtmlElement>;
        
        /** @type {!goog.dom.TagName<!HTMLIFrameElement>} */
        static IFRAME: goog.dom.TagName<HTMLIFrameElement>;
        
        /** @type {!goog.dom.TagName<!HTMLImageElement>} */
        static IMG: goog.dom.TagName<HTMLImageElement>;
        
        /** @type {!goog.dom.TagName<!HTMLInputElement>} */
        static INPUT: goog.dom.TagName<HTMLInputElement>;
        
        /** @type {!goog.dom.TagName<!HTMLModElement>} */
        static INS: goog.dom.TagName<HTMLModElement>;
        
        /** @type {!goog.dom.TagName<!HTMLIsIndexElement>} */
        static ISINDEX: goog.dom.TagName<HTMLElement>;
        
        /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
        static KBD: goog.dom.TagName<goog.dom.HtmlElement>;
        
        /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
        static KEYGEN: goog.dom.TagName<goog.dom.HtmlElement>;
        
        /** @type {!goog.dom.TagName<!HTMLLabelElement>} */
        static LABEL: goog.dom.TagName<HTMLLabelElement>;
        
        /** @type {!goog.dom.TagName<!HTMLLegendElement>} */
        static LEGEND: goog.dom.TagName<HTMLLegendElement>;
        
        /** @type {!goog.dom.TagName<!HTMLLIElement>} */
        static LI: goog.dom.TagName<HTMLLIElement>;
        
        /** @type {!goog.dom.TagName<!HTMLLinkElement>} */
        static LINK: goog.dom.TagName<HTMLLinkElement>;
        
        /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
        static MAIN: goog.dom.TagName<goog.dom.HtmlElement>;
        
        /** @type {!goog.dom.TagName<!HTMLMapElement>} */
        static MAP: goog.dom.TagName<HTMLMapElement>;
        
        /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
        static MARK: goog.dom.TagName<goog.dom.HtmlElement>;
        
        /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
        static MATH: goog.dom.TagName<goog.dom.HtmlElement>;
        
        /** @type {!goog.dom.TagName<!HTMLMenuElement>} */
        static MENU: goog.dom.TagName<HTMLMenuElement>;
        
        /** @type {!goog.dom.TagName<!HTMLMenuItemElement>} */
        static MENUITEM: goog.dom.TagName<HTMLElement>;
        
        /** @type {!goog.dom.TagName<!HTMLMetaElement>} */
        static META: goog.dom.TagName<HTMLMetaElement>;
        
        /** @type {!goog.dom.TagName<!HTMLMeterElement>} */
        static METER: goog.dom.TagName<HTMLMeterElement>;
        
        /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
        static NAV: goog.dom.TagName<goog.dom.HtmlElement>;
        
        /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
        static NOFRAMES: goog.dom.TagName<goog.dom.HtmlElement>;
        
        /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
        static NOSCRIPT: goog.dom.TagName<goog.dom.HtmlElement>;
        
        /** @type {!goog.dom.TagName<!HTMLObjectElement>} */
        static OBJECT: goog.dom.TagName<HTMLObjectElement>;
        
        /** @type {!goog.dom.TagName<!HTMLOListElement>} */
        static OL: goog.dom.TagName<HTMLOListElement>;
        
        /** @type {!goog.dom.TagName<!HTMLOptGroupElement>} */
        static OPTGROUP: goog.dom.TagName<HTMLOptGroupElement>;
        
        /** @type {!goog.dom.TagName<!HTMLOptionElement>} */
        static OPTION: goog.dom.TagName<HTMLOptionElement>;
        
        /** @type {!goog.dom.TagName<!HTMLOutputElement>} */
        static OUTPUT: goog.dom.TagName<HTMLOutputElement>;
        
        /** @type {!goog.dom.TagName<!HTMLParagraphElement>} */
        static P: goog.dom.TagName<HTMLParagraphElement>;
        
        /** @type {!goog.dom.TagName<!HTMLParamElement>} */
        static PARAM: goog.dom.TagName<HTMLParamElement>;
        
        /** @type {!goog.dom.TagName<!HTMLPictureElement>} */
        static PICTURE: goog.dom.TagName<HTMLPictureElement>;
        
        /** @type {!goog.dom.TagName<!HTMLPreElement>} */
        static PRE: goog.dom.TagName<HTMLPreElement>;
        
        /** @type {!goog.dom.TagName<!HTMLProgressElement>} */
        static PROGRESS: goog.dom.TagName<HTMLProgressElement>;
        
        /** @type {!goog.dom.TagName<!HTMLQuoteElement>} */
        static Q: goog.dom.TagName<HTMLQuoteElement>;
        
        /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
        static RP: goog.dom.TagName<goog.dom.HtmlElement>;
        
        /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
        static RT: goog.dom.TagName<goog.dom.HtmlElement>;
        
        /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
        static RTC: goog.dom.TagName<goog.dom.HtmlElement>;
        
        /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
        static RUBY: goog.dom.TagName<goog.dom.HtmlElement>;
        
        /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
        static S: goog.dom.TagName<goog.dom.HtmlElement>;
        
        /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
        static SAMP: goog.dom.TagName<goog.dom.HtmlElement>;
        
        /** @type {!goog.dom.TagName<!HTMLScriptElement>} */
        static SCRIPT: goog.dom.TagName<HTMLScriptElement>;
        
        /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
        static SECTION: goog.dom.TagName<goog.dom.HtmlElement>;
        
        /** @type {!goog.dom.TagName<!HTMLSelectElement>} */
        static SELECT: goog.dom.TagName<HTMLSelectElement>;
        
        /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
        static SMALL: goog.dom.TagName<goog.dom.HtmlElement>;
        
        /** @type {!goog.dom.TagName<!HTMLSourceElement>} */
        static SOURCE: goog.dom.TagName<HTMLSourceElement>;
        
        /** @type {!goog.dom.TagName<!HTMLSpanElement>} */
        static SPAN: goog.dom.TagName<HTMLSpanElement>;
        
        /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
        static STRIKE: goog.dom.TagName<goog.dom.HtmlElement>;
        
        /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
        static STRONG: goog.dom.TagName<goog.dom.HtmlElement>;
        
        /** @type {!goog.dom.TagName<!HTMLStyleElement>} */
        static STYLE: goog.dom.TagName<HTMLStyleElement>;
        
        /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
        static SUB: goog.dom.TagName<goog.dom.HtmlElement>;
        
        /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
        static SUMMARY: goog.dom.TagName<goog.dom.HtmlElement>;
        
        /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
        static SUP: goog.dom.TagName<goog.dom.HtmlElement>;
        
        /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
        static SVG: goog.dom.TagName<goog.dom.HtmlElement>;
        
        /** @type {!goog.dom.TagName<!HTMLTableElement>} */
        static TABLE: goog.dom.TagName<HTMLTableElement>;
        
        /** @type {!goog.dom.TagName<!HTMLTableSectionElement>} */
        static TBODY: goog.dom.TagName<HTMLTableSectionElement>;
        
        /** @type {!goog.dom.TagName<!HTMLTableCellElement>} */
        static TD: goog.dom.TagName<HTMLTableCellElement>;
        
        /** @type {!goog.dom.TagName<!HTMLTemplateElement>} */
        static TEMPLATE: goog.dom.TagName<HTMLTemplateElement>;
        
        /** @type {!goog.dom.TagName<!HTMLTextAreaElement>} */
        static TEXTAREA: goog.dom.TagName<HTMLTextAreaElement>;
        
        /** @type {!goog.dom.TagName<!HTMLTableSectionElement>} */
        static TFOOT: goog.dom.TagName<HTMLTableSectionElement>;
        
        /** @type {!goog.dom.TagName<!HTMLTableCellElement>} */
        static TH: goog.dom.TagName<HTMLTableCellElement>;
        
        /** @type {!goog.dom.TagName<!HTMLTableSectionElement>} */
        static THEAD: goog.dom.TagName<HTMLTableSectionElement>;
        
        /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
        static TIME: goog.dom.TagName<goog.dom.HtmlElement>;
        
        /** @type {!goog.dom.TagName<!HTMLTitleElement>} */
        static TITLE: goog.dom.TagName<HTMLTitleElement>;
        
        /** @type {!goog.dom.TagName<!HTMLTableRowElement>} */
        static TR: goog.dom.TagName<HTMLTableRowElement>;
        
        /** @type {!goog.dom.TagName<!HTMLTrackElement>} */
        static TRACK: goog.dom.TagName<HTMLTrackElement>;
        
        /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
        static TT: goog.dom.TagName<goog.dom.HtmlElement>;
        
        /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
        static U: goog.dom.TagName<goog.dom.HtmlElement>;
        
        /** @type {!goog.dom.TagName<!HTMLUListElement>} */
        static UL: goog.dom.TagName<HTMLUListElement>;
        
        /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
        static VAR: goog.dom.TagName<goog.dom.HtmlElement>;
        
        /** @type {!goog.dom.TagName<!HTMLVideoElement>} */
        static VIDEO: goog.dom.TagName<HTMLVideoElement>;
        
        /** @type {!goog.dom.TagName<!goog.dom.HtmlElement>} */
        static WBR: goog.dom.TagName<goog.dom.HtmlElement>;
        
        /**
         * Returns the tag name.
         * @return {string}
         * @override
         */
        toString(): string;
    }
}
