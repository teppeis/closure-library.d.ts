declare module goog {
    function require(name: 'goog.i18n.collation'): typeof goog.i18n.collation;
}

declare module goog.i18n.collation {

    /**
     * Returns the comparator for a locale. If a locale is not explicitly specified,
     * a comparator for the user's locale will be returned. Note that if the browser
     * does not support locale-sensitive string comparisons, the comparator returned
     * will be a simple codepoint comparator.
     *
     * @param {string=} opt_locale the locale that the comparator is used for.
     * @param {{usage: (string|undefined), localeMatcher: (string|undefined),
     *     sensitivity: (string|undefined), ignorePunctuation: (boolean|undefined),
     *     numeric: (boolean|undefined), caseFirst: (string|undefined)}=}
     *         opt_options the optional set of options for use with the native
     *         collator.
     * @return {function(string, string): number} The locale-specific comparator.
     */
    function createComparator(opt_locale?: string, opt_options?: {usage: string|void; localeMatcher: string|void; sensitivity: string|void; ignorePunctuation: boolean|void; numeric: boolean|void; caseFirst: string|void}): (arg0: string, arg1: string) => number;

    /**
     * Returns true if a locale-sensitive comparator is available for a locale. If
     * a locale is not explicitly specified, the user's locale is used instead.
     *
     * @param {string=} opt_locale The locale to be checked.
     * @return {boolean} Whether there is a locale-sensitive comparator available
     *     for the locale.
     */
    function hasNativeComparator(opt_locale?: string): boolean;
}
