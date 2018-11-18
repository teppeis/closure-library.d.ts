declare module goog {
    function require(name: 'goog.testing.MockRange'): typeof goog.testing.MockRange;
}

declare module goog.testing {

    /**
     * LooseMock of goog.dom.AbstractRange. Useful because the mock framework cannot
     * simply create a mock out of an abstract class, and cannot create a mock out
     * of classes that implements __iterator__ because it relies on the default
     * behavior of iterating through all of an object's properties.
     * @constructor
     * @extends {goog.testing.LooseMock}
     * @final
     */
    class MockRange extends goog.testing.LooseMock {
        constructor();
    }
}

declare module goog.testing.MockRange {

    /**
     * Concrete subclass of goog.dom.AbstractRange that simply sets the abstract
     * method __iterator__ to undefined so that javascript defaults to iterating
     * through all of the object's properties.
     * @constructor
     * @extends {goog.dom.AbstractRange}
     * @private
     */
    interface ConcreteRange_ extends goog.dom.AbstractRange {
    }
}
