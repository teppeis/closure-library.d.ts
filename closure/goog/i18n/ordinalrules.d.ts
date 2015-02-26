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
}
