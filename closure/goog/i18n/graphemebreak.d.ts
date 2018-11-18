declare module goog {
    function require(name: 'goog.i18n.GraphemeBreak'): typeof goog.i18n.GraphemeBreak;
}

declare module goog.i18n.GraphemeBreak {

    /**
     * Enum for all Grapheme Cluster Break properties.
     * These enums directly corresponds to Grapheme_Cluster_Break property values
     * mentioned in http://unicode.org/reports/tr29 table 2. VIRAMA and
     * INDIC_LETTER are for the Virama × Base tailoring mentioned in the notes.
     *
     * @protected @enum {number}
     */
    type property = number;
    var property: {
        OTHER: property;
        CONTROL: property;
        EXTEND: property;
        PREPEND: property;
        SPACING_MARK: property;
        INDIC_LETTER: property;
        VIRAMA: property;
        L: property;
        V: property;
        T: property;
        LV: property;
        LVT: property;
        CR: property;
        LF: property;
        REGIONAL_INDICATOR: property;
        ZWJ: property;
        E_BASE: property;
        GLUE_AFTER_ZWJ: property;
        E_MODIFIER: property;
        E_BASE_GAZ: property;
    };

    /**
     * Indicates if there is a grapheme cluster boundary between a and b.
     *
     * Legacy function. Does not cover cases where a sequence of code points is
     * required in order to decide if there is a grapheme cluster boundary, such as
     * emoji modifier sequences and emoji flag sequences. To cover all cases please
     * use `hasGraphemeBreakStrings`.
     *
     * There are two kinds of grapheme clusters: 1) Legacy 2) Extended. This method
     * is to check for both using a boolean flag to switch between them. If no flag
     * is provided rules for the extended clusters will be used by default.
     *
     * @param {number} a The code point value of the first character.
     * @param {number} b The code point value of the second character.
     * @param {boolean=} opt_extended If true, indicates extended grapheme cluster;
     *     If false, indicates legacy cluster. Default value is true.
     * @return {boolean} True if there is a grapheme cluster boundary between
     *     a and b; False otherwise.
     */
    function hasGraphemeBreak(a: number, b: number, opt_extended?: boolean): boolean;

    /**
     * Indicates if there is a grapheme cluster boundary between a and b.
     *
     * There are two kinds of grapheme clusters: 1) Legacy 2) Extended. This method
     * is to check for both using a boolean flag to switch between them. If no flag
     * is provided rules for the extended clusters will be used by default.
     *
     * @param {string} a String with the first sequence of characters.
     * @param {string} b String with the second sequence of characters.
     * @param {boolean=} opt_extended If true, indicates extended grapheme cluster;
     *     If false, indicates legacy cluster. Default value is true.
     * @return {boolean} True if there is a grapheme cluster boundary between
     *     a and b; False otherwise.
     */
    function hasGraphemeBreakStrings(a: string, b: string, opt_extended?: boolean): boolean;
}
