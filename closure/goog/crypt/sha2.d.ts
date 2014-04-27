declare module goog.crypt {

    /**
     * SHA-2 cryptographic hash constructor.
     * This constructor should not be used directly to create the object. Rather,
     * one should use the constructor of the sub-classes.
     * @constructor
     * @extends {goog.crypt.Hash}
     * @struct
     */
    export class Sha2 extends goog.crypt.Hash {
        constructor();
    }
}
