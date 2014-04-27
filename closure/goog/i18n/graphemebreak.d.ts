declare module goog.i18n.GraphemeBreak {

    /**
     * Enum for all Grapheme Cluster Break properties.
     * These enums directly corresponds to Grapheme_Cluster_Break property values
     * mentioned in http://unicode.org/reports/tr29 table 2. VIRAMA and
     * INDIC_CONSONANT are for the Virama × Base tailoring mentioned in the notes.
     *
     * CR and LF are moved to the bottom of the list because they occur only once
     * and so good candidates to take 2 decimal digit values.
     * @enum {number}
     * @protected
     */
    export interface property {
        ANY: number;
        CONTROL: number;
        EXTEND: number;
        PREPEND: number;
        SPACING_MARK: number;
        INDIC_CONSONANT: number;
        VIRAMA: number;
        L: number;
        V: number;
        T: number;
        LV: number;
        LVT: number;
        CR: number;
        LF: number;
        REGIONAL_INDICATOR: number;
    }

    /**
     * There are two kinds of grapheme clusters: 1) Legacy 2)Extended. This method
     * is to check for both using a boolean flag to switch between them.
     * @param {number} a The code point value of the first character.
     * @param {number} b The code point value of the second character.
     * @param {boolean=} opt_extended If true, indicates extended grapheme cluster;
     *     If false, indicates legacy cluster.
     * @return {boolean} True if a & b do not form a cluster; False otherwise.
     */
    export function hasGraphemeBreak(a: number, b: number, opt_extended?: boolean): boolean;
}
