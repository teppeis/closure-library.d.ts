declare module goog.fs {

    /**
     * A filesystem error. Since the filesystem API is asynchronous, stack traces
     * are less useful for identifying where errors come from, so this includes a
     * large amount of metadata in the message.
     *
     * @param {!DOMError} error
     * @param {string} action The action being undertaken when the error was raised.
     * @constructor
     * @extends {goog.debug.Error}
     * @final
     */
    export class Error extends goog.debug.Error {
        constructor(error: DOMError, action: string);
    }
}

declare module goog.fs.Error {

    /**
     * Names of errors that may be thrown by the File API, the File System API, or
     * the File Writer API.
     *
     * @see http://dev.w3.org/2006/webapi/FileAPI/#ErrorAndException
     * @see http://www.w3.org/TR/file-system-api/#definitions
     * @see http://dev.w3.org/2009/dap/file-system/file-writer.html#definitions
     * @enum {string}
     */
    export interface ErrorName {
        ABORT: string;
        ENCODING: string;
        INVALID_MODIFICATION: string;
        INVALID_STATE: string;
        NOT_FOUND: string;
        NOT_READABLE: string;
        NO_MODIFICATION_ALLOWED: string;
        PATH_EXISTS: string;
        QUOTA_EXCEEDED: string;
        SECURITY: string;
        SYNTAX: string;
        TYPE_MISMATCH: string;
    }

    /**
     * Error codes for file errors.
     * @see http://www.w3.org/TR/file-system-api/#idl-def-FileException
     *
     * @enum {number}
     * @deprecated Use the 'name' or 'message' attribute instead.
     */
    export interface ErrorCode {
        NOT_FOUND: number;
        SECURITY: number;
        ABORT: number;
        NOT_READABLE: number;
        ENCODING: number;
        NO_MODIFICATION_ALLOWED: number;
        INVALID_STATE: number;
        SYNTAX: number;
        INVALID_MODIFICATION: number;
        QUOTA_EXCEEDED: number;
        TYPE_MISMATCH: number;
        PATH_EXISTS: number;
    }
}
