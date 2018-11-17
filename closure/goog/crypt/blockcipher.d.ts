declare module goog.crypt {

    /**
     * Interface definition for a block cipher.
     * @interface
     */
    interface BlockCipher {
        
        /**
         * Block size, in bytes.
         * @type {number}
         * @const
         * @public
         */
        BLOCK_SIZE: number;
        
        /**
         * Encrypt a plaintext block.  The implementation may expect (and assert)
         * a particular block length.
         * @param {!Array<number>|!Uint8Array} input Plaintext array of input bytes.
         * @return {!Array<number>} Encrypted ciphertext array of bytes.  Should be the
         *     same length as input.
         */
        encrypt(input: Array<number>|Uint8Array): Array<number>;
        
        /**
         * Decrypt a plaintext block.  The implementation may expect (and assert)
         * a particular block length.
         * @param {!Array<number>|!Uint8Array} input Ciphertext. Array of input bytes.
         * @return {!Array<number>} Decrypted plaintext array of bytes.  Should be the
         *     same length as input.
         */
        decrypt(input: Array<number>|Uint8Array): Array<number>;
    }
}
