declare module goog.labs.testing {

    /**
     * The HasEntries matcher.
     *
     * @param {!Object} entries The entries to check in the object.
     *
     * @constructor
     * @struct
     * @implements {goog.labs.testing.Matcher}
     * @final
     */
    class HasEntriesMatcher {
        constructor(entries: Object);
    }

    /**
     * The HasEntry matcher.
     *
     * @param {string} key The key for the entry.
     * @param {*} value The value for the key.
     *
     * @constructor
     * @struct
     * @implements {goog.labs.testing.Matcher}
     * @final
     */
    class HasEntryMatcher {
        constructor(key: string, value: any);
    }

    /**
     * The HasKey matcher.
     *
     * @param {string} key The key to check in the object.
     *
     * @constructor
     * @struct
     * @implements {goog.labs.testing.Matcher}
     * @final
     */
    class HasKeyMatcher {
        constructor(key: string);
    }

    /**
     * The HasValue matcher.
     *
     * @param {*} value The value to check in the object.
     *
     * @constructor
     * @struct
     * @implements {goog.labs.testing.Matcher}
     * @final
     */
    class HasValueMatcher {
        constructor(value: any);
    }
}
