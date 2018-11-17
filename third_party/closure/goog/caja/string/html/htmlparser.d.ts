declare module goog {
    function require(name: 'goog.string.html'): typeof goog.string$.html;
    function require(name: 'goog.string.html.HtmlParser'): typeof goog.string$.html.HtmlParser;
    function require(name: 'goog.string.html.HtmlParser.EFlags'): typeof goog.string$.html.HtmlParser.EFlags;
}

declare module goog.string$.html {

    /**
     * An Html parser: `parse` takes a string and calls methods on
     * `goog.string.html.HtmlSaxHandler` while it is visiting it.
     *
     * @constructor
     */
    class HtmlParser {
        constructor();
        
        /**
         * HTML entities that are encoded/decoded.
         * TODO(user): use `goog.string.htmlEncode` instead.
         * @type {!Object<string, string>}
         */
        static Entities: {[index: string]: string};
        
        /**
         * A map of element to a bitmap of flags it has, used internally on the parser.
         * @type {Object<string,number>}
         */
        static Elements: {[index: string]: number};
        
        /**
         * Regular expression that matches &s.
         * @type {RegExp}
         * @package
         */
        static AMP_RE: RegExp;
        
        /**
         * Regular expression that matches <.
         * @type {RegExp}
         * @package
         */
        static LT_RE: RegExp;
        
        /**
         * Regular expression that matches >.
         * @type {RegExp}
         * @package
         */
        static GT_RE: RegExp;
        
        /**
         * Regular expression that matches ".
         * @type {RegExp}
         * @package
         */
        static QUOTE_RE: RegExp;
        
        /**
         * Regular expression that matches =.
         * @type {RegExp}
         * @package
         */
        static EQUALS_RE: RegExp;
        
        /**
         * Given a SAX-like `goog.string.html.HtmlSaxHandler` parses a
         * `htmlText` and lets the `handler` know the structure while
         * visiting the nodes.
         *
         * @param {goog.string.html.HtmlSaxHandler} handler The HtmlSaxHandler that will
         *     receive the events.
         * @param {string} htmlText The html text.
         */
        parse(handler: goog.string$.html.HtmlSaxHandler, htmlText: string): void;
    }

    /**
     * An interface to the `goog.string.html.HtmlParser` visitor, that gets
     * called while the HTML is being parsed.
     *
     * @interface
     */
    interface HtmlSaxHandler {
        
        /**
         * Handler called when the parser found a new tag.
         * @param {string} name The name of the tag that is starting.
         * @param {Array<string>} attributes The attributes of the tag.
         */
        startTag(name: string, attributes: Array<string>): void;
        
        /**
         * Handler called when the parser found a closing tag.
         * @param {string} name The name of the tag that is ending.
         */
        endTag(name: string): void;
        
        /**
         * Handler called when PCDATA is found.
         * @param {string} text The PCDATA text found.
         */
        pcdata(text: string): void;
        
        /**
         * Handler called when RCDATA is found.
         * @param {string} text The RCDATA text found.
         */
        rcdata(text: string): void;
        
        /**
         * Handler called when CDATA is found.
         * @param {string} text The CDATA text found.
         */
        cdata(text: string): void;
        
        /**
         * Handler called when the parser is starting to parse the document.
         */
        startDoc(): void;
        
        /**
         * Handler called when the parsing is done.
         */
        endDoc(): void;
    }

    /**
     * TODO(goto): why isn't this in the string package ? does this solves any
     * real problem ? move it to the goog.string package if it does.
     *
     * @param {string} str The string to lower case.
     * @return {string} The str in lower case format.
     */
    function toLowerCase(str: string): string;
}

declare module goog.string$.html.HtmlParser {

    /**
     * The html eflags, used internally on the parser.
     * @enum {number}
     */
    type EFlags = number;
    var EFlags: {
        OPTIONAL_ENDTAG: EFlags;
        EMPTY: EFlags;
        CDATA: EFlags;
        RCDATA: EFlags;
        UNSAFE: EFlags;
        FOLDABLE: EFlags;
    };
}
