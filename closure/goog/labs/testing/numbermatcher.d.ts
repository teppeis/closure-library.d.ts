declare module goog {
    function require(name: 'goog.labs.testing.AnyNumberMatcher'): typeof goog.labs.testing.AnyNumberMatcher;
    function require(name: 'goog.labs.testing.GreaterThanMatcher'): typeof goog.labs.testing.GreaterThanMatcher;
    function require(name: 'goog.labs.testing.LessThanMatcher'): typeof goog.labs.testing.LessThanMatcher;
    function require(name: 'goog.labs.testing.GreaterThanEqualToMatcher'): typeof goog.labs.testing.GreaterThanEqualToMatcher;
    function require(name: 'goog.labs.testing.LessThanEqualToMatcher'): typeof goog.labs.testing.LessThanEqualToMatcher;
    function require(name: 'goog.labs.testing.EqualToMatcher'): typeof goog.labs.testing.EqualToMatcher;
    function require(name: 'goog.labs.testing.CloseToMatcher'): typeof goog.labs.testing.CloseToMatcher;
}

declare module goog.labs.testing {

    /**
     * Matches any number value.
     *
     * @constructor @struct @implements {goog.labs.testing.Matcher} @final
     */
    class AnyNumberMatcher {
        constructor();
    }

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
