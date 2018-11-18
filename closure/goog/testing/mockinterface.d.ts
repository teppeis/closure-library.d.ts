declare module goog.testing {

    /** @interface */
    interface MockInterface {
        
        /**
         * Write down all the expected functions that have been called on the
         * mock so far. From here on out, future function calls will be
         * compared against this list.
         */
        $replay(): void;
        
        /**
         * Reset the mock.
         */
        $reset(): void;
        
        /**
         * Waits for the Mock to gather expectations and then performs verify.
         * @return {!goog.Promise<undefined>}
         */
        $waitAndVerify(): goog.Promise<void, any>;
        
        /**
         * Assert that the expected function calls match the actual calls.
         */
        $verify(): void;
    }
}
