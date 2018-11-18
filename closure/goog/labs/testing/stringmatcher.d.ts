declare module goog {
    function require(name: 'goog.labs.testing.AnyStringMatcher'): typeof goog.labs.testing.AnyStringMatcher;
    function require(name: 'goog.labs.testing.ContainsStringMatcher'): typeof goog.labs.testing.ContainsStringMatcher;
    function require(name: 'goog.labs.testing.EndsWithMatcher'): typeof goog.labs.testing.EndsWithMatcher;
    function require(name: 'goog.labs.testing.EqualToIgnoringWhitespaceMatcher'): typeof goog.labs.testing.EqualToIgnoringWhitespaceMatcher;
    function require(name: 'goog.labs.testing.EqualsMatcher'): typeof goog.labs.testing.EqualsMatcher;
    function require(name: 'goog.labs.testing.RegexMatcher'): typeof goog.labs.testing.RegexMatcher;
    function require(name: 'goog.labs.testing.StartsWithMatcher'): typeof goog.labs.testing.StartsWithMatcher;
    function require(name: 'goog.labs.testing.StringContainsInOrderMatcher'): typeof goog.labs.testing.StringContainsInOrderMatcher;
}

declare module goog.labs.testing {

    /**
     * Matches any string value.
     *
     * @constructor @struct @implements {goog.labs.testing.Matcher} @final
     */
    class AnyStringMatcher {
        constructor();
    }

    /**
     * The ContainsString matcher.
     *
     * @param {string} value The expected string.
     *
     * @constructor
     * @struct
     * @implements {goog.labs.testing.Matcher}
     * @final
     */
    class ContainsStringMatcher {
        constructor(value: string);
    }

    /**
     * The EndsWith matcher.
     *
     * @param {string} value The expected string.
     *
     * @constructor
     * @struct
     * @implements {goog.labs.testing.Matcher}
     * @final
     */
    class EndsWithMatcher {
        constructor(value: string);
    }

    /**
     * The EqualToIgnoringWhitespace matcher.
     *
     * @param {string} value The expected string.
     *
     * @constructor
     * @struct
     * @implements {goog.labs.testing.Matcher}
     * @final
     */
    class EqualToIgnoringWhitespaceMatcher {
        constructor(value: string);
    }

    /**
     * The Equals matcher.
     *
     * @param {string} value The expected string.
     *
     * @constructor
     * @struct
     * @implements {goog.labs.testing.Matcher}
     * @final
     */
    class EqualsMatcher {
        constructor(value: string);
    }

    /**
     * The MatchesRegex matcher.
     *
     * @param {!RegExp} regex The expected regex.
     *
     * @constructor
     * @struct
     * @implements {goog.labs.testing.Matcher}
     * @final
     */
    class RegexMatcher {
        constructor(regex: RegExp);
    }

    /**
     * The StartsWith matcher.
     *
     * @param {string} value The expected string.
     *
     * @constructor
     * @struct
     * @implements {goog.labs.testing.Matcher}
     * @final
     */
    class StartsWithMatcher {
        constructor(value: string);
    }

    /**
     * The StringContainsInOrdermatcher.
     *
     * @param {Array<string>} values The expected string values.
     *
     * @constructor
     * @struct
     * @implements {goog.labs.testing.Matcher}
     * @final
     */
    class StringContainsInOrderMatcher {
        constructor(values: Array<string>);
    }
}
