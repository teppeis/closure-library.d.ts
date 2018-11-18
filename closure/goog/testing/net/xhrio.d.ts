declare module goog {
    function require(name: 'goog.testing.net.XhrIo'): typeof goog.testing.net.XhrIo;
}

declare module goog.testing.net {

    /**
     * Mock implementation of goog.net.XhrIo. This doesn't provide a mock
     * implementation for all cases, but it's not too hard to add them as needed.
     * @param {goog.testing.TestQueue=} opt_testQueue Test queue for inserting test
     *     events.
     * @constructor
     * @extends {goog.net.XhrIo}
     */
    class XhrIo extends goog.net.XhrIo {
        constructor(opt_testQueue?: goog.testing.TestQueue);
        
        /**
         * Some compiled tests replace goog.net.XhrIo with goog.testing.net.XhrIo,
         * which would cause a circular constructor loop.
         * @nocollapse
         */
        static base: any;
        
        /**
         * To emulate the behavior of the actual XhrIo, we do not allow access to the
         * XhrIo's properties outside the event callbacks. For backwards compatibility,
         * we allow tests to allow access by setting this value to true.
         * @type {boolean}
         */
        static allowUnsafeAccessToXhrIoOutsideCallbacks: boolean;
        
        /**
         * Returns an Array containing all non-disposed instances of
         * goog.testing.net.XhrIo created by {@link goog.testing.net.XhrIo.send}.
         * @return {!Array<!goog.testing.net.XhrIo>} Array of goog.testing.net.XhrIo
         *     instances.
         */
        static getSendInstances(): Array<goog.testing.net.XhrIo>;
        
        /**
         * Disposes all non-disposed instances of goog.testing.net.XhrIo created by
         * {@link goog.testing.net.XhrIo.send}.
         * @see goog.net.XhrIo.cleanup
         */
        static cleanup(): void;
        
        /**
         * Simulates the static XhrIo send method.
         * @param {string} url Uri to make request to.
         * @param {Function=} opt_callback Callback function for when request is
         *     complete.
         * @param {string=} opt_method Send method, default: GET.
         * @param {ArrayBuffer|ArrayBufferView|Blob|Document|FormData|string=}
         *     opt_content Body data.
         * @param {Object|goog.structs.Map=} opt_headers Map of headers to add to the
         *     request.
         * @param {number=} opt_timeoutInterval Number of milliseconds after which an
         *     incomplete request will be aborted; 0 means no timeout is set.
         * @param {boolean=} opt_withCredentials Whether to send credentials with the
         *     request. Default to false. See {@link goog.net.XhrIo#setWithCredentials}.
         * @return {!goog.testing.net.XhrIo} The mocked sent XhrIo.
         */
        static send(url: string, opt_callback?: Function, opt_method?: string, opt_content?: ArrayBuffer|ArrayBufferView|Blob|Document|FormData|string, opt_headers?: Object|goog.structs.Map<any, any>, opt_timeoutInterval?: number, opt_withCredentials?: boolean): goog.testing.net.XhrIo;
        
        /**
         * Returns the number of milliseconds after which an incomplete request will be
         * aborted, or 0 if no timeout is set.
         * @return {number} Timeout interval in milliseconds.
         * @override
         */
        getTimeoutInterval(): number;
        
        /**
         * Sets the number of milliseconds after which an incomplete request will be
         * aborted and a {@link goog.net.EventType.TIMEOUT} event raised; 0 means no
         * timeout is set.
         * @param {number} ms Timeout interval in milliseconds; 0 means none.
         * @override
         */
        setTimeoutInterval(ms: number): void;
        
        /**
         * Causes timeout events to be fired.
         */
        simulateTimeout(): void;
        
        /**
         * Sets the desired type for the response. At time of writing, this is only
         * supported in very recent versions of WebKit (10.0.612.1 dev and later).
         *
         * If this is used, the response may only be accessed via {@link #getResponse}.
         *
         * @param {goog.net.XhrIo.ResponseType} type The desired type for the response.
         * @override
         */
        setResponseType(type: goog.net.XhrIo.ResponseType): void;
        
        /**
         * Gets the desired type for the response.
         * @return {!goog.net.XhrIo.ResponseType} The desired type for the response.
         * @override
         */
        getResponseType(): goog.net.XhrIo.ResponseType;
        
        /**
         * Sets whether a "credentialed" request that is aware of cookie and
         * authentication information should be made. This option is only supported by
         * browsers that support HTTP Access Control. As of this writing, this option
         * is not supported in IE.
         *
         * @param {boolean} withCredentials Whether this should be a "credentialed"
         *     request.
         * @override
         */
        setWithCredentials(withCredentials: boolean): void;
        
