declare module goog.html.sanitizer {

    /**
     * A whitelist for attributes that are always safe and allowed by default.
     * The sanitizer only applies whitespace trimming to these.
     * @const @dict {boolean}
     */
    var AttributeWhitelist: any;

    /**
     * A whitelist for attributes that are not safe to allow unrestricted, but are
     * made safe by default policies installed by the sanitizer in
     * goog.html.sanitizer.HtmlSanitizer.Builder.prototype.build, and thus allowed
     * by default under these policies.
     * @const @dict {boolean}
     */
    var AttributeSanitizedWhitelist: any;
}
