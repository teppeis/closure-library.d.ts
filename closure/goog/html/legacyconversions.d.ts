declare module goog {
    function require(name: 'goog.html.legacyconversions'): typeof goog.html.legacyconversions;
}

declare module goog.html.legacyconversions {

    /**
     * Performs an "unchecked conversion" from string to SafeHtml for legacy API
     * purposes.
     *
     * Please read fileoverview documentation before using.
     *
     * @param {string} html A string to be converted to SafeHtml.
     * @return {!goog.html.SafeHtml} The value of html, wrapped in a SafeHtml
     *     object.
     */
    function safeHtmlFromString(html: string): goog.html.SafeHtml;

    /**
     * Performs an "unchecked conversion" from string to SafeScript for legacy API
     * purposes.
     *
     * Please read fileoverview documentation before using.
     *
     * @param {string} script A string to be converted to SafeScript.
     * @return {!goog.html.SafeScript} The value of script, wrapped in a SafeScript
     *     object.
     */
    function safeScriptFromString(script: string): goog.html.SafeScript;

    /**
     * Performs an "unchecked conversion" from string to SafeStyle for legacy API
     * purposes.
     *
     * Please read fileoverview documentation before using.
     *
     * @param {string} style A string to be converted to SafeStyle.
     * @return {!goog.html.SafeStyle} The value of style, wrapped in a SafeStyle
     *     object.
     */
    function safeStyleFromString(style: string): goog.html.SafeStyle;

    /**
     * Performs an "unchecked conversion" from string to SafeStyleSheet for legacy
     * API purposes.
     *
     * Please read fileoverview documentation before using.
     *
     * @param {string} styleSheet A string to be converted to SafeStyleSheet.
     * @return {!goog.html.SafeStyleSheet} The value of style sheet, wrapped in
     *     a SafeStyleSheet object.
     */
    function safeStyleSheetFromString(styleSheet: string): goog.html.SafeStyleSheet;

    /**
     * Performs an "unchecked conversion" from string to SafeUrl for legacy API
     * purposes.
     *
     * Please read fileoverview documentation before using.
     *
     * @param {string} url A string to be converted to SafeUrl.
     * @return {!goog.html.SafeUrl} The value of url, wrapped in a SafeUrl
     *     object.
     */
    function safeUrlFromString(url: string): goog.html.SafeUrl;

    /**
     * Performs an "unchecked conversion" from string to TrustedResourceUrl for
     * legacy API purposes.
     *
     * Please read fileoverview documentation before using.
     *
     * @param {string} url A string to be converted to TrustedResourceUrl.
     * @return {!goog.html.TrustedResourceUrl} The value of url, wrapped in a
     *     TrustedResourceUrl object.
     */
    function trustedResourceUrlFromString(url: string): goog.html.TrustedResourceUrl;

    /**
     * Sets a function that will be called every time a legacy conversion is
     * performed. The function is called with no parameters but it can use
     * goog.debug.getStacktrace to get a stacktrace.
     *
     * @param {function(): undefined} callback Error callback as defined above.
     */
    function setReportCallback(callback: () => void): void;
}
