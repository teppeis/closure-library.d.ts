declare module goog {
    function require(name: 'goog.promise.testSuiteAdapter'): typeof goog.promise.testSuiteAdapter;
}

declare module goog.promise {

    /**
     * Adapter for specifying Promise-creating functions to the Promises test suite.
     * @type {!Object}
     */
    var testSuiteAdapter: Object;
}
