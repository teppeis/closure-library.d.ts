declare module goog.storage {

    /**
     * Errors thrown by the storage.
     * @enum {string}
     */
    type ErrorCode = string;
    var ErrorCode: {
        INVALID_VALUE: ErrorCode;
        DECRYPTION_ERROR: ErrorCode;
    };
}
