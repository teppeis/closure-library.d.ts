declare module goog.crypt {

    /**
     * Constructs a SHA-512 cryptographic hash.
     *
     * @constructor
     * @extends {goog.crypt.Sha2_64bit}
     * @final
     * @struct
     */
    export class Sha512 extends goog.crypt.Sha2_64bit {
        constructor();
    }
}
