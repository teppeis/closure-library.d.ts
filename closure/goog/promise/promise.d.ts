declare module goog {
    function require(name: 'goog.Promise'): typeof goog.Promise;
}

declare module goog {

    /**
     * NOTE: This class was created in anticipation of the built-in Promise type
     * being standardized and implemented across browsers. Now that Promise is
     * available in modern browsers, and is automatically polyfilled by the Closure
     * Compiler, by default, most new code should use native `Promise`
     * instead of `goog.Promise`. However, `goog.Promise` has the
     * concept of cancellation which native Promises do not yet have. So code
     * needing cancellation may still want to use `goog.Promise`.
     *
     * Promises provide a result that may be resolved asynchronously. A Promise may
     * be resolved by being fulfilled with a fulfillment value, rejected with a
     * rejection reason, or blocked by another Promise. A Promise is said to be
     * settled if it is either fulfilled or rejected. Once settled, the Promise
     * result is immutable.
     *
     * Promises may represent results of any type, including undefined. Rejection
     * reasons are typically Errors, but may also be of any type. Closure Promises
     * allow for optional type annotations that enforce that fulfillment values are
     * of the appropriate types at compile time.
     *
     * The result of a Promise is accessible by calling `then` and registering
     * `onFulfilled` and `onRejected` callbacks. Once the Promise
     * is settled, the relevant callbacks are invoked with the fulfillment value or
     * rejection reason as argument. Callbacks are always invoked in the order they
     * were registered, even when additional `then` calls are made from inside
     * another callback. A callback is always run asynchronously sometime after the
     * scope containing the registering `then` invocation has returned.
     *
     * If a Promise is resolved with another Promise, the first Promise will block
     * until the second is settled, and then assumes the same result as the second
     * Promise. This allows Promises to depend on the results of other Promises,
     * linking together multiple asynchronous operations.
     *
     * This implementation is compatible with the Promises/A+ specification and
     * passes that specification's conformance test suite. A Closure Promise may be
     * resolved with a Promise instance (or sufficiently compatible Promise-like
     * object) created by other Promise implementations. From the specification,
     * Promise-like objects are known as "Thenables".
     *
     * @see http://promisesaplus.com/
     *
     * @param {function(
     *             this:RESOLVER_CONTEXT,
     *             function((TYPE|IThenable<TYPE>|Thenable)=),
     *             function(*=)): void} resolver
     *     Initialization function that is invoked immediately with `resolve`
     *     and `reject` functions as arguments. The Promise is resolved or
     *     rejected with the first argument passed to either function.
     * @param {RESOLVER_CONTEXT=} opt_context An optional context for executing the
     *     resolver function. If unspecified, the resolver function will be executed
     *     in the default scope.
     * @constructor
     * @struct
     * @final
     * @implements {goog.Thenable<TYPE>}
     * @template TYPE,RESOLVER_CONTEXT
     */
    class Promise<TYPE, RESOLVER_CONTEXT> {
        constructor(resolver: (arg0: (arg0?: TYPE|IThenable<TYPE>|_Thenable) => any, arg1: (arg0?: any) => any) => void, opt_context?: RESOLVER_CONTEXT);
        
        /** @const @private {goog.async.FreeList<!goog.Promise.CallbackEntry_>} */
        static freelist_: any;
        
        /**
         * @param {VALUE=} opt_value
         * @return {RESULT} A new Promise that is immediately resolved
         *     with the given value. If the input value is already a goog.Promise, it
         *     will be returned immediately without creating a new instance.
         * @template VALUE
         * @template RESULT := type('goog.Promise',
         *     cond(isUnknown(VALUE), unknown(),
         *       mapunion(VALUE, (V) =>
         *         cond(isTemplatized(V) && sub(rawTypeOf(V), 'IThenable'),
         *           templateTypeOf(V, 0),
         *           cond(sub(V, 'Thenable'),
         *              unknown(),
         *              V)))))
         * =:
         */
        static resolve<VALUE>(opt_value?: VALUE): RESULT;
        
        /**
         * @param {*=} opt_reason
         * @return {!goog.Promise} A new Promise that is immediately rejected with the
         *     given reason.
         */
        static reject(opt_reason?: any): goog.Promise<any, any>;
        
