declare module goog {
    function require(name: 'goog.labs.testing.AnythingMatcher'): typeof goog.labs.testing.AnythingMatcher;
}

declare module goog.labs.testing {

    /**
     * The Anything matcher. Matches all possible inputs.
     *
     * @constructor
     * @implements {goog.labs.testing.Matcher}
     * @final
     */
    class AnythingMatcher {
        constructor();
    }
}
