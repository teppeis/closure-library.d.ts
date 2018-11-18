declare module goog {
    function require(name: 'goog.result.SimpleResult'): typeof goog.result.SimpleResult;
    function require(name: 'goog.result.SimpleResult.StateError'): typeof goog.result.SimpleResult.StateError;
}

declare module goog.result {

    /**
     * A SimpleResult object is a basic implementation of the
     * goog.result.Result interface. This could be subclassed(e.g. XHRResult)
     * or instantiated and returned by another class as a form of result. The caller
     * receiving the result could then attach handlers to be called when the result
     * is resolved(success or error).
     *
     * @constructor
     * @implements {goog.result.Result}
     * @deprecated Use {@link goog.Promise} instead - http://go/promisemigration
     */
    class SimpleResult {
        constructor();
        
        /**
         * Attaches handlers to be called when the value of this Result is available.
         *
         * @param {function(this:T, !goog.result.SimpleResult)} handler The function
         *     called when the value is available. The function is passed the Result
         *     object as the only argument.
         * @param {T=} opt_scope Optional scope for the handler.
         * @template T
         * @override
         */
        wait<T>(handler: (arg0: goog.result.SimpleResult) => any, opt_scope?: T): void;
        
        /**
         * Sets the value of this Result, changing the state.
         *
         * @param {*} value The value to set for this Result.
         */
        setValue(value: any): void;
        
        /**
         * Sets the Result to be an error Result.
         *
         * @param {*=} opt_error Optional error slug to set for this Result.
         */
        setError(opt_error?: any): void;
        
        /**
         * Cancels the Result.
         *
         * @return {boolean} Whether the result was canceled. It will not be canceled if
         *    the result was already canceled or has already resolved.
         * @override
         */
        cancel(): boolean;
        
        /**
         * Creates a SimpleResult that fires when the given promise resolves.
         * Use only during migration to Promises.
         * @param {!goog.Promise<?>} promise
         * @return {!goog.result.Result}
         */
        static fromPromise(promise: goog.Promise<any, any>): goog.result.Result;
    }
}

declare module goog.result.SimpleResult {

    /**
     * A waiting handler entry.
     * @typedef {{
     *   callback: function(goog.result.SimpleResult),
     *   scope: Object
     * }}
     * @private
     */
    type HandlerEntry_ = {callback: (arg0: goog.result.SimpleResult) => any; scope: Object};

    /**
     * Error thrown if there is an attempt to set the value or error for this result
     * more than once.
     *
     * @constructor
     * @extends {goog.debug.Error}
     * @final
     * @deprecated Use {@link goog.Promise} instead - http://go/promisemigration
     */
    class StateError extends goog.debug.Error {
        constructor();
    }
}
