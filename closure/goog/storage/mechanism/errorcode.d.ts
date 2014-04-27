declare module goog.storage.mechanism {

    /**
     * Errors thrown by storage mechanisms.
     * @enum {string}
     */
    export interface ErrorCode {
        INVALID_VALUE: string;
        QUOTA_EXCEEDED: string;
        STORAGE_DISABLED: string;
    }
}
