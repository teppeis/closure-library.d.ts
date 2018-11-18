declare module goog {
    function require(name: 'goog.testing.storage.FakeMechanism'): typeof goog.testing.storage.FakeMechanism;
}

declare module goog.testing.storage {

    /**
     * Creates a fake iterable mechanism.
     *
     * @constructor
     * @extends {goog.storage.mechanism.IterableMechanism}
     * @final
     */
    class FakeMechanism extends goog.storage.mechanism.IterableMechanism {
        constructor();
    }
}
