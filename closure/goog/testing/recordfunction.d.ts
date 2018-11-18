declare module goog {
    function require(name: 'goog.testing.FunctionCall'): typeof goog.testing.FunctionCall;
    function require(name: 'goog.testing.recordFunction'): typeof goog.testing.recordFunction;
}

declare module goog.testing.recordedFunction_ {

    /**
     * @return {number} Total number of calls.
     */
    function getCallCount(): number;

    /**
     * Asserts that the function was called a certain number of times.
     * @param {number|string} a The expected number of calls (1 arg) or debug
     *     message (2 args).
     * @param {number=} opt_b The expected number of calls (2 args only).
     */
    function assertCallCount(a: number|string, opt_b?: number): void;

    /**
     * @return {!Array<!goog.testing.FunctionCall>} All calls of the recorded
     *     function.
     */
    function getCalls(): Array<goog.testing.FunctionCall>;

    /**
     * @return {?goog.testing.FunctionCall} Last call of the recorded function or
     *     null if it hasn't been called.
     */
    function getLastCall(): goog.testing.FunctionCall;

    /**
     * Returns and removes the last call of the recorded function.
     * @return {?goog.testing.FunctionCall} Last call of the recorded function or
     *     null if it hasn't been called.
     */
    function popLastCall(): goog.testing.FunctionCall;

    /**
     * Returns a goog.Promise that resolves when the recorded function has equal
     * to or greater than the number of calls.
     * @param {number} num
     * @return {!goog.Promise<undefined>}
     */
    function waitForCalls(num: number): goog.Promise<void, any>;

    /**
     * Resets the recorded function and removes all calls.
     * @return {void}
     */
    function reset(): void;
}

declare module goog.testing {

    /**
     * Struct for a single function call.
     * @param {!Function} func The called function.
     * @param {!Object} thisContext `this` context of called function.
     * @param {!Arguments} args Arguments of the called function.
     * @param {*} ret Return value of the function or undefined in case of error.
     * @param {*} error The error thrown by the function or null if none.
     * @constructor
     */
    class FunctionCall {
        constructor(func: Function, thisContext: Object, args: Arguments, ret: any, error: any);
        
        /**
         * @return {!Function} The called function.
         */
        getFunction(): Function;
        
        /**
         * @return {!Object} `this` context of called function. It is the same as
         *     the created object if the function is a constructor.
         */
        getThis(): Object;
        
        /**
         * @return {!Array<?>} Arguments of the called function.
         */
        getArguments(): Array<any>;
        
        /**
         * Returns the nth argument of the called function.
         * @param {number} index 0-based index of the argument.
         * @return {*} The argument value or undefined if there is no such argument.
         */
        getArgument(index: number): any;
        
        /**
         * @return {*} Return value of the function or undefined in case of error.
         */
        getReturnValue(): any;
        
        /**
         * @return {*} The error thrown by the function or null if none.
         */
        getError(): any;
    }

    /**
     * Wraps the function into another one which calls the inner function and
     * records its calls. The recorded function will have 3 static methods:
     * `getCallCount`, `getCalls` and `getLastCall` but won't
     * inherit the original function's prototype and static fields.
     *
     * @param {!Function=} opt_f The function to wrap and record. Defaults to
     *     {@link goog.nullFunction}.
     * @return {!goog.testing.recordFunction.Type} The wrapped function.
     */
    function recordFunction(opt_f?: Function): goog.testing.recordFunction.Type;

    /**
     * Same as {@link goog.testing.recordFunction} but the recorded function will
     * have the same prototype and static fields as the original one. It can be
     * used with constructors.
     *
     * @param {!Function} ctor The function to wrap and record.
     * @return {!Function} The wrapped function.
     */
    function recordConstructor(ctor: Function): Function;
}

declare module goog.testing.recordFunction {

    /** @typedef {typeof goog.testing.recordedFunction_} */
    function Type(): void;
}
