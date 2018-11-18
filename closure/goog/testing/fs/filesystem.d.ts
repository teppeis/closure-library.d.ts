declare module goog {
    function require(name: 'goog.testing.fs.FileSystem'): typeof goog.testing.fs.FileSystem;
}

declare module goog.testing.fs {

    /**
     * A mock filesystem object.
     *
     * @param {string=} opt_name The name of the filesystem.
     * @constructor
     * @implements {goog.fs.FileSystem}
     * @final
     */
    class FileSystem {
        constructor(opt_name?: string);
        
        /**
         * @override
         * @return {!goog.testing.fs.DirectoryEntry}
         */
        getRoot(): goog.testing.fs.DirectoryEntry;
    }
}
