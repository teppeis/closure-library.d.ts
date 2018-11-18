declare module goog {
    function require(name: 'goog.testing.fs.File'): typeof goog.testing.fs.File;
}

declare module goog.testing.fs {

    /**
     * A mock file object.
     *
     * @param {string} name The name of the file.
     * @param {Date=} opt_lastModified The last modified date for this file. May be
     *     null if file modification dates are not supported.
     * @param {string=} opt_data The string data encapsulated by the blob.
     * @param {string=} opt_type The mime type of the blob.
     * @constructor
     * @extends {goog.testing.fs.Blob}
     * @final
     */
    class File extends goog.testing.fs.Blob {
        constructor(name: string, opt_lastModified?: Date, opt_data?: string, opt_type?: string);
    }
}
