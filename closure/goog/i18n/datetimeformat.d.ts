declare module goog {
    function require(name: 'goog.i18n.DateTimeFormat'): typeof goog.i18n.DateTimeFormat;
    function require(name: 'goog.i18n.DateTimeFormat.Format'): typeof goog.i18n.DateTimeFormat.Format;
}

declare module goog.i18n {

    /**
     * Construct a DateTimeFormat object based on current locale.
     * @constructor
     * @param {string|number} pattern pattern specification or pattern type.
     * @param {!Object=} opt_dateTimeSymbols Optional symbols to use for this
     *     instance rather than the global symbols.
     *     You can use some of the predefined SHORT / MEDIUM / LONG / FULL patterns,
     *     or the common patterns defined in goog.i18n.DateTimePatterns.
     *     Examples:
     *     <code><pre>
     *       var fmt = new goog.i18n.DateTimeFormat(
     *           goog.i18n.DateTimeFormat.Format.FULL_DATE);
     *       var fmt = new goog.i18n.DateTimeFormat(
     *           goog.i18n.DateTimePatterns.MONTH_DAY_YEAR_MEDIUM);
     *     </pre></code>
     *
     * {@see goog.i18n.DateTimeFormat.Format}
     * {@see goog.i18n.DateTimePatterns}
     * @final
     */
    class DateTimeFormat {
        constructor(pattern: string|number, opt_dateTimeSymbols?: Object);
        
        /**
         * Format the given date object according to preset pattern and current locale.
         * @param {goog.date.DateLike} date The Date object that is being formatted.
         * @param {goog.i18n.TimeZone=} opt_timeZone optional, if specified, time
         *    related fields will be formatted based on its setting. When this field
         *    is not specified, "undefined" will be pass around and those function
         *    that really need time zone service will create a default one.
         * @return {string} Formatted string for the given date.
         *    Throws an error if the date is null or if one tries to format a date-only
         *    object (for instance goog.date.Date) using a pattern with time fields.
         */
        format(date: goog.date.DateLike, opt_timeZone?: goog.i18n.TimeZone): string;
        
        /**
         * Sets if the usage of Ascii digits in formatting should be enforced in
         * formatted date/time even for locales where native digits are indicated.
         * Also sets whether to remove RLM unicode control characters when using
         * standard enumerated patterns (they exist e.g. in standard d/M/y for Arabic).
         * Production code should call this once before any `DateTimeFormat`
         * object is instantiated.
         * Caveats:
         *    * Enforcing ASCII digits affects all future formatting by new or existing
         * `DateTimeFormat` objects.
         *    * Removal of RLM characters only applies to `DateTimeFormat` objects
         * instantiated after this call.
         * @param {boolean} enforceAsciiDigits Whether Ascii digits should be enforced.
         */
        static setEnforceAsciiDigits(enforceAsciiDigits: boolean): void;
        
        /**
         * @return {boolean} Whether enforcing ASCII digits for all locales. See
         *     `#setEnforceAsciiDigits` for more details.
         */
        static isEnforceAsciiDigits(): boolean;
        
        /**
         * Localizes a string potentially containing numbers, replacing ASCII digits
         * with native digits if specified so by the locale. Leaves other characters.
         * @param {number|string} input the string to be localized, using ASCII digits.
         * @param {!Object=} opt_dateTimeSymbols Optional symbols to use rather than
         *     the global symbols.
         * @return {string} localized string, potentially using native digits.
         * @suppress {strictMissingProperties} Part of the go/strict_warnings_migration
         */
        static localizeNumbers(input: number|string, opt_dateTimeSymbols?: Object): string;
    }
}

declare module goog.i18n.DateTimeFormat {

    /**
     * Enum to identify predefined Date/Time format pattern.
     * @enum {number}
     */
    type Format = number;
    var Format: {
        FULL_DATE: Format;
        LONG_DATE: Format;
        MEDIUM_DATE: Format;
        SHORT_DATE: Format;
        FULL_TIME: Format;
        LONG_TIME: Format;
        MEDIUM_TIME: Format;
        SHORT_TIME: Format;
        FULL_DATETIME: Format;
        LONG_DATETIME: Format;
        MEDIUM_DATETIME: Format;
        SHORT_DATETIME: Format;
    };

    /**
     * These are token types, corresponding to above token definitions.
     * @enum {number}
     * @private
     */
    type PartTypes_ = number;
    var PartTypes_: {
        QUOTED_STRING: PartTypes_;
        FIELD: PartTypes_;
        LITERAL: PartTypes_;
    };
}
