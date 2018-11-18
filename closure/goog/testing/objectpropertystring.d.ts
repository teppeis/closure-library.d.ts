declare module goog {
    function require(name: 'goog.testing.ObjectPropertyString'): typeof goog.testing.ObjectPropertyString;
}

declare module goog.testing {

    /**
     * Object to pass a property name as a string literal and its containing object
     * when the JSCompiler is rewriting these names. This should only be used in
     * test code.
     *
     * @param {Object} object The containing object.
     * @param {Object|string} propertyString Property name as a string literal.
     * @constructor
     * @final
     */
    class ObjectPropertyString {
        constructor(object: Object, propertyString: Object|string);
        
        /**
         * @return {Object} The object.
         */
        getObject(): Object;
        
        /**
         * @return {string} The property string.
         */
        getPropertyString(): string;
    }
}
