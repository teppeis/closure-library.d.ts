declare module goog.debug.logRecordSerializer {

    /**
     * Enumeration of object keys used when serializing a log message.
     * @enum {string}
     * @private
     */
    interface Param_ {
        TIME: string;
        LEVEL_NAME: string;
        LEVEL_VALUE: string;
        MSG: string;
        LOGGER_NAME: string;
        SEQUENCE_NUMBER: string;
        EXCEPTION: string;
    }

    /**
     * Serializes a LogRecord to a JSON string.  Note that any associated
     * exception is likely to be lost.
     * @param {goog.debug.LogRecord} record The record to serialize.
     * @return {string} Serialized JSON string of the log message.
     */
    function serialize(record: goog.debug.LogRecord): string;

    /**
     * Deserializes a JSON-serialized LogRecord.
     * @param {string} s The JSON serialized record.
     * @return {!goog.debug.LogRecord} The deserialized record.
     */
    function parse(s: string): goog.debug.LogRecord;

    /**
     * Deserializes a JSON-serialized LogRecord.  Use this only if you're
     * naive enough to blindly trust any JSON formatted input that comes
     * your way.
     * @param {string} s The JSON serialized record.
     * @return {!goog.debug.LogRecord} The deserialized record.
     */
    function unsafeParse(s: string): goog.debug.LogRecord;
}
