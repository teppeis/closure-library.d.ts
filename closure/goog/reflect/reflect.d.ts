declare module goog {
    function require(name: 'goog.reflect'): typeof goog.reflect;
}

declare module goog.reflect {

    /**
     * Syntax for object literal casts.
     * @see http://go/jscompiler-renaming
     * @see https://goo.gl/CRs09P
     *
     * Use this if you have an object literal whose keys need to have the same names
     * as the properties of some class even after they are renamed by the compiler.
     *
     * @param {!Function} type Type to cast to.
     * @param {Object} object Object literal to cast.
     * @return {Object} The object literal.
     */
    function object(type: Function, object: Object): Object;

    /**
     * Syntax for renaming property strings.
     * @see http://go/jscompiler-renaming
     * @see https://goo.gl/CRs09P
     *
     * Use this if you have an need to access a property as a string, but want
     * to also have the property renamed by the compiler. In contrast to
     * goog.reflect.object, this method takes an instance of an object.
     *
     * Properties must be simple names (not qualified names).
     *
     * @param {string} prop Name of the property
     * @param {!Object} object Instance of the object whose type will be used
     *     for renaming
     * @return {string} The renamed property.
     */
    function objectProperty(prop: string, object: Object): string;

    /**
     * To assert to the compiler that an operation is needed when it would
     * otherwise be stripped. For example:
     * <code>
     *     // Force a layout
     *     goog.reflect.sinkValue(dialog.offsetHeight);
     * </code>
     * @param {T} x
     * @return {T}
     * @template T
     */
    function sinkValue<T>(x: T): T;

    /**
     * Check if a property can be accessed without throwing an exception.
     * @param {Object} obj The owner of the property.
     * @param {string} prop The property name.
     * @return {boolean} Whether the property is accessible. Will also return true
     *     if obj is null.
     */
    function canAccessProperty(obj: Object, prop: string): boolean;

    /**
     * Retrieves a value from a cache given a key. The compiler provides special
     * consideration for this call such that it is generally considered side-effect
     * free. However, if the `opt_keyFn` or `valueFn` have side-effects
     * then the entire call is considered to have side-effects.
     *
     * Conventionally storing the value on the cache would be considered a
     * side-effect and preclude unused calls from being pruned, ie. even if
     * the value was never used, it would still always be stored in the cache.
     *
     * Providing a side-effect free `valueFn` and `opt_keyFn`
     * allows unused calls to `goog.reflect.cache` to be pruned.
     *
     * @param {!Object<K, V>} cacheObj The object that contains the cached values.
     * @param {?} key The key to lookup in the cache. If it is not string or number
     *     then a `opt_keyFn` should be provided. The key is also used as the
     *     parameter to the `valueFn`.
     * @param {function(?):V} valueFn The value provider to use to calculate the
     *     value to store in the cache. This function should be side-effect free
     *     to take advantage of the optimization.
     * @param {function(?):K=} opt_keyFn The key provider to determine the cache
     *     map key. This should be used if the given key is not a string or number.
     *     If not provided then the given key is used. This function should be
     *     side-effect free to take advantage of the optimization.
     * @return {V} The cached or calculated value.
     * @template K
     * @template V
     */
    function cache<K>(cacheObj: {[index: string]: V}, key: any, valueFn: (arg0: any) => V, opt_keyFn?: (arg0: any) => K): V;
}
