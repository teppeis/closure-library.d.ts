declare module goog {
    function require(name: 'goog.labs.testing.AllOfMatcher'): typeof goog.labs.testing.AllOfMatcher;
    function require(name: 'goog.labs.testing.AnyOfMatcher'): typeof goog.labs.testing.AnyOfMatcher;
    function require(name: 'goog.labs.testing.IsNotMatcher'): typeof goog.labs.testing.IsNotMatcher;
}

declare module goog.labs.testing {

    /**
     * The AllOf matcher.
     *
     * @param {!Array<!goog.labs.testing.Matcher>} matchers Input matchers.
     *
     * @constructor
     * @struct
     * @implements {goog.labs.testing.Matcher}
     * @final
     */
    class AllOfMatcher {
        constructor(matchers: Array<goog.labs.testing.Matcher>);
    }

    /**
     * The AnyOf matcher.
     *
     * @param {!Array<!goog.labs.testing.Matcher>} matchers Input matchers.
     *
     * @constructor
     * @struct
     * @implements {goog.labs.testing.Matcher}
     * @final
     */
    class AnyOfMatcher {
        constructor(matchers: Array<goog.labs.testing.Matcher>);
    }

    /**
     * The IsNot matcher.
     *
     * @param {!goog.labs.testing.Matcher} matcher The matcher to negate.
     *
     * @constructor
     * @struct
     * @implements {goog.labs.testing.Matcher}
     * @final
     */
    class IsNotMatcher {
        constructor(matcher: goog.labs.testing.Matcher);
    }
}
