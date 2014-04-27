declare module goog.labs.testing {

    /**
     * The AllOf matcher.
     *
     * @param {!Array.<!goog.labs.testing.Matcher>} matchers Input matchers.
     *
     * @constructor
     * @struct
     * @implements {goog.labs.testing.Matcher}
     * @final
     */
    export class AllOfMatcher {
        constructor(matchers: Array<goog.labs.testing.Matcher>);
    }

    /**
     * The AnyOf matcher.
     *
     * @param {!Array.<!goog.labs.testing.Matcher>} matchers Input matchers.
     *
     * @constructor
     * @struct
     * @implements {goog.labs.testing.Matcher}
     * @final
     */
    export class AnyOfMatcher {
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
    export class IsNotMatcher {
        constructor(matcher: goog.labs.testing.Matcher);
    }
}
