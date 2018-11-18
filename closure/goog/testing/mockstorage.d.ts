declare module goog {
    function require(name: 'goog.testing.MockStorage'): typeof goog.testing.MockStorage;
}

declare module goog.testing {

    /**
     * A JS storage instance, implementing the HTML5 Storage interface.
     * See http://www.w3.org/TR/webstorage/ for details.
     *
     * @constructor
     * @implements {Storage}
     * @final
     */
    class MockStorage {
        constructor();
        
        /**
         * Sets an item to the storage.
         * @param {string} key Storage key.
         * @param {*} value Storage value. Must be convertible to string.
         * @override
         */
        setItem(key: string, value: any): void;
        
        /**
         * Gets an item from the storage.  The item returned is the "structured clone"
         * of the value from setItem.  In practice this means it's the value cast to a
         * string.
         * @param {string} key Storage key.
         * @return {?string} Storage value for key; null if does not exist.
         * @override
         */
        getItem(key: string): string;
        
        /**
         * Removes and item from the storage.
         * @param {string} key Storage key.
         * @override
         */
        removeItem(key: string): void;
        
        /**
         * Returns the key at the given index.
         * @param {number} index The index for the key.
         * @return {?string} Key at the given index, null if not found.
         * @override
         */
        key(index: number): string;
    }
}