        /**
         * @param {!Array<?(goog.Promise<TYPE>|goog.Thenable<TYPE>|Thenable|*)>}
         *     promises
         * @return {!goog.Promise<TYPE>} A Promise that receives the result of the
         *     first Promise (or Promise-like) input to settle immediately after it
         *     settles.
         * @template TYPE
         */
        static race<TYPE>(promises: Array<goog.Promise<TYPE, any>|goog.Thenable<TYPE>|_Thenable|any>): goog.Promise<TYPE, any>;
        
        /**
         * @param {!Array<?(goog.Promise<TYPE>|goog.Thenable<TYPE>|Thenable|*)>}
         *     promises
         * @return {!goog.Promise<!Array<TYPE>>} A Promise that receives a list of
         *     every fulfilled value once every input Promise (or Promise-like) is
         *     successfully fulfilled, or is rejected with the first rejection reason
         *     immediately after it is rejected.
         * @template TYPE
         */
        static all<TYPE>(promises: Array<goog.Promise<TYPE, any>|goog.Thenable<TYPE>|_Thenable|any>): goog.Promise<Array<TYPE>, any>;
        
        /**
         * @param {!Array<?(goog.Promise<TYPE>|goog.Thenable<TYPE>|Thenable|*)>}
         *     promises
         * @return {!goog.Promise<!Array<{
         *     fulfilled: boolean,
         *     value: (TYPE|undefined),
         *     reason: (*|undefined)}>>} A Promise that resolves with a list of
         *         result objects once all input Promises (or Promise-like) have
         *         settled. Each result object contains a 'fulfilled' boolean indicating
         *         whether an input Promise was fulfilled or rejected. For fulfilled
         *         Promises, the resulting value is stored in the 'value' field. For
         *         rejected Promises, the rejection reason is stored in the 'reason'
         *         field.
         * @template TYPE
         */
        static allSettled<TYPE>(promises: Array<goog.Promise<TYPE, any>|goog.Thenable<TYPE>|_Thenable|any>): goog.Promise<Array<{fulfilled: boolean; value: TYPE|void; reason: any|void}>, any>;
        
        /**
         * @param {!Array<?(goog.Promise<TYPE>|goog.Thenable<TYPE>|Thenable|*)>}
         *     promises
         * @return {!goog.Promise<TYPE>} A Promise that receives the value of the first
         *     input to be fulfilled, or is rejected with a list of every rejection
         *     reason if all inputs are rejected.
         * @template TYPE
         */
        static firstFulfilled<TYPE>(promises: Array<goog.Promise<TYPE, any>|goog.Thenable<TYPE>|_Thenable|any>): goog.Promise<TYPE, any>;
        
        /**
         * @return {!goog.promise.Resolver<TYPE>} Resolver wrapping the promise and its
         *     resolve / reject functions. Resolving or rejecting the resolver
         *     resolves or rejects the promise.
         * @template TYPE
         */
        static withResolver<TYPE>(): goog.promise.Resolver<TYPE>;
        
        /**
         * Adds callbacks that will operate on the result of the Promise without
         * returning a child Promise (unlike "then").
         *
         * If the Promise is fulfilled, the `onFulfilled` callback will be invoked
         * with the fulfillment value as argument.
         *
         * If the Promise is rejected, the `onRejected` callback will be invoked
         * with the rejection reason as argument.
         *
         * @param {?(function(this:THIS, TYPE):?)=} opt_onFulfilled A
         *     function that will be invoked with the fulfillment value if the Promise
         *     is fulfilled.
         * @param {?(function(this:THIS, *): *)=} opt_onRejected A function that will
         *     be invoked with the rejection reason if the Promise is rejected.
         * @param {THIS=} opt_context An optional context object that will be the
         *     execution context for the callbacks. By default, functions are executed
         *     with the default this.
         * @package
         * @template THIS
         */
        thenVoid<THIS>(opt_onFulfilled?: ((arg0: TYPE) => any), opt_onRejected?: ((arg0: any) => any), opt_context?: THIS): void;
        
