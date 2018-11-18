declare module goog {
    function require(name: 'goog.html.sanitizer.HtmlSanitizer'): typeof goog.html.sanitizer.HtmlSanitizer;
    function require(name: 'goog.html.sanitizer.HtmlSanitizer.Builder'): typeof goog.html.sanitizer.HtmlSanitizer.Builder;
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
     * Creates an HTML sanitizer.
     * @param {!goog.html.sanitizer.HtmlSanitizer.Builder=} opt_builder
     * @final @constructor @struct
     * @extends {goog.html.sanitizer.SafeDomTreeProcessor}
     */
    class HtmlSanitizer extends goog.html.sanitizer.SafeDomTreeProcessor {
        constructor(opt_builder?: goog.html.sanitizer.HtmlSanitizer.Builder);
        
        /**
         * Parses the DOM tree of a given HTML string, then walks the tree. For each
         * element, it creates a new sanitized version, applies sanitized attributes,
         * and returns a SafeHtml object representing the sanitized tree.
         * @param {string} unsanitizedHtml
         * @return {!goog.html.SafeHtml} Sanitized HTML
         */
        sanitize(unsanitizedHtml: string): goog.html.SafeHtml;
        
        /**
         * Parses the DOM tree of a given HTML string, then walks the tree. For each
         * element, it creates a new sanitized version, applies sanitized attributes,
         * and returns a span element containing the sanitized content. The root element
         * might define a class name to restrict the visibility of CSS rules contained
         * in tree.
         * @param {string} unsanitizedHtml
         * @return {!HTMLSpanElement} Sanitized HTML
         */
        sanitizeToDomNode(unsanitizedHtml: string): HTMLSpanElement;
        
        /**
         * Sanitizes a HTML string using a sanitizer with default options.
         * @param {string} unsanitizedHtml
         * @return {!goog.html.SafeHtml} sanitizedHtml
         */
        static sanitize(unsanitizedHtml: string): goog.html.SafeHtml;
    }

    /**
     * Whether the template tag is supported.
     * @package @const {boolean}
     */
    var HTML_SANITIZER_TEMPLATE_SUPPORTED: any;
}

declare module goog.html.sanitizer.HtmlSanitizer {

    /**
     * The builder for the HTML Sanitizer. All methods except build return
     * `this`.
     * @final @constructor @struct
     */
    class Builder {
        constructor();
        
        /**
         * Extends the list of allowed data attributes.
         * @param {!Array<string>} dataAttributeWhitelist
         * @return {!goog.html.sanitizer.HtmlSanitizer.Builder}
         */
        allowDataAttributes(dataAttributeWhitelist: Array<string>): goog.html.sanitizer.HtmlSanitizer.Builder;
        
        /**
         * Allows form tags in the HTML. Without this all form tags and content will be
         * dropped.
         * @return {!goog.html.sanitizer.HtmlSanitizer.Builder}
         */
        allowFormTag(): goog.html.sanitizer.HtmlSanitizer.Builder;
        
        /**
         * Allows STYLE tags. Note that the sanitizer wraps the output of each call to
         * {@link sanitize} with a SPAN tag, give it a random ID unique across multiple
         * calls, and then restrict all CSS rules found inside STYLE tags to only apply
         * to children of the SPAN tag. This means that CSS rules in STYLE tags will
         * only apply to content provided in the same call to {@link sanitize}. This
         * feature is not compatible with {@link inlineStyleRules}.
         * @return {!goog.html.sanitizer.HtmlSanitizer.Builder}
         */
        allowStyleTag(): goog.html.sanitizer.HtmlSanitizer.Builder;
        
        /**
         * Fixes the ID of the style container used for CSS rules found in STYLE tags,
         * and disables automatic wrapping with the container. This allows multiple
         * calls to {@link sanitize} to share STYLE rules. If opt_styleContainer is
         * missing, the sanitizer will stop restricting the scope of CSS rules
         * altogether. Requires {@link allowStyleTag} to be called first.
         * @param {string=} opt_styleContainer An optional container ID to restrict the
         *     scope of any CSS rule found in STYLE tags.
         * @return {!goog.html.sanitizer.HtmlSanitizer.Builder}
         */
        withStyleContainer(opt_styleContainer?: string): goog.html.sanitizer.HtmlSanitizer.Builder;
        
        /**
         * Converts rules in STYLE tags into style attributes on the tags they apply to.
         * This feature is not compatible with {@link withStyleContainer} and {@link
         * allowStyleTag}. This method requires {@link allowCssStyles} (otherwise rules
         * would be deleted after being inlined), and is not compatible with {@link
         * allowStyleTag}.
         * @return {!goog.html.sanitizer.HtmlSanitizer.Builder}
         */
        inlineStyleRules(): goog.html.sanitizer.HtmlSanitizer.Builder;
        
        /**
         * Allows inline CSS styles.
         * @return {!goog.html.sanitizer.HtmlSanitizer.Builder}
         */
        allowCssStyles(): goog.html.sanitizer.HtmlSanitizer.Builder;
        
        /**
         * Extends the tag whitelist (Package-internal utility method only).
         * @param {!Array<string>} tags The list of tags to be added to the whitelist.
         * @return {!goog.html.sanitizer.HtmlSanitizer.Builder}
         * @package
         */
        alsoAllowTagsPrivateDoNotAccessOrElse(tags: Array<string>): goog.html.sanitizer.HtmlSanitizer.Builder;
        
