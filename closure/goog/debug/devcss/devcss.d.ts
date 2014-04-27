declare module goog.debug {

    /**
     * A class for solving development CSS issues/emulating the CSS Compiler.
     * @param {goog.debug.DevCss.UserAgent=} opt_userAgent The user agent, if not
     *     passed in, will be determined using goog.userAgent.
     * @param {number|string=} opt_userAgentVersion The user agent's version.
     *     If not passed in, will be determined using goog.userAgent.
     * @throws {Error} When userAgent detection fails.
     * @constructor
     * @final
     */
    export class DevCss {
        constructor(opt_userAgent?: goog.debug.DevCss.UserAgent, opt_userAgentVersion?: number);
        
        /**
         * Rewrites the CSSOM as needed to activate any useragent-specific selectors.
         * @param {boolean=} opt_enableIe6ReadyHandler If true(the default), and the
         *     userAgent is ie6, we set a document "ready" event handler to walk the DOM
         *     and make combined selector className changes. Having this parameter also
         *     aids unit testing.
         */
        activateBrowserSpecificCssRules(opt_enableIe6ReadyHandler?: boolean): void;
    }
}

declare module goog.debug.DevCss {

    /**
     * A list of possible user agent strings.
     * @enum {string}
     */
    export interface UserAgent {
        OPERA: string;
        IE: string;
        GECKO: string;
        FIREFOX: string;
        WEBKIT: string;
        SAFARI: string;
        MOBILE: string;
    }

    /**
     * A list of strings that may be used for matching in CSS files/development.
     * @enum {string}
     * @private
     */
    export interface CssToken_ {
        USERAGENT: string;
        SEPARATOR: string;
        LESS_THAN: string;
        GREATER_THAN: string;
        LESS_THAN_OR_EQUAL: string;
        GREATER_THAN_OR_EQUAL: string;
        IE6_SELECTOR_TEXT: string;
        IE6_COMBINED_GLUE: string;
    }
}