        /**
         * Adds a callback that will be invoked when the Promise is settled (fulfilled
         * or rejected). The callback receives no argument, and no new child Promise is
         * created. This is useful for ensuring that cleanup takes place after certain
         * asynchronous operations. Callbacks added with `thenAlways` will be
         * executed in the same order with other calls to `then`,
         * `thenAlways`, or `thenCatch`.
         *
         * Since it does not produce a new child Promise, cancellation propagation is
         * not prevented by adding callbacks with `thenAlways`. A Promise that has
         * a cleanup handler added with `thenAlways` will be canceled if all of
         * its children created by `then` (or `thenCatch`) are canceled.
         * Additionally, since any rejections are not passed to the callback, it does
         * not stop the unhandled rejection handler from running.
         *
         * @param {function(this:THIS): void} onSettled A function that will be invoked
         *     when the Promise is settled (fulfilled or rejected).
         * @param {THIS=} opt_context An optional context object that will be the
         *     execution context for the callbacks. By default, functions are executed
         *     in the global scope.
         * @return {!goog.Promise<TYPE>} This Promise, for chaining additional calls.
         * @template THIS
         */
        thenAlways<THIS>(onSettled: () => void, opt_context?: THIS): goog.Promise<TYPE, any>;
        
        /**
         * Adds a callback that will be invoked only if the Promise is rejected. This
         * is equivalent to `then(null, onRejected)`.
         *
         * @param {function(this:THIS, *): *} onRejected A function that will be
         *     invoked with the rejection reason if this Promise is rejected.
         * @param {THIS=} opt_context An optional context object that will be the
         *     execution context for the callbacks. By default, functions are executed
         *     in the global scope.
         * @return {!goog.Promise} A new Promise that will resolve either to the
         *     value of this promise, or if this promise is rejected, the result of
         *     `onRejected`. The returned Promise will reject if `onRejected` throws.
         * @template THIS
         */
        thenCatch<THIS>(onRejected: (arg0: any) => any, opt_context?: THIS): goog.Promise<any, any>;
        
        /**
         * Cancels the Promise if it is still pending by rejecting it with a cancel
         * Error. No action is performed if the Promise is already resolved.
         *
         * All child Promises of the canceled Promise will be rejected with the same
         * cancel error, as with normal Promise rejection. If the Promise to be canceled
         * is the only child of a pending Promise, the parent Promise will also be
         * canceled. Cancellation may propagate upward through multiple generations.
         *
         * @param {string=} opt_message An optional debugging message for describing the
         *     cancellation reason.
         */
        cancel(opt_message?: string): void;
        
        /**
         * Sets a handler that will be called with reasons from unhandled rejected
         * Promises. If the rejected Promise (or one of its descendants) has an
         * `onRejected` callback registered, the rejection will be considered
         * handled, and the rejection handler will not be called.
         *
         * By default, unhandled rejections are rethrown so that the error may be
         * captured by the developer console or a `window.onerror` handler.
         *
         * @param {function(*)} handler A function that will be called with reasons from
         *     rejected Promises. Defaults to `goog.async.throwException`.
         */
        static setUnhandledRejectionHandler(handler: (arg0: any) => any): void;
    }
}

declare module goog.Promise {

    /**
     * The possible internal states for a Promise. These states are not directly
     * observable to external callers.
     * @enum {number}
     * @private
     */
    type State_ = number;
    var State_: {
        PENDING: State_;
        BLOCKED: State_;
        FULFILLED: State_;
        REJECTED: State_;
    };

    /**
     * Error used as a rejection reason for canceled Promises.
     *
     * @param {string=} opt_message
     * @constructor
     * @extends {goog.debug.Error}
     * @final
     */
    class CancellationError extends goog.debug.Error {
        constructor(opt_message?: string);
    }

    /**
     * Internal implementation of the resolver interface.
     *
     * @param {!goog.Promise<TYPE>} promise
     * @param {function((TYPE|goog.Promise<TYPE>|Thenable)=)} resolve
     * @param {function(*=): void} reject
     * @implements {goog.promise.Resolver<TYPE>}
     * @final @struct
     * @constructor
     * @private
     * @template TYPE
     */
    interface Resolver_<TYPE> {
    }
}
