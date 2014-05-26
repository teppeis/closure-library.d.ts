declare module goog.labs.testing {

    /**
     * The GreaterThan matcher.
     *
     * @param {number} value The value to compare.
     *
     * @constructor
     * @struct
     * @implements {goog.labs.testing.Matcher}
     * @final
     */
    class GreaterThanMatcher {
        constructor(value: number);
    }

    /**
     * The lessThan matcher.
     *
     * @param {number} value The value to compare.
     *
     * @constructor
     * @struct
     * @implements {goog.labs.testing.Matcher}
     * @final
     */
    class LessThanMatcher {
        constructor(value: number);
    }

    /**
     * The GreaterThanEqualTo matcher.
     *
     * @param {number} value The value to compare.
     *
     * @constructor
     * @struct
     * @implements {goog.labs.testing.Matcher}
     * @final
     */
    class GreaterThanEqualToMatcher {
        constructor(value: number);
    }

    /**
     * The LessThanEqualTo matcher.
     *
     * @param {number} value The value to compare.
     *
     * @constructor
     * @struct
     * @implements {goog.labs.testing.Matcher}
     * @final
     */
    class LessThanEqualToMatcher {
        constructor(value: number);
    }

    /**
     * The EqualTo matcher.
     *
     * @param {number} value The value to compare.
     *
     * @constructor
     * @struct
     * @implements {goog.labs.testing.Matcher}
     * @final
     */
    class EqualToMatcher {
        constructor(value: number);
    }

    /**
     * The CloseTo matcher.
     *
     * @param {number} value The value to compare.
     * @param {number} range The range to check within.
     *
     * @constructor
     * @struct
     * @implements {goog.labs.testing.Matcher}
     * @final
     */
    class CloseToMatcher {
        constructor(value: number, range: number);
    }
}
