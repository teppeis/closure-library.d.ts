declare module goog.crypt.hash32 {

    /**
     * Default seed used during hashing, digits of pie.
     * See SEED32 in http://go/base.hash.java
     * @type {number}
     */
    export var SEED32: number;

    /**
     * Arbitrary constant used during hashing.
     * See CONSTANT32 in http://go/base.hash.java
     * @type {number}
     */
    export var CONSTANT32: number;

    /**
     * Hashes a string to a 32-bit value.
     * @param {string} str String to hash.
     * @return {number} 32-bit hash.
     */
    export function encodeString(str: string): number;

    /**
     * Hashes a string to a 32-bit value, converting the string to UTF-8 before
     * doing the encoding.
     * @param {string} str String to hash.
     * @return {number} 32-bit hash.
     */
    export function encodeStringUtf8(str: string): number;

    /**
     * Hashes an integer to a 32-bit value.
     * @param {number} value Number to hash.
     * @return {number} 32-bit hash.
     */
    export function encodeInteger(value: number): number;

    /**
     * Hashes a "byte" array to a 32-bit value using the supplied seed.
     * @param {Array.<number>} bytes Array of bytes.
     * @param {number=} opt_offset The starting position to use for hash
     * computation.
     * @param {number=} opt_length Number of bytes that are used for hashing.
     * @param {number=} opt_seed The seed.
     * @return {number} 32-bit hash.
     */
    export function encodeByteArray(bytes: Array<number>, opt_offset?: number, opt_length?: number, opt_seed?: number): number;
}
