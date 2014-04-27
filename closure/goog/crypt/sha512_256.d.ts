declare module goog.crypt {

    /**
     * Constructs a SHA-512/256 cryptographic hash.
     *
     * @constructor
     * @extends {goog.crypt.Sha2_64bit}
     * @final
     * @struct
     */
    export class Sha512_256 extends goog.crypt.Sha2_64bit {
        constructor();
    }
}
