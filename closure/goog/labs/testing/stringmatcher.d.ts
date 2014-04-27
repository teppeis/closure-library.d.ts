declare module goog.labs.testing {

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
    export class ContainsStringMatcher {
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
    export class EndsWithMatcher {
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
    export class EqualToIgnoringWhitespaceMatcher {
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
    export class EqualsMatcher {
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
    export class RegexMatcher {
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
    export class StartsWithMatcher {
        constructor(value: string);
    }

    /**
     * The StringContainsInOrdermatcher.
     *
     * @param {Array.<string>} values The expected string values.
     *
     * @constructor
     * @struct
     * @implements {goog.labs.testing.Matcher}
     * @final
     */
    export class StringContainsInOrderMatcher {
        constructor(values: Array<string>);
    }
}
