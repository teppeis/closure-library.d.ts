declare module goog {
    function require(name: 'goog.html.sanitizer.HtmlSanitizer'): typeof goog.html.sanitizer.HtmlSanitizer;
}

declare module goog.html.sanitizer {

    /**
     * Type for optional hints to policy handler functions.
     * @typedef {{
     *     tagName: (string|undefined),
     *     attributeName: (string|undefined),
     *     cssProperty: (string|undefined)
     *     }}
     */
    type HtmlSanitizerPolicyHints = {tagName: string|void; attributeName: string|void; cssProperty: string|void};

    /**
     * Type for optional context objects to the policy handler functions.
     * @typedef {{
     *     cssStyle: (?CSSStyleDeclaration|undefined)
     *     }}
     */
    type HtmlSanitizerPolicyContext = {cssStyle: CSSStyleDeclaration|void};

    /**
     * Type for a policy function.
     * @typedef {function(string, goog.html.sanitizer.HtmlSanitizerPolicyHints=,
     *     goog.html.sanitizer.HtmlSanitizerPolicyContext=,
     *     (function(string, ?=, ?=, ?=):?string)=):?string}
     */
    type HtmlSanitizerPolicy = (arg0: string, arg1?: goog.html.sanitizer.HtmlSanitizerPolicyHints, arg2?: goog.html.sanitizer.HtmlSanitizerPolicyContext, arg3?: ((arg0: string, arg1?: any, arg2?: any, arg3?: any) => string)) => string;

    /**
     * Type for a URL policy function.
     *
     * @typedef {function(string, !goog.html.sanitizer.HtmlSanitizerPolicyHints=):
     *     ?goog.html.SafeUrl}
     */
    type HtmlSanitizerUrlPolicy = (arg0: string, arg1?: goog.html.sanitizer.HtmlSanitizerPolicyHints) => goog.html.SafeUrl;

    /**
     * Type for attribute policy configuration.
     * @typedef {{
     *     tagName: string,
     *     attributeName: string,
     *     policy: ?goog.html.sanitizer.HtmlSanitizerPolicy
     * }}
     */
    type HtmlSanitizerAttributePolicy = {tagName: string; attributeName: string; policy: goog.html.sanitizer.HtmlSanitizerPolicy};

    /**
     * Whether the template tag is supported.
     * @package @const {boolean}
     */
    var HTML_SANITIZER_TEMPLATE_SUPPORTED: any;

    /**
     * Creates an HTML sanitizer.
     * @param {!goog.html.sanitizer.HtmlSanitizer.Builder=} opt_builder
     * @final @constructor @struct
     * @extends {goog.html.sanitizer.SafeDomTreeProcessor}
     */
    function HtmlSanitizer(opt_builder?: goog.html.sanitizer.HtmlSanitizer.Builder): void;
}

declare module goog.html.sanitizer.HtmlSanitizer {

    /**
     * The builder for the HTML Sanitizer. All methods except build return
     * `this`.
     * @final @constructor @struct
     */
    function Builder(): void;

    /**
     * Sanitizes a HTML string using a sanitizer with default options.
     * @param {string} unsanitizedHtml
     * @return {!goog.html.SafeHtml} sanitizedHtml
     */
    function sanitize(unsanitizedHtml: string): goog.html.SafeHtml;
}
