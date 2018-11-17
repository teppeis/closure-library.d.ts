declare module goog {
    function require(name: 'goog.i18n.ordinalRules'): typeof goog.i18n.ordinalRules;
}

declare module goog.i18n.ordinalRules {

    /**
     * Ordinal pattern keyword
     * @enum {string}
     */
    type Keyword = string;
    var Keyword: {
        ZERO: Keyword;
        ONE: Keyword;
        TWO: Keyword;
        FEW: Keyword;
        MANY: Keyword;
        OTHER: Keyword;
    };

    /**
     * Selected Ordinal rules by locale.
     */
    var select: any;

    /**
     * Ordinal selection function.
     *
     * The actual implementation is locale-dependent.
     *
     * @param {number} n The count of items.
     * @param {number=} opt_precision optional, precision.
     * @return {goog.i18n.ordinalRules.Keyword}
     */
    function select(n: number, opt_precision?: number): goog.i18n.ordinalRules.Keyword;
}