        /**
         * Gets whether a "credentialed" request is to be sent.
         * @return {boolean} The desired type for the response.
         * @override
         */
        getWithCredentials(): boolean;
        
        /**
         * Sets whether progress events are enabled for this request. Note
         * that progress events require pre-flight OPTIONS request handling
         * for CORS requests, and may cause trouble with older browsers. See
         * goog.net.XhrIo.progressEventsEnabled_ for details.
         * @param {boolean} enabled Whether progress events should be enabled.
         * @override
         */
        setProgressEventsEnabled(enabled: boolean): void;
        
        /**
         * Gets whether progress events are enabled.
         * @return {boolean} Whether progress events are enabled for this request.
         * @override
         */
        getProgressEventsEnabled(): boolean;
        
        /**
         * Abort the current XMLHttpRequest
         * @param {!goog.net.ErrorCode=} opt_failureCode Optional error code to use -
         *     defaults to ABORT.
         * @override
         */
        abort(opt_failureCode?: goog.net.ErrorCode): void;
        
        /**
         * Simulates the XhrIo send.
         * @param {?goog.Uri|string} url Uri to make request too.
         * @param {string=} opt_method Send method, default: GET.
         * @param {ArrayBuffer|ArrayBufferView|Blob|Document|FormData|string=}
         *     opt_content Body data.
         * @param {Object|goog.structs.Map=} opt_headers Map of headers to add to the
         *     request.
         * @override
         */
        send(url: goog.Uri|string, opt_method?: string, opt_content?: ArrayBuffer|ArrayBufferView|Blob|Document|FormData|string, opt_headers?: Object|goog.structs.Map<any, any>): void;
        
        /**
         * Creates a new XHR object.
         * @return {!goog.net.XhrLike.OrNative} The newly created XHR object.
         * @override
         */
        createXhr(): goog.net.XhrLike.OrNative;
        
        /**
         * Simulates changing to the new ready state.
         * @param {number} readyState Ready state to change to.
         */
        simulateReadyStateChange(readyState: number): void;
        
        /**
         * Simulate receiving some bytes but the request not fully completing, and
         * the XHR entering the 'INTERACTIVE' state.
         * @param {string} partialResponse A string to append to the response text.
         * @param {Object=} opt_headers Simulated response headers.
         */
        simulatePartialResponse(partialResponse: string, opt_headers?: Object): void;
        
        /**
         * Simulates receiving a response.
         * @param {number} statusCode Simulated status code.
         * @param {string|Document|ArrayBuffer|null} response Simulated response.
         * @param {Object=} opt_headers Simulated response headers.
         */
        simulateResponse(statusCode: number, response: string|Document|ArrayBuffer|void, opt_headers?: Object): void;
        
        /**
         * Simulates the Xhr is ready for the next request.
         */
        simulateReady(): void;
        
        /**
         * Simulates the Xhr progress event.
         * @param {boolean} lengthComputable Whether progress is measurable.
         * @param {number} loaded Amount of work already performed.
         * @param {number} total Total amount of work to perform.
         * @param {boolean=} opt_isDownload Whether the progress is from a download or
         *     upload.
         */
        simulateProgress(lengthComputable: boolean, loaded: number, total: number, opt_isDownload?: boolean): void;
        
        /**
         * @return {boolean} Whether there is an active request.
         * @override
         */
        isActive(): boolean;
        
        /**
         * Has the request completed.
         * @return {boolean} Whether the request has completed.
         * @override
         */
        isComplete(): boolean;
        
        /**
         * Has the request compeleted with a success.
         * @return {boolean} Whether the request compeleted successfully.
         * @override
         */
        isSuccess(): boolean;
        
        /**
         * Returns the readystate.
         * @return {!goog.net.XmlHttp.ReadyState} goog.net.XmlHttp.ReadyState.*.
         * @override
         */
        getReadyState(): goog.net.XmlHttp.ReadyState;
        
        /**
         * Get the status from the Xhr object.  Will only return correct result when
         * called from the context of a callback.
         * @return {number} Http status.
         * @override
         */
        getStatus(): number;
        
        /**
         * Get the status text from the Xhr object.  Will only return correct result
         * when called from the context of a callback.
         * @return {string} Status text.
         * @override
         */
        getStatusText(): string;
        
        /**
         * Gets the last error message.
         * @return {!goog.net.ErrorCode} Last error code.
         * @override
         */
        getLastErrorCode(): goog.net.ErrorCode;
        
