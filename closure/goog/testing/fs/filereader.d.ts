declare module goog {
    function require(name: 'goog.testing.fs.FileReader'): typeof goog.testing.fs.FileReader;
}

declare module goog.testing.fs {

    /**
     * A mock FileReader object. This emits the same events as
     * {@link goog.fs.FileReader}.
     *
     * @constructor
     * @extends {goog.events.EventTarget}
     */
    class FileReader extends goog.events.EventTarget {
        constructor();
        
        /**
         * @see {goog.fs.FileReader#getReadyState}
         * @return {goog.fs.FileReader.ReadyState} The current ready state.
         */
        getReadyState(): goog.fs.FileReader.ReadyState;
        
        /**
         * @see {goog.fs.FileReader#getError}
         * @return {goog.fs.Error} The current error.
         */
        getError(): goog.fs.Error;
        
        /**
         * @see {goog.fs.FileReader#abort}
         */
        abort(): void;
        
        /**
         * @see {goog.fs.FileReader#getResult}
         * @return {*} The result of the file read.
         */
        getResult(): any;
        
        /**
         * @see {goog.fs.FileReader#readAsBinaryString}
         * @param {!goog.testing.fs.Blob} blob The blob to read.
         */
        readAsBinaryString(blob: goog.testing.fs.Blob): void;
        
        /**
         * @see {goog.fs.FileReader#readAsArrayBuffer}
         * @param {!goog.testing.fs.Blob} blob The blob to read.
         */
        readAsArrayBuffer(blob: goog.testing.fs.Blob): void;
        
        /**
         * @see {goog.fs.FileReader#readAsText}
         * @param {!goog.testing.fs.Blob} blob The blob to read.
         * @param {string=} opt_encoding The name of the encoding to use.
         */
        readAsText(blob: goog.testing.fs.Blob, opt_encoding?: string): void;
        
        /**
         * @see {goog.fs.FileReader#readAsDataUrl}
         * @param {!goog.testing.fs.Blob} blob The blob to read.
         */
        readAsDataUrl(blob: goog.testing.fs.Blob): void;
    }
}

declare module goog.testing.fs.FileReader {

    /**
     * The possible return types.
     * @enum {number}
     */
    type ReturnType = number;
    var ReturnType: {
        TEXT: ReturnType;
        BINARY_STRING: ReturnType;
        ARRAY_BUFFER: ReturnType;
        DATA_URL: ReturnType;
    };
}
