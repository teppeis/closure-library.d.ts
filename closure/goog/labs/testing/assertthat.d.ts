declare module goog.labs.testing {

    /**
     * Error thrown when a Matcher fails to match the input value.
     * @param {string=} opt_message The error message.
     * @constructor
     * @extends {goog.debug.Error}
     * @final
     */
    export class MatcherError extends goog.debug.Error {
        constructor(opt_message?: string);
    }

    /**
     * Asserts that the actual value evaluated by the matcher is true.
     *
     * @param {*} actual The object to assert by the matcher.
     * @param {!goog.labs.testing.Matcher} matcher A matcher to verify values.
     * @param {string=} opt_reason Description of what is asserted.
     *
     */
    export function assertThat(actual: any, matcher: goog.labs.testing.Matcher, opt_reason?: string): void;
}
