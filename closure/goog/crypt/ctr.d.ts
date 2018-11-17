declare module goog {
    function require(name: 'goog.crypt.Ctr'): typeof goog.crypt.Ctr;
}

declare module goog.crypt {

    /**
     * Implementation of Ctr mode for block ciphers.  See
     * http://en.wikipedia.org/wiki/Block_cipher_modes_of_operation
     * #Cipher-block_chaining_.28Ctr.29. for an overview, and
     * http://csrc.nist.gov/publications/nistpubs/800-38a/sp800-38a.pdf
     * for the spec.
     *
     * @param {!goog.crypt.BlockCipher} cipher The block cipher to use.
     * @constructor
     * @final
     * @struct
     */
    class Ctr {
        constructor(cipher: goog.crypt.BlockCipher);
        
        /**
         * Encrypts a message.
         *
         * @param {!Array<number>|!Uint8Array} plainText Message to encrypt. An array of
         *     bytes. The length does not have to be a multiple of the blocksize.
         * @param {!Array<number>|!Uint8Array} initialVector Initial vector for the Ctr
         *     mode. An array of bytes with the same length as the block size, that
         *     should be not reused when using the same key.
         * @return {!Array<number>} Encrypted message.
         */
        encrypt(plainText: Array<number>|Uint8Array, initialVector: Array<number>|Uint8Array): Array<number>;
        
        /**
         * Decrypts a message. In CTR, this is the same as encrypting.
         *
         * @param {!Array<number>|!Uint8Array} cipherText Message to decrypt. The length
         *     does not have to be a multiple of the blocksize.
         * @param {!Array<number>|!Uint8Array} initialVector Initial vector for the Ctr
         *     mode. An array of bytes with the same length as the block size.
         * @return {!Array<number>} Decrypted message.
         */
        decrypt(cipherText: Array<number>|Uint8Array, initialVector: Array<number>|Uint8Array): Array<number>;
    }
}
