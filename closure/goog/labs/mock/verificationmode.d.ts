declare module goog {
    function require(name: 'goog.labs.mock.verification'): typeof goog.labs.mock.verification;
}

declare module goog.labs.mock.verification {

    /**
     * A mode which defines how mock invocations should be verified.
     * When an instance of `VerificationMode` is passed to
     * `goog.labs.mock.verify`, then that instances's `#verify`
     * method will be used to verify the invocation.
     *
     * If `#verify` returns false, then the test will fail and the
     * description returned from `#describe` will be shown in the
     * test failure message.  Sample usage:
     *
     * goog.module('my.package.MyClassTest');
     * goog.setTestOnly('my.package.MyClassTest');
     *
     * var testSuite = goog.require('goog.testing.testSuite');
     * var verification = goog.require('goog.labs.mock.verification');
     *
     * var times = verification.times;
     *
     * testSuite({
     *   setUp: function() {
     *     // Code creating instances of MyClass and mockObj.
     *   },
     *
     *   testMyMethod_shouldDoSomething: function() {
     *     myClassInstance.myMethod();
     *
     *     goog.labs.mock.verify(mockObj, times(1));
     *   }
     * });
     *
     * For an example implementation, see `TimesVerificationMode_`.
     *
     * @interface
     */
    interface VerificationMode {
        
        /**
         * Returns true if the recorded number of invocations,
         * `actualNumberOfInvocations`, meets the expectations of this mode.
         *
         * TODO(user): Have this take in an object which contains the complete
         * call record in order to allow more interesting verifications.
         *
         * @param {number} actualNumberOfInvocations
         * @return {boolean}
         */
        verify(actualNumberOfInvocations: number): boolean;
        
        /**
         * Returns a description of what this VerificationMode expected.
         *
         * @return {string}
         */
        describe(): string;
    }

    /**
     * Returns a `VerificationMode` which verifies a method was called
     * exactly `expectedNumberOfInvocations` times.
     *
     * @param {number} expectedNumberOfInvocations
     * @return {!goog.labs.mock.verification.VerificationMode}
     */
    function times(expectedNumberOfInvocations: number): goog.labs.mock.verification.VerificationMode;

    /**
     * Returns a `VerificationMode` which verifies a method was called at
     * least `minimumNumberOfInvocations` times.
     *
     * @param {number} minimumNumberOfInvocations
     * @return {!goog.labs.mock.verification.VerificationMode}
     */
    function atLeast(minimumNumberOfInvocations: number): goog.labs.mock.verification.VerificationMode;

    /**
     * Returns a `VerificationMode` which verifies a method was called at
     * most `maxNumberOfInvocations` times.
     *
     * @param {number} maxNumberOfInvocations
     * @return {!goog.labs.mock.verification.VerificationMode}
     */
    function atMost(maxNumberOfInvocations: number): goog.labs.mock.verification.VerificationMode;

    /**
     * Returns a `VerificationMode` which verifies a method was never
     * called. An alias for `VerificatonMode.times(0)`.
     *
     * @return {!goog.labs.mock.verification.VerificationMode}
     */
    function never(): goog.labs.mock.verification.VerificationMode;
}