        /**
         * Gets the last error message.
         * @return {string} Last error message.
         * @override
         */
        getLastError(): string;
        
        /**
         * Gets the last URI that was requested.
         * @return {string} Last URI.
         * @override
         */
        getLastUri(): string;
        
        /**
         * Gets the last HTTP method that was requested.
         * @return {string|undefined} Last HTTP method used by send.
         */
        getLastMethod(): string|void;
        
        /**
         * Gets the last POST content that was requested.
         * @return {ArrayBuffer|ArrayBufferView|Blob|Document|FormData|string|undefined}
         *     Last POST content or undefined if last request was a GET.
         */
        getLastContent(): ArrayBuffer|ArrayBufferView|Blob|Document|FormData|string|void;
        
        /**
         * Gets the headers of the last request.
         * @return {Object|goog.structs.Map|undefined} Last headers manually set in send
         *      call or undefined if no additional headers were specified.
         */
        getLastRequestHeaders(): Object|goog.structs.Map<any, any>|void;
        
        /**
         * Gets the response text from the Xhr object.  Will only return correct result
         * when called from the context of a callback.
         * @return {string} Result from the server.
         * @override
         */
        getResponseText(): string;
        
        /**
         * Gets the response body from the Xhr object. Will only return correct result
         * when called from the context of a callback.
         * @return {Object} Binary result from the server or null.
         * @override
         */
        getResponseBody(): Object;
        
        /**
         * Gets the response and evaluates it as JSON from the Xhr object.  Will only
         * return correct result when called from the context of a callback.
         * @param {string=} opt_xssiPrefix Optional XSSI prefix string to use for
         *     stripping of the response before parsing. This needs to be set only if
         *     your backend server prepends the same prefix string to the JSON response.
         * @return {Object|undefined} JavaScript object.
         * @throws Error if s is invalid JSON.
         * @override
         */
        getResponseJson(opt_xssiPrefix?: string): Object|void;
        
        /**
         * Gets the response XML from the Xhr object.  Will only return correct result
         * when called from the context of a callback.
         * @return {Document} Result from the server if it was XML.
         * @override
         */
        getResponseXml(): Document;
        
        /**
         * Get the response as the type specificed by {@link #setResponseType}. At time
         * of writing, this is only supported in very recent versions of WebKit
         * (10.0.612.1 dev and later).
         *
         * @return {*} The response.
         * @override
         */
        getResponse(): any;
        
        /**
         * Get the value of the response-header with the given name from the Xhr object
         * Will only return correct result when called from the context of a callback
         * and the request has completed
         * @param {string} key The name of the response-header to retrieve.
         * @return {string|undefined} The value of the response-header named key.
         * @override
         */
        getResponseHeader(key: string): string|void;
        
        /**
         * Gets the text of all the headers in the response.
         * Will only return correct result when called from the context of a callback
         * and the request has completed
         * @return {string} The string containing all the response headers.
         * @override
         */
        getAllResponseHeaders(): string;
        
        /**
         * Returns all response headers as a key-value map.
         * Multiple values for the same header key can be combined into one,
         * separated by a comma and a space.
         * Note that the native getResponseHeader method for retrieving a single header
         * does a case insensitive match on the header name. This method does not
         * include any case normalization logic, it will just return a key-value
         * representation of the headers.
         * See: http://www.w3.org/TR/XMLHttpRequest/#the-getresponseheader()-method
         * @return {!Object<string, string>} An object with the header keys as keys
         *     and header values as values.
         * @override
         */
        getResponseHeaders(): {[index: string]: string};
        
        /**
         * Get the value of the response-header with the given name from the Xhr object.
         * As opposed to {@link #getResponseHeader}, this method does not require that
         * the request has completed.
         * @param {string} key The name of the response-header to retrieve.
         * @return {?string} The value of the response-header, or null if it is
         *     unavailable.
         * @override
         */
        getStreamingResponseHeader(key: string): string;
        
        /**
         * Gets the text of all the headers in the response. As opposed to
         * {@link #getAllResponseHeaders}, this method does not require that the request
         * has completed.
         * @return {string} The value of the response headers or empty string.
         * @override
         */
        getAllStreamingResponseHeaders(): string;
    }
}

declare module goog.testing.net.XhrIo {

    /**
     * Alias this enum here to make mocking of goog.net.XhrIo easier.
     * @enum {string}
     */
    export import ResponseType = goog.net.XhrIo.ResponseType;
}
