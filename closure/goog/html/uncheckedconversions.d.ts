declare module goog {
    function require(name: 'goog.html.uncheckedconversions'): typeof goog.html.uncheckedconversions;
}

declare module goog.html.uncheckedconversions {

    /**
     * Performs an "unchecked conversion" to SafeHtml from a plain string that is
     * known to satisfy the SafeHtml type contract.
     *
     * IMPORTANT: Uses of this method must be carefully security-reviewed to ensure
     * that the value of `html` satisfies the SafeHtml type contract in all
     * possible program states.
     *
     *
     * @param {!goog.string.Const} justification A constant string explaining why
     *     this use of this method is safe. May include a security review ticket
     *     number.
     * @param {string} html A string that is claimed to adhere to the SafeHtml
     *     contract.
     * @param {?goog.i18n.bidi.Dir=} opt_dir The optional directionality of the
     *     SafeHtml to be constructed. A null or undefined value signifies an
     *     unknown directionality.
     * @return {!goog.html.SafeHtml} The value of html, wrapped in a SafeHtml
     *     object.
     */
    function safeHtmlFromStringKnownToSatisfyTypeContract(justification: goog.string$.Const, html: string, opt_dir?: goog.i18n.bidi.Dir): goog.html.SafeHtml;

    /**
     * Performs an "unchecked conversion" to SafeScript from a plain string that is
     * known to satisfy the SafeScript type contract.
     *
     * IMPORTANT: Uses of this method must be carefully security-reviewed to ensure
     * that the value of `script` satisfies the SafeScript type contract in
     * all possible program states.
     *
     *
     * @param {!goog.string.Const} justification A constant string explaining why
     *     this use of this method is safe. May include a security review ticket
     *     number.
     * @param {string} script The string to wrap as a SafeScript.
     * @return {!goog.html.SafeScript} The value of `script`, wrapped in a
     *     SafeScript object.
     */
    function safeScriptFromStringKnownToSatisfyTypeContract(justification: goog.string$.Const, script: string): goog.html.SafeScript;

    /**
     * Performs an "unchecked conversion" to SafeStyle from a plain string that is
     * known to satisfy the SafeStyle type contract.
     *
     * IMPORTANT: Uses of this method must be carefully security-reviewed to ensure
     * that the value of `style` satisfies the SafeStyle type contract in all
     * possible program states.
     *
     *
     * @param {!goog.string.Const} justification A constant string explaining why
     *     this use of this method is safe. May include a security review ticket
     *     number.
     * @param {string} style The string to wrap as a SafeStyle.
     * @return {!goog.html.SafeStyle} The value of `style`, wrapped in a
     *     SafeStyle object.
     */
    function safeStyleFromStringKnownToSatisfyTypeContract(justification: goog.string$.Const, style: string): goog.html.SafeStyle;

    /**
     * Performs an "unchecked conversion" to SafeStyleSheet from a plain string
     * that is known to satisfy the SafeStyleSheet type contract.
     *
     * IMPORTANT: Uses of this method must be carefully security-reviewed to ensure
     * that the value of `styleSheet` satisfies the SafeStyleSheet type
     * contract in all possible program states.
     *
     *
     * @param {!goog.string.Const} justification A constant string explaining why
     *     this use of this method is safe. May include a security review ticket
     *     number.
     * @param {string} styleSheet The string to wrap as a SafeStyleSheet.
     * @return {!goog.html.SafeStyleSheet} The value of `styleSheet`, wrapped
     *     in a SafeStyleSheet object.
     */
    function safeStyleSheetFromStringKnownToSatisfyTypeContract(justification: goog.string$.Const, styleSheet: string): goog.html.SafeStyleSheet;

    /**
     * Performs an "unchecked conversion" to SafeUrl from a plain string that is
     * known to satisfy the SafeUrl type contract.
     *
     * IMPORTANT: Uses of this method must be carefully security-reviewed to ensure
     * that the value of `url` satisfies the SafeUrl type contract in all
     * possible program states.
     *
     *
     * @param {!goog.string.Const} justification A constant string explaining why
     *     this use of this method is safe. May include a security review ticket
     *     number.
     * @param {string} url The string to wrap as a SafeUrl.
     * @return {!goog.html.SafeUrl} The value of `url`, wrapped in a SafeUrl
     *     object.
     */
    function safeUrlFromStringKnownToSatisfyTypeContract(justification: goog.string$.Const, url: string): goog.html.SafeUrl;

    /**
     * Performs an "unchecked conversion" to TrustedResourceUrl from a plain string
     * that is known to satisfy the TrustedResourceUrl type contract.
     *
     * IMPORTANT: Uses of this method must be carefully security-reviewed to ensure
     * that the value of `url` satisfies the TrustedResourceUrl type contract
     * in all possible program states.
     *
     *
     * @param {!goog.string.Const} justification A constant string explaining why
     *     this use of this method is safe. May include a security review ticket
     *     number.
     * @param {string} url The string to wrap as a TrustedResourceUrl.
     * @return {!goog.html.TrustedResourceUrl} The value of `url`, wrapped in
     *     a TrustedResourceUrl object.
     */
    function trustedResourceUrlFromStringKnownToSatisfyTypeContract(justification: goog.string$.Const, url: string): goog.html.TrustedResourceUrl;
}
