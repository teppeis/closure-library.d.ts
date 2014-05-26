declare module goog.i18n.pluralRules {

    /**
     * Plural pattern keyword
     * @enum {string}
     */
    interface Keyword {
        ZERO: string;
        ONE: string;
        TWO: string;
        FEW: string;
        MANY: string;
        OTHER: string;
    }

    /**
     * Selected Plural rules by locale.
     */
    var select: any;
}
