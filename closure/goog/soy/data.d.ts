declare module goog {
    function require(name: 'goog.soy.data.SanitizedContentKind'): typeof goog.soy.data.SanitizedContentKind;
    function require(name: 'goog.soy.data.SanitizedContent'): typeof goog.soy.data.SanitizedContent;
    function require(name: 'goog.soy.data.UnsanitizedText'): typeof goog.soy.data.UnsanitizedText;
    function require(name: 'goog.soy.data.SanitizedHtml'): typeof goog.soy.data.SanitizedHtml;
    function require(name: 'goog.soy.data.SanitizedJs'): typeof goog.soy.data.SanitizedJs;
    function require(name: 'goog.soy.data.SanitizedUri'): typeof goog.soy.data.SanitizedUri;
    function require(name: 'goog.soy.data.SanitizedTrustedResourceUri'): typeof goog.soy.data.SanitizedTrustedResourceUri;
    function require(name: 'goog.soy.data.SanitizedHtmlAttribute'): typeof goog.soy.data.SanitizedHtmlAttribute;
    function require(name: 'goog.soy.data.SanitizedCss'): typeof goog.soy.data.SanitizedCss;
}

declare module goog.soy.data {

    /**
     * A type of textual content.
     *
     * This is an enum of type Object so that these values are unforgeable.
     *
     * @enum {!Object}
     */
    type SanitizedContentKind = Object;
    var SanitizedContentKind: {
        HTML: SanitizedContentKind;
        JS: SanitizedContentKind;
        URI: SanitizedContentKind;
        TRUSTED_RESOURCE_URI: SanitizedContentKind;
        ATTRIBUTES: SanitizedContentKind;
        STYLE: SanitizedContentKind;
        CSS: SanitizedContentKind;
        TEXT: SanitizedContentKind;
    };

    /**
     * A string-like object that carries a content-type and a content direction.
     *
     * IMPORTANT! Do not create these directly, nor instantiate the subclasses.
     * Instead, use a trusted, centrally reviewed library as endorsed by your team
     * to generate these objects. Otherwise, you risk accidentally creating
     * SanitizedContent that is attacker-controlled and gets evaluated unescaped in
     * templates.
     *
     * @constructor
     */
    class SanitizedContent {
        constructor();
        
        /**
         * The context in which this content is safe from XSS attacks.
         * @type {goog.soy.data.SanitizedContentKind}
         */
        contentKind: goog.soy.data.SanitizedContentKind;
        
        /**
         * The content's direction; null if unknown and thus to be estimated when
         * necessary.
         * @type {?goog.i18n.bidi.Dir}
         */
        contentDir: goog.i18n.bidi.Dir;
        
        /**
         * The already-safe content.
         * @protected {string}
         */
        content(): void;
        
        /**
         * Gets the already-safe content.
         * @return {string}
         */
        getContent(): string;
        
        /**
         * Converts sanitized content of kind TEXT or HTML into SafeHtml. HTML content
         * is converted without modification, while text content is HTML-escaped.
         * @return {!goog.html.SafeHtml}
         * @throws {Error} when the content kind is not TEXT or HTML.
         */
        toSafeHtml(): goog.html.SafeHtml;
        
        /**
         * Converts sanitized content of kind URI into SafeUrl without modification.
         * @return {!goog.html.SafeUrl}
         * @throws {Error} when the content kind is not URI.
         */
        toSafeUrl(): goog.html.SafeUrl;
    }

    /**
     * Unsanitized plain text string.
     *
     * While all strings are effectively safe to use as a plain text, there are no
     * guarantees about safety in any other context such as HTML. This is
     * sometimes used to mark that should never be used unescaped.
     *
     * @param {*} content Plain text with no guarantees.
     * @param {?goog.i18n.bidi.Dir=} opt_contentDir The content direction; null if
     *     unknown and thus to be estimated when necessary. Default: null.
     * @extends {goog.soy.data.SanitizedContent}
     * @constructor
     */
    class UnsanitizedText extends goog.soy.data.SanitizedContent {
        constructor(content: any, opt_contentDir?: goog.i18n.bidi.Dir);
    }

    /**
     * Content of type {@link goog.soy.data.SanitizedContentKind.HTML}.
     *
     * The content is a string of HTML that can safely be embedded in a PCDATA
     * context in your app.  If you would be surprised to find that an HTML
     * sanitizer produced `s` (e.g.  it runs code or fetches bad URLs) and
     * you wouldn't write a template that produces `s` on security or privacy
     * grounds, then don't pass `s` here. The default content direction is
     * unknown, i.e. to be estimated when necessary.
     *
     * @extends {goog.soy.data.SanitizedContent}
     * @constructor
     */
    class SanitizedHtml extends goog.soy.data.SanitizedContent {
        constructor();
        
        /**
         * Checks if the value could be used as the Soy type {html}.
         * @param {*} value
         * @return {boolean}
         */
        static isCompatibleWith(value: any): boolean;
        
