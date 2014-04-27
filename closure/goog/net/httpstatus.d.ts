declare module goog.net {

    /**
     * HTTP Status Codes defined in RFC 2616.
     * @see http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html
     * @enum {number}
     */
    export interface HttpStatus {
        CONTINUE: number;
        SWITCHING_PROTOCOLS: number;
        OK: number;
        CREATED: number;
        ACCEPTED: number;
        NON_AUTHORITATIVE_INFORMATION: number;
        NO_CONTENT: number;
        RESET_CONTENT: number;
        PARTIAL_CONTENT: number;
        MULTIPLE_CHOICES: number;
        MOVED_PERMANENTLY: number;
        FOUND: number;
        SEE_OTHER: number;
        NOT_MODIFIED: number;
        USE_PROXY: number;
        TEMPORARY_REDIRECT: number;
        BAD_REQUEST: number;
        UNAUTHORIZED: number;
        PAYMENT_REQUIRED: number;
        FORBIDDEN: number;
        NOT_FOUND: number;
        METHOD_NOT_ALLOWED: number;
        NOT_ACCEPTABLE: number;
        PROXY_AUTHENTICATION_REQUIRED: number;
        REQUEST_TIMEOUT: number;
        CONFLICT: number;
        GONE: number;
        LENGTH_REQUIRED: number;
        PRECONDITION_FAILED: number;
        REQUEST_ENTITY_TOO_LARGE: number;
        REQUEST_URI_TOO_LONG: number;
        UNSUPPORTED_MEDIA_TYPE: number;
        REQUEST_RANGE_NOT_SATISFIABLE: number;
        EXPECTATION_FAILED: number;
        INTERNAL_SERVER_ERROR: number;
        NOT_IMPLEMENTED: number;
        BAD_GATEWAY: number;
        SERVICE_UNAVAILABLE: number;
        GATEWAY_TIMEOUT: number;
        HTTP_VERSION_NOT_SUPPORTED: number;
        QUIRK_IE_NO_CONTENT: number;
    }
}

declare module goog.net.HttpStatus {

    /**
     * Returns whether the given status should be considered successful.
     *
     * Successful codes are OK (200), CREATED (201), ACCEPTED (202),
     * NO CONTENT (204), PARTIAL CONTENT (206), NOT MODIFIED (304),
     * and IE's no content code (1223).
     *
     * @param {number} status The status code to test.
     * @return {boolean} Whether the status code should be considered successful.
     */
    export function isSuccess(status: number): boolean;
}
