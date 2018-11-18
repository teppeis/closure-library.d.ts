declare module goog {
    function require(name: 'goog.labs.testing.Environment'): typeof goog.labs.testing.Environment;
}

declare module goog.labs.testing {

    /**
     * An internal TestCase used to hook environments into the JsUnit test runner.
     * Environments cannot be used in conjunction with custom TestCases for JsUnit.
     * @private @final @constructor
     * @extends {goog.testing.TestCase}
     */
    interface EnvironmentTestCase_ extends goog.testing.TestCase {
    }

    /**
     * An internal Test used to hook environments into the JsUnit test runner.
     * @param {string} name The test name.
     * @param {function()} ref Reference to the test function or test object.
     * @param {?Object=} scope Optional scope that the test function should be
     *     called in.
     * @param {!Array<!Object>=} objChain A chain of objects used to populate setUps
     *     and tearDowns.
     * @private
     * @final
     * @constructor
     * @extends {goog.testing.TestCase.Test}
     */
    interface EnvironmentTest_ extends goog.testing.TestCase.Test {
    }

    /**
     * JsUnit environments allow developers to customize the existing testing
     * lifecycle by hitching additional setUp and tearDown behaviors to tests.
     *
     * Environments will run their setUp steps in the order in which they
     * are instantiated and registered. During tearDown, the environments will
     * unwind the setUp and execute in reverse order.
     *
     * See http://go/jsunit-env for more information.
     */
    var Environment: any;
}

declare module goog.labs.testing.Environment {

    /**
     * @return {?goog.testing.TestCase}
     */
    function getTestCaseIfActive(): goog.testing.TestCase;
}
