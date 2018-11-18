declare module goog {
    function require(name: 'goog.labs.storage.BoundedCollectableStorage'): typeof goog.labs.storage.BoundedCollectableStorage;
}

declare module goog.labs.storage {

    /**
     * Provides a storage with bounded number of elements, expiring keys and
     * a collection method.
     *
     * @param {!goog.storage.mechanism.IterableMechanism} mechanism The underlying
     *     storage mechanism.
     * @param {number} maxItems Maximum number of items in storage.
     * @constructor
     * @struct
     * @extends {goog.storage.CollectableStorage}
     * @final
     */
    class BoundedCollectableStorage extends goog.storage.CollectableStorage {
        constructor(mechanism: goog.storage.mechanism.IterableMechanism, maxItems: number);
        
        /**
         * Cleans up the storage by removing expired keys.
         *
         * @param {boolean=} opt_strict Also remove invalid keys.
         * @override
         */
        collect(opt_strict?: boolean): void;
        
        /**
         * Ensures that we keep only maxItems number of items in a local storage.
         * @param {boolean=} opt_skipExpired skip removing expired items first.
         * @param {boolean=} opt_strict Also remove invalid keys.
         */
        collectOversize(opt_skipExpired?: boolean, opt_strict?: boolean): void;
        
        /**
         * Set an item in the storage.
         *
         * @param {string} key The key to set.
         * @param {*} value The value to serialize to a string and save.
         * @param {number=} opt_expiration The number of miliseconds since epoch
         *     (as in goog.now()) when the value is to expire. If the expiration
         *     time is not provided, the value will persist as long as possible.
         * @override
         */
        set(key: string, value: any, opt_expiration?: number): void;
        
        /**
         * Remove an item from the data storage.
         *
         * @param {string} key The key to remove.
         * @override
         */
        remove(key: string): void;
    }
}
