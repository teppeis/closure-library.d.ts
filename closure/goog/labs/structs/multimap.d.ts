declare module goog {
    function require(name: 'goog.labs.structs.Multimap'): typeof goog.labs.structs.Multimap;
}

declare module goog.labs.structs {

    /**
     * Creates a new multimap.
     * @constructor
     * @struct
     * @final
     * @template K, V
     */
    class Multimap<K, V> {
        constructor();
        
        /**
         * Clears the multimap.
         */
        clear(): void;
        
        /**
         * Clones this multimap.
         * @return {!goog.labs.structs.Multimap<K, V>} A multimap that contains all
         *     the mapping this multimap has.
         */
        clone(): goog.labs.structs.Multimap<K, V>;
        
        /**
         * Adds the given (key, value) pair to the map. The (key, value) pair
         * is guaranteed to be added.
         * @param {K} key The key to add.
         * @param {V} value The value to add.
         */
        add(key: K, value: V): void;
        
        /**
         * Stores a collection of values to the given key. Does not replace
         * existing (key, value) pairs.
         * @param {K} key The key to add.
         * @param {!Array<V>} values The values to add.
         */
        addAllValues(key: K, values: Array<V>): void;
        
        /**
         * Adds the contents of the given map/multimap to this multimap.
         * @param {!goog.labs.structs.Multimap<K, V>} map The
         *     map to add.
         */
        addAllFromMultimap(map: goog.labs.structs.Multimap<K, V>): void;
        
        /**
         * Replaces all the values for the given key with the given values.
         * @param {K} key The key whose values are to be replaced.
         * @param {!Array<V>} values The new values. If empty, this is
         *     equivalent to `removeAll(key)`.
         */
        replaceValues(key: K, values: Array<V>): void;
        
        /**
         * Gets the values correspond to the given key.
         * @param {K} key The key to retrieve.
         * @return {!Array<V>} An array of values corresponding to the given
         *     key. May be empty. Note that the ordering of values are not
         *     guaranteed to be consistent.
         */
        get(key: K): Array<V>;
        
        /**
         * Removes a single occurrence of (key, value) pair.
         * @param {K} key The key to remove.
         * @param {V} value The value to remove.
         * @return {boolean} Whether any matching (key, value) pair is removed.
         */
        remove(key: K, value: V): boolean;
        
        /**
         * Removes all values corresponding to the given key.
         * @param {K} key The key whose values are to be removed.
         * @return {boolean} Whether any value is removed.
         */
        removeAll(key: K): boolean;
        
        /**
         * @return {boolean} Whether the multimap is empty.
         */
        isEmpty(): boolean;
        
        /**
         * @return {number} The count of (key, value) pairs in the map.
         */
        getCount(): number;
        
        /**
         * @param {K} key The key to check.
         * @param {V} value The value to check.
         * @return {boolean} Whether the (key, value) pair exists in the multimap.
         */
        containsEntry(key: K, value: V): boolean;
        
        /**
         * @param {K} key The key to check.
         * @return {boolean} Whether the multimap contains at least one (key,
         *     value) pair with the given key.
         */
        containsKey(key: K): boolean;
        
        /**
         * @param {V} value The value to check.
         * @return {boolean} Whether the multimap contains at least one (key,
         *     value) pair with the given value.
         */
        containsValue(value: V): boolean;
        
        /**
         * @return {!Array<K>} An array of unique keys.
         */
        getKeys(): Array<K>;
        
        /**
         * @return {!Array<V>} An array of values. There may be duplicates.
         */
        getValues(): Array<V>;
        
        /**
         * @return {!Array<!Array<K|V>>} An array of entries. Each entry is of the
         *     form [key, value].
         */
        getEntries(): Array<Array<K|V>>;
    }
}
