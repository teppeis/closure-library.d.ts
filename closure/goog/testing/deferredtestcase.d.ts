declare module goog {
    function require(name: 'goog.testing.DeferredTestCase'): typeof goog.testing.DeferredTestCase;
}

declare module goog.testing {

    /**
     * A test case that can asynchronously wait on a Deferred object.
     * @param {string=} opt_name A descriptive name for the test case.
     * @constructor
     * @extends {goog.testing.AsyncTestCase}
     * @deprecated Use goog.testing.TestCase instead. goog.testing.TestCase now
     *    supports async testing using promises.
     */
    class DeferredTestCase extends goog.testing.AsyncTestCase {
        constructor(opt_name?: string);
        
        /**
         * Preferred way of creating a DeferredTestCase. Creates one and initializes it
         * with the G_testRunner.
         * @param {string=} opt_name A descriptive name for the test case.
         * @return {!goog.testing.DeferredTestCase} The created DeferredTestCase.
         */
        static createAndInstall(opt_name?: string): goog.testing.DeferredTestCase;
        
        /**
         * Handler for when the test produces an error.
         * @param {Error|string} err The error object.
         * @protected
         * @throws Always throws a ControlBreakingException.
         */
        onError(err: Error|string): void;
        
        /**
         * Handler for when the test succeeds.
         * @protected
         */
        onSuccess(): void;
        
        /**
         * Adds a callback to update the wait message of this async test case. Using
         * this method generously also helps to document the test flow.
         * @param {string} msg The update wait status message.
         * @param {goog.async.Deferred} d The deferred object to add the waitForAsync
         *     callback to.
         * @see goog.testing.AsyncTestCase#waitForAsync
         */
        addWaitForAsync(msg: string, d: goog.async.Deferred<any>): void;
        
        /**
         * Wires up given Deferred object to the test case, then starts the
         * goog.async.Deferred object's callback.
         * @param {string|!goog.async.Deferred} a The wait status message or the
         *     deferred object to wait for.
         * @param {goog.async.Deferred=} opt_b The deferred object to wait for.
         */
        waitForDeferred(a: string|goog.async.Deferred<any>, opt_b?: goog.async.Deferred<any>): void;
    }
}
