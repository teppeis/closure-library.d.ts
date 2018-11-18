declare module goog {
    function require(name: 'goog.testing.StrictMock'): typeof goog.testing.StrictMock;
}

declare module goog.testing {

    /**
     * This is a mock that verifies that methods are called in the order that they
     * are specified during the recording phase. Since it verifies order, it
     * follows 'fail fast' semantics. If it detects a deviation from the
     * expectations, it will throw an exception and not wait for verify to be
     * called.
     * @param {Object|Function} objectToMock The object that should be mocked, or
     *    the constructor of an object to mock.
     * @param {boolean=} opt_mockStaticMethods An optional argument denoting that
     *     a mock should be constructed from the static functions of a class.
     * @param {boolean=} opt_createProxy An optional argument denoting that
     *     a proxy for the target mock should be created.
     * @constructor
     * @extends {goog.testing.Mock}
     * @final
     */
    class StrictMock extends goog.testing.Mock {
        constructor(objectToMock: Object|Function, opt_mockStaticMethods?: boolean, opt_createProxy?: boolean);
    }
}
