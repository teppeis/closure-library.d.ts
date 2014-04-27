declare module goog.crypt {

    /**
     * Constructs a SHA-2 64-bit cryptographic hash.
     * This constructor should not be used directly to create the object. Rather,
     * one should use the constructor of one of its subclasses.
     * @constructor
     * @param {number} numHashBlocks The size of the output in 16-byte blocks
     * @param {!Array.<number>} initHashBlocks The hash-specific initialization
     *     vector, as a sequence of 32-bit numbers.
     * @extends {goog.crypt.Hash}
     * @struct
     */
    export class Sha2_64bit extends goog.crypt.Hash {
        constructor(numHashBlocks: number, initHashBlocks: Array<number>);
        
        /**
         * Resets this hash function.
         */
        reset(): void;
    }
}