        /**
         * Checks if the value could be used as the Soy type {html}.
         * Strict: disallows strings or UnsanitizedText.
         * @param {*} value
         * @return {boolean}
         */
        static isCompatibleWithStrict(value: any): boolean;
    }

    /**
     * Content of type {@link goog.soy.data.SanitizedContentKind.JS}.
     *
     * The content is JavaScript source that when evaluated does not execute any
     * attacker-controlled scripts. The content direction is LTR.
     *
     * @extends {goog.soy.data.SanitizedContent}
     * @constructor
     */
    class SanitizedJs extends goog.soy.data.SanitizedContent {
        constructor();
        
        /**
         * Checks if the value could be used as the Soy type {js}.
         * @param {*} value
         * @return {boolean}
         */
        static isCompatibleWith(value: any): boolean;
        
        /**
         * Checks if the value could be used as the Soy type {js}.
         * Strict: disallows strings or UnsanitizedText.
         * @param {*} value
         * @return {boolean}
         */
        static isCompatibleWithStrict(value: any): boolean;
    }

    /**
     * Content of type {@link goog.soy.data.SanitizedContentKind.URI}.
     *
     * The content is a URI chunk that the caller knows is safe to emit in a
     * template. The content direction is LTR.
     *
     * @extends {goog.soy.data.SanitizedContent}
     * @constructor
     */
    class SanitizedUri extends goog.soy.data.SanitizedContent {
        constructor();
        
        /**
         * Checks if the value could be used as the Soy type {uri}.
         * @param {*} value
         * @return {boolean}
         */
        static isCompatibleWith(value: any): boolean;
        
        /**
         * Checks if the value could be used as the Soy type {uri}.
         * Strict: disallows strings or UnsanitizedText.
         * @param {*} value
         * @return {boolean}
         */
        static isCompatibleWithStrict(value: any): boolean;
    }

    /**
     * Content of type
     * {@link goog.soy.data.SanitizedContentKind.TRUSTED_RESOURCE_URI}.
     *
     * The content is a TrustedResourceUri chunk that is not under attacker control.
     * The content direction is LTR.
     *
     * @extends {goog.soy.data.SanitizedContent}
     * @constructor
     */
    class SanitizedTrustedResourceUri extends goog.soy.data.SanitizedContent {
        constructor();
        
        /**
         * Converts sanitized content into TrustedResourceUrl without modification.
         * @return {!goog.html.TrustedResourceUrl}
         */
        toTrustedResourceUrl(): goog.html.TrustedResourceUrl;
        
        /**
         * Checks if the value could be used as the Soy type {trusted_resource_uri}.
         * @param {*} value
         * @return {boolean}
         */
        static isCompatibleWith(value: any): boolean;
        
        /**
         * Checks if the value could be used as the Soy type {trusted_resource_uri}.
         * Strict: disallows strings or UnsanitizedText.
         * @param {*} value
         * @return {boolean}
         */
        static isCompatibleWithStrict(value: any): boolean;
    }

    /**
     * Content of type {@link goog.soy.data.SanitizedContentKind.ATTRIBUTES}.
     *
     * The content should be safely embeddable within an open tag, such as a
     * key="value" pair. The content direction is LTR.
     *
     * @extends {goog.soy.data.SanitizedContent}
     * @constructor
     */
    class SanitizedHtmlAttribute extends goog.soy.data.SanitizedContent {
        constructor();
        
        /**
         * Checks if the value could be used as the Soy type {attribute}.
         * @param {*} value
         * @return {boolean}
         */
        static isCompatibleWith(value: any): boolean;
        
        /**
         * Checks if the value could be used as the Soy type {attribute}.
         * Strict: disallows strings or UnsanitizedText.
         * @param {*} value
         * @return {boolean}
         */
        static isCompatibleWithStrict(value: any): boolean;
    }

    /**
     * Content of type {@link goog.soy.data.SanitizedContentKind.CSS}.
     *
     * The content is non-attacker-exploitable CSS, such as {@code @import url(x)}.
     * The content direction is LTR.
     *
     * @extends {goog.soy.data.SanitizedContent}
     * @constructor
     */
    class SanitizedCss extends goog.soy.data.SanitizedContent {
        constructor();
        
        /**
         * Checks if the value could be used as the Soy type {css}.
         * @param {*} value
         * @return {boolean}
         */
        static isCompatibleWith(value: any): boolean;
        
        /**
         * Checks if the value could be used as the Soy type {css}.
         * Strict: disallows strings or UnsanitizedText.
         * @param {*} value
         * @return {boolean}
         */
        static isCompatibleWithStrict(value: any): boolean;
        
        /**
         * Converts SanitizedCss into SafeStyleSheet.
         * Note: SanitizedCss in Soy represents both SafeStyle and SafeStyleSheet in
         * Closure. It's about to be split so that SanitizedCss represents only
         * SafeStyleSheet.
         * @return {!goog.html.SafeStyleSheet}
         */
        toSafeStyleSheet(): goog.html.SafeStyleSheet;
    }
}
