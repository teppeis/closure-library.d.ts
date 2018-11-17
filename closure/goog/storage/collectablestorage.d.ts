declare module goog {
    function require(name: 'goog.storage.CollectableStorage'): typeof goog.storage.CollectableStorage;
}

declare module goog.storage {

    /**
     * Provides a storage with expiring keys and a collection method.
     *
     * @param {!goog.storage.mechanism.IterableMechanism} mechanism The underlying
     *     storage mechanism.
     * @constructor
     * @struct
     * @extends {goog.storage.ExpiringStorage}
     */
    class CollectableStorage extends goog.storage.ExpiringStorage {
        constructor(mechanism: goog.storage.mechanism.IterableMechanism);
        
        /**
         * Cleans up the storage by removing expired keys.
         *
         * @param {goog.iter.Iterable} keys List of all keys.
         * @param {boolean=} opt_strict Also remove invalid keys.
         * @return {!Array<string>} a list of expired keys.
         * @protected
         */
        collectInternal(keys: goog.iter.Iterable, opt_strict?: boolean): Array<string>;
        
        /**
         * Cleans up the storage by removing expired keys.
         *
         * @param {boolean=} opt_strict Also remove invalid keys.
         */
        collect(opt_strict?: boolean): void;
    }
}
