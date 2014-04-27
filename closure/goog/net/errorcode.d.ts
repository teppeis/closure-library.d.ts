declare module goog.net {

    /**
     * Error codes
     * @enum {number}
     */
    export interface ErrorCode {
        NO_ERROR: number;
        ACCESS_DENIED: number;
        FILE_NOT_FOUND: number;
        FF_SILENT_ERROR: number;
        CUSTOM_ERROR: number;
        EXCEPTION: number;
        HTTP_ERROR: number;
        ABORT: number;
        TIMEOUT: number;
        OFFLINE: number;
    }
}

declare module goog.net.ErrorCode {

    /**
     * Returns a friendly error message for an error code. These messages are for
     * debugging and are not localized.
     * @param {goog.net.ErrorCode} errorCode An error code.
     * @return {string} A message for debugging.
     */
    export function getDebugMessage(errorCode: goog.net.ErrorCode): string;
}
