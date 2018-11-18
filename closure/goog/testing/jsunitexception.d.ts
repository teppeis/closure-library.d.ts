declare module goog {
    function require(name: 'goog.testing.JsUnitException'): typeof goog.testing.JsUnitException;
}

declare module goog.testing {

    /**
     * @param {string} comment A summary for the exception.
     * @param {?string=} opt_message A description of the exception.
     * @constructor
     * @extends {Error}
     * @final
     */
    class JsUnitException extends Error {
        constructor(comment: string, opt_message?: string);
    }
}
