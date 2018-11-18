declare module goog {
    function require(name: 'goog.testing.i18n.asserts'): typeof goog.testing.i18n.asserts;
}

declare module goog.testing.i18n.asserts {

    /**
     * Asserts that the two values are "almost equal" from i18n perspective
     * (based on a manually maintained and validated whitelist).
     * @param {string} expected The expected value.
     * @param {string} actual The actual value.
     */
    function assertI18nEquals(expected: string, actual: string): void;
}
