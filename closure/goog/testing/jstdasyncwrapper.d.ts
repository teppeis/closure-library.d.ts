declare module goog {
    function require(name: 'goog.testing.JsTdAsyncWrapper'): typeof goog.testing.JsTdAsyncWrapper;
}

declare module goog.testing.JsTdAsyncWrapper {

    /**
     * A queue that mirrors the JSTD Async Queue api but exposes a promise that
     * resolves once the queue is complete for compatibility with JsUnit.
     * @param {!Object} testObj The test object containing all test methods. This
     *     object is passed into queue callbacks as the "this" object.
     * @constructor
     * @final
     */
    class Queue {
        constructor(testObj: Object);
        
        /**
         * @param {string|function(!goog.testing.JsTdAsyncWrapper.Pool_=)} stepName
         *     The name of the current testing step, or the fn parameter if
         *     no stepName is desired.
         * @param {function(!goog.testing.JsTdAsyncWrapper.Pool_=)=} opt_fn A function
         *   that will be called.
         */
        defer(stepName: string|((arg0?: goog.testing.JsTdAsyncWrapper.Pool_) => any), opt_fn?: (arg0?: goog.testing.JsTdAsyncWrapper.Pool_) => any): void;
        
        /**
         * Starts the execution.
         * @return {!goog.Promise<void>}
         */
        startExecuting(): goog.Promise<void, any>;
    }

    /**
     * A step to be executed.
     * @param {string} name
     * @param {function(!goog.testing.JsTdAsyncWrapper.Pool_=)} fn
     * @constructor
     * @private
     */
    interface Step_ {
    }

    /**
     * A fake pool that mimics the JSTD AsyncTestCase's pool object.
     * @param {!Object} testObj The test object containing all test methods. This
     *     object is passed into queue callbacks as the "this" object.
     * @param {function()} callback
     * @param {function(*)} errback
     * @constructor
     * @private
     * @final
     */
    interface Pool_ {
        
        /**
         * @return {function()}
         */
        noop(): () => any;
        
        /**
         * @param {function(...*):*} fn The function to add to the pool.
         * @param {?number=} opt_n The number of permitted uses of the given callback;
         *     defaults to one.
         * @param {?number=} opt_timeout The timeout in milliseconds.
         *     This is not supported in the adapter for now. Specifying this argument
         *     will result in a test failure.
         * @param {?string=} opt_description The callback description.
         * @return {function()}
         */
        addCallback(fn: (...arg0: any[]) => any, opt_n?: number, opt_timeout?: number, opt_description?: string): () => any;
        
        /**
         * @param {function(...*):*} fn The function to add to the pool.
         * @param {?number=} opt_n The number of permitted uses of the given callback;
         *     defaults to one.
         * @param {?number=} opt_timeout The timeout in milliseconds.
         *     This is not supported in the adapter for now. Specifying this argument
         *     will result in a test failure.
         * @param {?string=} opt_description The callback description.
         * @return {function()}
         */
        add(fn: (...arg0: any[]) => any, opt_n?: number, opt_timeout?: number, opt_description?: string): () => any;
        
        /**
         * @param {string} msg The message to print if the error callback gets called.
         * @return {function()}
         */
        addErrback(msg: string): () => any;
        
        /**
         * Completes the pool if there are no outstanding callbacks.
         */
        maybeComplete(): void;
    }

    /**
     * Wraps an object's methods by passing in a Queue that is based on the JSTD
     * async API. The queue exposes a promise that resolves when the queue
     * completes. This promise can be used in JsUnit tests.
     *
     * @template T
     * @param {T} original The original JSTD test object. The object should
     *     contain methods such as testXyz or setUp.
     * @return {T} A object that has all test methods wrapped in a fake
     *     testing queue.
     */
    function convertToAsyncTestObj<T>(original: T): T;
}
