declare module goog {
    function require(name: 'goog.dom.textAssert'): typeof goog.dom.textAssert;
}

declare module goog.dom.textAssert {

    /**
     * Assert that the string is plain text that does not have HTML, i.e. not
     * affected by HTML escaping. Otherwise, this raises an error if assertions are
     * enabled. It does NOT sanitize nor make any change to the input string. It
     * should only be used when the assertion failure is benign, such as printing
     * spurious tags. DO NOT count on this to remove unsafe HTML. It is only meant
     * for legacy refactoring. Please do NOT use in new code.
     * @param {string} text
     * @return {string}
     */
    function assertHtmlFree(text: string): string;
}
