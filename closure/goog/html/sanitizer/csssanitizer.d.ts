declare module goog {
    function require(name: 'goog.html.sanitizer.CssSanitizer'): typeof goog.html.sanitizer.CssSanitizer;
}

declare module goog.html.sanitizer.CssSanitizer {

    /**
     * Sanitizes the contents of a STYLE tag.
     * @param {string} textContent The textual content of the STYLE tag.
     * @param {?string=} opt_containerId The ID of a node that will contain the
     *     STYLE tag that includes the sanitized content, to restrict the effects of
     *     the rules being sanitized to descendants of this node.
     * @param {function(string, string):?goog.html.SafeUrl=} opt_uriRewriter A URI
     *     rewriter that returns a goog.html.SafeUrl.
     * @return {!goog.html.SafeStyleSheet}
     * @supported IE 10+, Chrome 26+, Firefox 22+, Safari 7.1+, Opera 15+. On IE10,
     *     support for escaped quotes inside quoted strings (e.g. `a[name="it\'s"]`)
     *     is unreliable, and some (but not all!) rules containing these are
     *     silently dropped.
     */
    function sanitizeStyleSheetString(textContent: string, opt_containerId?: string, opt_uriRewriter?: (arg0: string, arg1: string) => goog.html.SafeUrl): goog.html.SafeStyleSheet;

    /**
     * Returns an inert DOM tree produced by parsing the provided html using
     * DOMParser. "Inert" here means that merely parsing the string won't execute
     * scripts or load images. If you attach this tree to a non-inert document, it
     * will execute these side effects! In this package we prefer using the TEMPLATE
     * tag over DOMParser to produce inert trees, but at least on Chrome the inert
     * STYLE tag does not have a CSSStyleSheet object attached to it.
     * @param {string} html
     * @return {?Element}
     */
    function safeParseHtmlAndGetInertElement(html: string): Element;

    /**
     * Sanitizes an inline style attribute. Short-hand attributes are expanded to
     * their individual elements. Note: The sanitizer does not output vendor
     * prefixed styles.
     * @param {?CSSStyleDeclaration} cssStyle A CSS style object.
     * @param {function(string, string):?goog.html.SafeUrl=} opt_uriRewriter A URI
     *     rewriter that returns a goog.html.SafeUrl.
     * @return {!goog.html.SafeStyle} A sanitized inline cssText.
     */
    function sanitizeInlineStyle(cssStyle: CSSStyleDeclaration, opt_uriRewriter?: (arg0: string, arg1: string) => goog.html.SafeUrl): goog.html.SafeStyle;

    /**
     * Sanitizes inline CSS text and returns it as a SafeStyle object. When adequate
     * browser support is not available, such as for IE9 and below, a
     * SafeStyle-wrapped empty string is returned.
     * @param {string} cssText CSS text to be sanitized.
     * @param {function(string, string):?goog.html.SafeUrl=} opt_uriRewriter A URI
     *     rewriter that returns a goog.html.SafeUrl.
     * @return {!goog.html.SafeStyle} A sanitized inline cssText.
     */
    function sanitizeInlineStyleString(cssText: string, opt_uriRewriter?: (arg0: string, arg1: string) => goog.html.SafeUrl): goog.html.SafeStyle;

    /**
     * Converts rules in STYLE tags into style attributes on the tags they apply to.
     * Modifies the provided DOM subtree in-place.
     * @param {!Element} element
     * @package
     */
    function inlineStyleRules(element: Element): void;
}
