declare module goog.crypt {

    /**
     * Constructs a SHA-384 cryptographic hash.
     *
     * @constructor
     * @extends {goog.crypt.Sha2_64bit}
     * @final
     * @struct
     */
    export class Sha384 extends goog.crypt.Sha2_64bit {
        constructor();
    }
}
