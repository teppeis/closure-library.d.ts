declare module goog {
    function require(name: 'goog.labs.testing.JsonFuzzing'): typeof goog.labs.testing.JsonFuzzing;
}

declare module goog.labs.testing {

    /**
     * The JSON fuzzing generator.
     *
     * @param {!goog.labs.testing.JsonFuzzing.Options=} opt_options Configuration
     *     for the fuzzing json generator.
     * @param {number=} opt_seed The seed for the random generator.
     * @constructor
     * @struct
     */
    class JsonFuzzing {
        constructor(opt_options?: goog.labs.testing.JsonFuzzing.Options, opt_seed?: number);
        
        /**
         * Gets a fuzzily-generated JSON object (an array).
         *
         * TODO(user): whitespaces
         *
         * @return {!Array} A new JSON compliant array object.
         */
        newArray(): Array<any>;
        
        /**
         * Gets a new integer.
         *
         * @param {number} min Inclusive
         * @param {number} max Exclusive
         * @return {number} A random integer
         */
        nextInt(min: number, max: number): number;
    }
}

declare module goog.labs.testing.JsonFuzzing {

    /**
     * Enum type for the field type (of a message).
     * @enum {number}
     * @private
     */
    type FieldType_ = number;
    var FieldType_: {
        MESSAGE: FieldType_;
        ARRAY: FieldType_;
        STRING: FieldType_;
        NUMBER: FieldType_;
        BOOLEAN: FieldType_;
        NULL: FieldType_;
    };

    /**
     * Configuration spec.
     *
     * jsonSize: default to [1, 10) for the entire JSON object (array)
     * numFields: default to [0, 5)
     * arraySize: default to [0, 5) for the length of nested arrays
     * maxDepth: default to 5
     *
     * @typedef {{
     *   jsonSize: number,
     *   numFields: number,
     *   arraySize: number,
     *   maxDepth: number
     * }}
     */
    type Options = {jsonSize: number; numFields: number; arraySize: number; maxDepth: number};
}
