declare module goog {
    function require(name: 'goog.testing.fs.ProgressEvent'): typeof goog.testing.fs.ProgressEvent;
}

declare module goog.testing.fs {

    /**
     * A mock progress event.
     *
     * @param {!goog.fs.FileSaver.EventType|!goog.fs.FileReader.EventType} type
     *     Event type.
     * @param {number} loaded The number of bytes processed.
     * @param {number} total The total data that was to be processed, in bytes.
     * @constructor
     * @extends {goog.events.Event}
     * @final
     */
    class ProgressEvent extends goog.events.Event {
        constructor(type: goog.fs.FileSaver.EventType|goog.fs.FileReader.EventType, loaded: number, total: number);
        
        /**
         * @see {goog.fs.ProgressEvent#isLengthComputable}
         * @return {boolean} True if the length is known.
         */
        isLengthComputable(): boolean;
        
        /**
         * @see {goog.fs.ProgressEvent#getLoaded}
         * @return {number} The number of bytes loaded or written.
         */
        getLoaded(): number;
        
        /**
         * @see {goog.fs.ProgressEvent#getTotal}
         * @return {number} The total bytes to load or write.
         */
        getTotal(): number;
    }
}
