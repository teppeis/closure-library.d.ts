declare module goog.vec {

    /**
     * Constructs a new Float32Array. The new array is initialized to all zeros.
     *
     * @param {goog.vec.Float32Array|Array|ArrayBuffer|number} p0
     *     The length of the array, or an array to initialize the contents of the
     *     new Float32Array.
     * @constructor
     * @final
     */
    class Float32Array {
        constructor(p0: goog.vec.Float32Array|Array<any>|ArrayBuffer|number);
        
        /**
         * The number of bytes in an element (as defined by the Typed Array
         * specification).
         *
         * @type {number}
         */
        static BYTES_PER_ELEMENT: number;
        
        /**
         * The number of bytes in an element (as defined by the Typed Array
         * specification).
         *
         * @type {number}
         */
        BYTES_PER_ELEMENT: number;
        
        /**
         * Sets elements of the array.
         * @param {Array<number>|Float32Array} values The array of values.
         * @param {number=} opt_offset The offset in this array to start.
         */
        set(values: Array<number>|Float32Array, opt_offset?: number): void;
        
        /**
         * Creates a string representation of this array.
         * @return {string} The string version of this array.
         * @override
         */
        toString(): string;
    }
}
