declare module goog {
    function require(name: 'goog.testing.singleton'): typeof goog.testing.singleton;
}

declare module goog.testing.singleton {

    /**
     * @deprecated Please use `goog.addSingletonGetter`.
     */
    var addSingletonGetter: any;

    /**
     * Deletes all singleton instances, so `getInstance` will return a new
     * instance on next call.
     */
    function reset(): void;
}