        /**
         * Extends the attribute whitelist (Package-internal utility method only).
         * @param {!Array<(string|!goog.html.sanitizer.HtmlSanitizerAttributePolicy)>}
         *     attrs The list of attributes to be added to the whitelist.
         * @return {!goog.html.sanitizer.HtmlSanitizer.Builder}
         * @package
         */
        alsoAllowAttributesPrivateDoNotAccessOrElse(attrs: Array<string|goog.html.sanitizer.HtmlSanitizerAttributePolicy>): goog.html.sanitizer.HtmlSanitizer.Builder;
        
        /**
         * Allows only the provided whitelist of tags. Tags still need to be in the
         * TagWhitelist to be allowed.
         * <p>
         * SPAN tags are ALWAYS ALLOWED as part of the mechanism required to preserve
         * the HTML tree structure (when removing non-blacklisted tags and
         * non-whitelisted tags).
         * @param {!Array<string>} tagWhitelist
         * @return {!goog.html.sanitizer.HtmlSanitizer.Builder}
         * @throws {Error} Thrown if an attempt is made to allow a non-whitelisted tag.
         */
        onlyAllowTags(tagWhitelist: Array<string>): goog.html.sanitizer.HtmlSanitizer.Builder;
        
        /**
         * Allows only the provided whitelist of attributes, possibly setting a custom
         * policy for them. The set of tag/attribute combinations need to be a subset of
         * the currently allowed combinations.
         * <p>
         * Note that you cannot define a generic handler for an attribute if only a
         * tag-specific one is present, and vice versa. To configure the sanitizer to
         * accept an attribute only for a specific tag when only a generic handler is
         * whitelisted, use the goog.html.sanitizer.HtmlSanitizerPolicyHints parameter
         * and simply reject the attribute in unwanted tags.
         * <p>
         * Also note that the sanitizer's policy is still called after the provided one,
         * to ensure that supplying misconfigured policy cannot introduce
         * vulnerabilities. To completely override an existing attribute policy or to
         * allow new attributes, see the goog.html.sanitizer.unsafe package.
         * @param {!Array<(string|!goog.html.sanitizer.HtmlSanitizerAttributePolicy)>}
         *     attrWhitelist The subset of attributes that the sanitizer will accept.
         *     Attributes can come in of two forms:
         *     - string: allow all values for this attribute on all tags.
         *     - HtmlSanitizerAttributePolicy: allows specifying a policy for a
         *         particular tag. The tagName can be "*", which means all tags. If no
         *         policy is passed, the default is to allow all values.
         *     The tag and attribute names are case-insensitive.
         *     Note that the policy for id, URLs, names etc is controlled separately
         *     (using withCustom* methods).
         * @return {!goog.html.sanitizer.HtmlSanitizer.Builder}
         * @throws {Error} Thrown if an attempt is made to allow a non-whitelisted
         *     attribute.
         */
        onlyAllowAttributes(attrWhitelist: Array<string|goog.html.sanitizer.HtmlSanitizerAttributePolicy>): goog.html.sanitizer.HtmlSanitizer.Builder;
        
        /**
         * Adds the original tag name in the data attribute 'original-tag' when unknown
         * tags are sanitized to &lt;span&rt;, so that caller can distinguish them from
         * actual &lt;span&rt; tags.
         * @return {!goog.html.sanitizer.HtmlSanitizer.Builder}
         */
        addOriginalTagNames(): goog.html.sanitizer.HtmlSanitizer.Builder;
        
        /**
         * Sets a custom network URL policy.
         * @param {!goog.html.sanitizer.HtmlSanitizerUrlPolicy}
         *     customNetworkReqUrlPolicy
         * @return {!goog.html.sanitizer.HtmlSanitizer.Builder}
         */
        withCustomNetworkRequestUrlPolicy(customNetworkReqUrlPolicy: goog.html.sanitizer.HtmlSanitizerUrlPolicy): goog.html.sanitizer.HtmlSanitizer.Builder;
        
        /**
         * Sets a custom non-network URL policy.
         * @param {!goog.html.sanitizer.HtmlSanitizerUrlPolicy} customUrlPolicy
         * @return {!goog.html.sanitizer.HtmlSanitizer.Builder}
         */
        withCustomUrlPolicy(customUrlPolicy: goog.html.sanitizer.HtmlSanitizerUrlPolicy): goog.html.sanitizer.HtmlSanitizer.Builder;
        
        /**
         * Sets a custom name policy.
         * @param {!goog.html.sanitizer.HtmlSanitizerPolicy} customNamePolicy
         * @return {!goog.html.sanitizer.HtmlSanitizer.Builder}
         */
        withCustomNamePolicy(customNamePolicy: goog.html.sanitizer.HtmlSanitizerPolicy): goog.html.sanitizer.HtmlSanitizer.Builder;
        
        /**
         * Sets a custom token policy.
         * @param {!goog.html.sanitizer.HtmlSanitizerPolicy} customTokenPolicy
         * @return {!goog.html.sanitizer.HtmlSanitizer.Builder}
         */
        withCustomTokenPolicy(customTokenPolicy: goog.html.sanitizer.HtmlSanitizerPolicy): goog.html.sanitizer.HtmlSanitizer.Builder;
        
        /**
         * Builds and returns a goog.html.sanitizer.HtmlSanitizer object.
         * @return {!goog.html.sanitizer.HtmlSanitizer}
         */
        build(): goog.html.sanitizer.HtmlSanitizer;
    }
}
