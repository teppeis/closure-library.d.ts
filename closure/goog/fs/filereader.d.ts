declare module goog.fs {

    /**
     * An object for monitoring the reading of files. This emits ProgressEvents of
     * the types listed in {@link goog.fs.FileReader.EventType}.
     *
     * @constructor
     * @extends {goog.events.EventTarget}
     * @final
     */
    export class FileReader extends goog.events.EventTarget {
        constructor();
        
        /**
         * Abort the reading of the file.
         */
        abort(): void;
        
        /**
         * @return {goog.fs.FileReader.ReadyState} The current state of the FileReader.
         */
        getReadyState(): goog.fs.FileReader.ReadyState;
        
        /**
         * @return {*} The result of the file read.
         */
        getResult(): any;
        
        /**
         * @return {goog.fs.Error} The error encountered while reading, if any.
         */
        getError(): goog.fs.Error;
        
        /**
         * Starts reading a blob as a binary string.
         * @param {!Blob} blob The blob to read.
         */
        readAsBinaryString(blob: Blob): void;
        
        /**
         * Reads a blob as a binary string.
         * @param {!Blob} blob The blob to read.
         * @return {!goog.async.Deferred} The deferred Blob contents as a binary string.
         *     If an error occurs, the errback is called with a {@link goog.fs.Error}.
         */
        static readAsBinaryString(blob: Blob): goog.async.Deferred<any>;
        
        /**
         * Starts reading a blob as an array buffer.
         * @param {!Blob} blob The blob to read.
         */
        readAsArrayBuffer(blob: Blob): void;
        
        /**
         * Reads a blob as an array buffer.
         * @param {!Blob} blob The blob to read.
         * @return {!goog.async.Deferred} The deferred Blob contents as an array buffer.
         *     If an error occurs, the errback is called with a {@link goog.fs.Error}.
         */
        static readAsArrayBuffer(blob: Blob): goog.async.Deferred<any>;
        
        /**
         * Starts reading a blob as text.
         * @param {!Blob} blob The blob to read.
         * @param {string=} opt_encoding The name of the encoding to use.
         */
        readAsText(blob: Blob, opt_encoding?: string): void;
        
        /**
         * Reads a blob as text.
         * @param {!Blob} blob The blob to read.
         * @param {string=} opt_encoding The name of the encoding to use.
         * @return {!goog.async.Deferred} The deferred Blob contents as text.
         *     If an error occurs, the errback is called with a {@link goog.fs.Error}.
         */
        static readAsText(blob: Blob, opt_encoding?: string): goog.async.Deferred<any>;
        
        /**
         * Starts reading a blob as a data URL.
         * @param {!Blob} blob The blob to read.
         */
        readAsDataUrl(blob: Blob): void;
        
        /**
         * Reads a blob as a data URL.
         * @param {!Blob} blob The blob to read.
         * @return {!goog.async.Deferred} The deferred Blob contents as a data URL.
         *     If an error occurs, the errback is called with a {@link goog.fs.Error}.
         */
        static readAsDataUrl(blob: Blob): goog.async.Deferred<any>;
    }
}

declare module goog.fs.FileReader {

    /**
     * Possible states for a FileReader.
     *
     * @enum {number}
     */
    export interface ReadyState {
        INIT: number;
        LOADING: number;
        DONE: number;
    }

    /**
     * Events emitted by a FileReader.
     *
     * @enum {string}
     */
    export interface EventType {
        LOAD_START: string;
        PROGRESS: string;
        LOAD: string;
        ABORT: string;
        ERROR: string;
        LOAD_END: string;
    }
}
