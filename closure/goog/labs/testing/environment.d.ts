declare module goog {
    function require(name: 'goog.labs.testing.Environment'): typeof goog.labs.testing.Environment;
}

declare module goog.labs.testing {

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
