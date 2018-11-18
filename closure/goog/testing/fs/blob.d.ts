declare module goog {
    function require(name: 'goog.testing.fs.Blob'): typeof goog.testing.fs.Blob;
}

declare module goog.testing.fs {

    /**
     * A mock Blob object. The data is stored as an Array of bytes, a "byte" being a
     * JS number in the range 0-255.
     *
     * This blob simplifies writing test code because it has the toString() method
     * that returns immediately, while the File API only provides asynchronous
     * reads.
     * @see https://www.w3.org/TR/FileAPI/#constructorBlob
     *
     * @param {(string|Array<(string|number|!Uint8Array)>)=} opt_data The data
     *     encapsulated by the blob.
     * @param {string=} opt_type The mime type of the blob.
     * @constructor
     */
    class Blob {
        constructor(opt_data?: string|Array<string|number|Uint8Array>, opt_type?: string);
        
        /**
         * Creates a blob with bytes of a blob ranging from the optional start
         * parameter up to but not including the optional end parameter, and with a type
         * attribute that is the value of the optional contentType parameter.
         * @see http://www.w3.org/TR/FileAPI/#dfn-slice
         * @param {number=} opt_start The start byte offset.
         * @param {number=} opt_end The end point of a slice.
         * @param {string=} opt_contentType The type of the resulting Blob.
         * @return {!goog.testing.fs.Blob} The result blob of the slice operation.
         */
        slice(opt_start?: number, opt_end?: number, opt_contentType?: string): goog.testing.fs.Blob;
        
        /**
         * @return {string} The data encapsulated by the blob as an UTF-8 string.
         * @override
         */
        toString(): string;
        
        /**
         * @return {!ArrayBuffer} The data encapsulated by the blob as an
         *     ArrayBuffer.
         */
        toArrayBuffer(): ArrayBuffer;
        
        /**
         * @return {string} The string data encapsulated by the blob as a data: URI.
         */
        toDataUrl(): string;
        
        /**
         * Sets the internal contents of the blob to an Array of bytes. This should
         *     only be called by other functions inside the `goog.testing.fs`
         *     namespace.
         * @param {string|Array<string|number|!Uint8Array>} data The data to write
         *     into the blob.
         * @package
         */
        setDataInternal(data: string|Array<string|number|Uint8Array>): void;
    }
}
