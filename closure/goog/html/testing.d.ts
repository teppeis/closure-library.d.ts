declare module goog {
    function require(name: 'goog.html.testing'): typeof goog.html.testing;
}

declare module goog.html.testing {

    /**
     * Creates a SafeHtml wrapping the given value. No validation is performed.
     *
     * This function is for use in tests only and must never be used in production
     * code.
     *
     * @param {string} html The string to wrap into a SafeHtml.
     * @param {?goog.i18n.bidi.Dir=} opt_dir The optional directionality of the
     *     SafeHtml to be constructed. A null or undefined value signifies an
     *     unknown directionality.
     * @return {!goog.html.SafeHtml}
     */
    function newSafeHtmlForTest(html: string, opt_dir?: goog.i18n.bidi.Dir): goog.html.SafeHtml;

    /**
     * Creates a SafeScript wrapping the given value. No validation is performed.
     *
     * This function is for use in tests only and must never be used in production
     * code.
     *
     * @param {string} script The string to wrap into a SafeScript.
     * @return {!goog.html.SafeScript}
     */
    function newSafeScriptForTest(script: string): goog.html.SafeScript;

    /**
     * Creates a SafeStyle wrapping the given value. No validation is performed.
     *
     * This function is for use in tests only and must never be used in production
     * code.
     *
     * @param {string} style String to wrap into a SafeStyle.
     * @return {!goog.html.SafeStyle}
     */
    function newSafeStyleForTest(style: string): goog.html.SafeStyle;

    /**
     * Creates a SafeStyleSheet wrapping the given value. No validation is
     * performed.
     *
     * This function is for use in tests only and must never be used in production
     * code.
     *
     * @param {string} styleSheet String to wrap into a SafeStyleSheet.
     * @return {!goog.html.SafeStyleSheet}
     */
    function newSafeStyleSheetForTest(styleSheet: string): goog.html.SafeStyleSheet;

    /**
     * Creates a SafeUrl wrapping the given value. No validation is performed.
     *
     * This function is for use in tests only and must never be used in production
     * code.
     *
     * @param {string} url String to wrap into a SafeUrl.
     * @return {!goog.html.SafeUrl}
     */
    function newSafeUrlForTest(url: string): goog.html.SafeUrl;

    /**
     * Creates a TrustedResourceUrl wrapping the given value. No validation is
     * performed.
     *
     * This function is for use in tests only and must never be used in production
     * code.
     *
     * @param {string} url String to wrap into a TrustedResourceUrl.
     * @return {!goog.html.TrustedResourceUrl}
     */
    function newTrustedResourceUrlForTest(url: string): goog.html.TrustedResourceUrl;

    /**
     * Creates an argument matcher for SafeHtml.
     * @param {string|!goog.html.SafeHtml} expected
     * @return {!goog.testing.mockmatchers.ArgumentMatcher}
     */
    function matchSafeHtml(expected: string|goog.html.SafeHtml): goog.testing.mockmatchers.ArgumentMatcher;

    /**
     * Creates an argument matcher for SafeScript.
     * @param {string|!goog.html.SafeScript} expected
     * @return {!goog.testing.mockmatchers.ArgumentMatcher}
     */
    function matchSafeScript(expected: string|goog.html.SafeScript): goog.testing.mockmatchers.ArgumentMatcher;

    /**
     * Creates an argument matcher for SafeStyle.
     * @param {string|!goog.html.SafeStyle} expected
     * @return {!goog.testing.mockmatchers.ArgumentMatcher}
     */
    function matchSafeStyle(expected: string|goog.html.SafeStyle): goog.testing.mockmatchers.ArgumentMatcher;

    /**
     * Creates an argument matcher for SafeStyleSheet.
     * @param {string|!goog.html.SafeStyleSheet} expected
     * @return {!goog.testing.mockmatchers.ArgumentMatcher}
     */
    function matchSafeStyleSheet(expected: string|goog.html.SafeStyleSheet): goog.testing.mockmatchers.ArgumentMatcher;

    /**
     * Creates an argument matcher for SafeUrl.
     * @param {string|!goog.html.SafeUrl} expected
     * @return {!goog.testing.mockmatchers.ArgumentMatcher}
     */
    function matchSafeUrl(expected: string|goog.html.SafeUrl): goog.testing.mockmatchers.ArgumentMatcher;

    /**
     * Creates an argument matcher for TrustedResourceUrl.
     * @param {string|!goog.html.TrustedResourceUrl} expected
     * @return {!goog.testing.mockmatchers.ArgumentMatcher}
     */
    function matchTrustedResourceUrl(expected: string|goog.html.TrustedResourceUrl): goog.testing.mockmatchers.ArgumentMatcher;

    /**
     * Equality tester to be used in Jasmine tests. Example:
     *
     *     beforeEach(function() {
     *       jasmine.addCustomEqualityTester(
     *           goog.html.testing.checkTypedStringEquality);
     *     });
     *
     *     it('typed string value matches same string', function() {
     *       expect(f).toHaveBeenCalledWith('expected');
     *     });
     *
     *     it('typed string value matches same type and string', function() {
     *       expect(f).toHaveBeenCalledWith(goog.string.Const.from('expected'));
     *     });
     *
     * @param {*} actual Handles goog.string.TypedString.
     * @param {*} expected Handles goog.string.TypedString or string.
     * @return {boolean|undefined} Undefined if not called with
     *     goog.string.TypedString, true if typed strings equal, false if not.
     */
    function checkTypedStringEquality(actual: any, expected: any): boolean|void;
}
