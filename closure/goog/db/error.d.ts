declare module goog.db {

    /**
     * A database error. Since the stack trace can be unhelpful in an asynchronous
     * context, the error provides a message about where it was produced.
     *
     * @param {number|!DOMError} error The DOMError instance returned by the
     *     browser for Chrome22+, or an error code for previous versions.
     * @param {string} context A description of where the error occured.
     * @param {string=} opt_message Additional message.
     * @constructor
     * @extends {goog.debug.Error}
     * @final
     */
    export class Error extends goog.debug.Error {
        constructor(error: number, context: string, opt_message?: string);
        
        /**
         * @return {string} The name of the error.
         */
        getName(): string;
        
        /**
         * Translates an error code into a more useful message.
         *
         * @param {number} code Error code.
         * @return {string} A debug message.
         */
        static getMessage(code: number): string;
        
        /**
         * Translates an error name to an error code. This is purely kept for backwards
         * compatibility with Chrome21.
         *
         * @param {string} name The name of the erorr.
         * @return {number} The error code corresponding to the error.
         */
        static getCode(name: string): number;
        
        /**
         * Converts an error code used by the old spec, to an error name used by the
         * latest spec.
         * @see http://www.w3.org/TR/IndexedDB/#exceptions
         *
         * @param {!goog.db.Error.ErrorCode|number} code The error code to convert.
         * @return {!goog.db.Error.ErrorName} The corresponding name of the error.
         */
        static getName(code: goog.db.Error.ErrorCode): goog.db.Error.ErrorName;
        
        /**
         * Constructs an goog.db.Error instance from an IDBRequest. This abstraction is
         * necessary to provide backwards compatibility with Chrome21.
         *
         * @param {!IDBRequest} request The request that failed.
         * @param {string} message The error message to add to err if it's wrapped.
         * @return {!goog.db.Error} The error that caused the failure.
         */
        static fromRequest(request: IDBRequest, message: string): goog.db.Error;
        
        /**
         * Constructs an goog.db.Error instance from an DOMException. This abstraction
         * is necessary to provide backwards compatibility with Chrome21.
         *
         * @param {!IDBDatabaseException} ex The exception that was thrown.
         * @param {string} message The error message to add to err if it's wrapped.
         * @return {!goog.db.Error} The error that caused the failure.
         * @suppress {invalidCasts} The cast from IDBDatabaseException to DOMError
         *     is invalid and will not compile.
         */
        static fromException(ex: IDBDatabaseException, message: string): goog.db.Error;
    }
}

declare module goog.db.Error {

    /**
     * Synthetic error codes for database errors, for use when IndexedDB
     * support is not available. This numbering differs in practice
     * from the browser implementations, but it is not meant to be reliable:
     * this object merely ensures that goog.db.Error is loadable on platforms
     * that do not support IndexedDB.
     *
     * @enum {number}
     * @private
     */
    export interface DatabaseErrorCode_ {
        UNKNOWN_ERR: number;
        NON_TRANSIENT_ERR: number;
        NOT_FOUND_ERR: number;
        CONSTRAINT_ERR: number;
        DATA_ERR: number;
        NOT_ALLOWED_ERR: number;
        TRANSACTION_INACTIVE_ERR: number;
        ABORT_ERR: number;
        READ_ONLY_ERR: number;
        TRANSIENT_ERR: number;
        TIMEOUT_ERR: number;
        QUOTA_ERR: number;
        INVALID_ACCESS_ERR: number;
        INVALID_STATE_ERR: number;
    }

    /**
     * Error codes for database errors.
     * @see http://www.w3.org/TR/IndexedDB/#idl-def-IDBDatabaseException
     *
     * @enum {number}
     */
    export interface ErrorCode {
        UNKNOWN_ERR: number;
        NON_TRANSIENT_ERR: number;
        NOT_FOUND_ERR: number;
        CONSTRAINT_ERR: number;
        DATA_ERR: number;
        NOT_ALLOWED_ERR: number;
        TRANSACTION_INACTIVE_ERR: number;
        ABORT_ERR: number;
        READ_ONLY_ERR: number;
        TIMEOUT_ERR: number;
        QUOTA_ERR: number;
        INVALID_ACCESS_ERR: number;
        INVALID_STATE_ERR: number;
    }

    /**
     * Names of all possible errors as returned from the browser.
     * @see http://www.w3.org/TR/IndexedDB/#exceptions
     * @enum {string}
     */
    export interface ErrorName {
        ABORT_ERR: string;
        CONSTRAINT_ERR: string;
        DATA_CLONE_ERR: string;
        DATA_ERR: string;
        INVALID_ACCESS_ERR: string;
        INVALID_STATE_ERR: string;
        NOT_FOUND_ERR: string;
        QUOTA_EXCEEDED_ERR: string;
        READ_ONLY_ERR: string;
        SYNTAX_ERROR: string;
        TIMEOUT_ERR: string;
        TRANSACTION_INACTIVE_ERR: string;
        UNKNOWN_ERR: string;
        VERSION_ERR: string;
    }

    /**
     * A specific kind of database error. If a Version Change is unable to proceed
     * due to other open database connections, it will block and this error will be
     * thrown.
     *
     * @constructor
     * @extends {goog.debug.Error}
     * @final
     */
    export class VersionChangeBlockedError extends goog.debug.Error {
        constructor();
    }
}
