declare module goog {
    function require(name: 'goog.testing.fs'): typeof goog.testing.fs;
}

declare module goog.testing.fs {

    /**
     * Get a filesystem object. Since these are mocks, there's no difference between
     * temporary and persistent filesystems.
     *
     * @param {number} size Ignored.
     * @return {!goog.async.Deferred} The deferred
     *     {@link goog.testing.fs.FileSystem}.
     */
    function getTemporary(size: number): goog.async.Deferred<any>;

    /**
     * Get a filesystem object. Since these are mocks, there's no difference between
     * temporary and persistent filesystems.
     *
     * @param {number} size Ignored.
     * @return {!goog.async.Deferred} The deferred
     *     {@link goog.testing.fs.FileSystem}.
     */
    function getPersistent(size: number): goog.async.Deferred<any>;

    /**
     * Create a fake object URL for a given fake blob. This can be used as a real
     * URL, and it can be created and revoked normally.
     *
     * @param {!goog.testing.fs.Blob} blob The blob for which to create the URL.
     * @return {string} The URL.
     */
    function createObjectUrl(blob: goog.testing.fs.Blob): string;

    /**
     * Remove a URL that was created for a fake blob.
     *
     * @param {string} url The URL to revoke.
     */
    function revokeObjectUrl(url: string): void;

    /**
     * Return whether or not a URL has been granted for the given blob.
     *
     * @param {!goog.testing.fs.Blob} blob The blob to check.
     * @return {boolean} Whether a URL has been granted.
     */
    function isObjectUrlGranted(blob: goog.testing.fs.Blob): boolean;

    /**
     * Concatenates one or more values together and converts them to a fake blob.
     *
     * @param {...(string|!goog.testing.fs.Blob)} var_args The values that will make
     *     up the resulting blob.
     * @return {!goog.testing.fs.Blob} The blob.
     */
    function getBlob(...var_args: (string|goog.testing.fs.Blob)[]): goog.testing.fs.Blob;

    /**
     * Creates a blob with the given properties.
     * See https://developer.mozilla.org/en-US/docs/Web/API/Blob for more details.
     *
     * @param {Array<string|!goog.testing.fs.Blob>} parts
     *     The values that will make up the resulting blob.
     * @param {string=} opt_type The MIME type of the Blob.
     * @param {string=} opt_endings Specifies how strings containing newlines are to
     *     be written out.
     * @return {!goog.testing.fs.Blob} The blob.
     */
    function getBlobWithProperties(parts: Array<string|goog.testing.fs.Blob>, opt_type?: string, opt_endings?: string): goog.testing.fs.Blob;

    /**
     * Returns the string value of a fake blob.
     *
     * @param {!goog.testing.fs.Blob} blob The blob to convert to a string.
     * @param {string=} opt_encoding Ignored.
     * @return {!goog.async.Deferred} The deferred string value of the blob.
     */
    function blobToString(blob: goog.testing.fs.Blob, opt_encoding?: string): goog.async.Deferred<any>;

    /**
     * Slices the blob. The returned blob contains data from the start byte
     * (inclusive) till the end byte (exclusive). Negative indices can be used
     * to count bytes from the end of the blob (-1 == blob.size - 1). Indices
     * are always clamped to blob range. If end is omitted, all the data till
     * the end of the blob is taken.
     *
     * @param {!goog.testing.fs.Blob} testBlob The blob to slice.
     * @param {number} start Index of the starting byte.
     * @param {number=} opt_end Index of the ending byte.
     * @return {goog.testing.fs.Blob} The new blob or null if not supported.
     */
    function sliceBlob(testBlob: goog.testing.fs.Blob, start: number, opt_end?: number): goog.testing.fs.Blob;

    /**
     * Installs goog.testing.fs in place of the standard goog.fs. After calling
     * this, code that uses goog.fs should work without issue using goog.testing.fs.
     *
     * @param {!goog.testing.PropertyReplacer} stubs The property replacer for
     *     stubbing out the original goog.fs functions.
     */
    function install(stubs: goog.testing.PropertyReplacer): void;
}
