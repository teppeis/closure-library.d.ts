declare module goog {
    function require(name: 'goog.net.Jsonp'): typeof goog.net.Jsonp;
}

declare module goog.net {

    /**
     * Creates a new cross domain channel that sends data to the specified
     * host URL. By default, if no reply arrives within 5s, the channel
     * assumes the call failed to complete successfully.
     *
     * @param {!goog.html.TrustedResourceUrl} uri The Uri of the server side code
     *     that receives data posted through this channel (e.g.,
     *     "http://maps.google.com/maps/geo").
     *
     * @param {string=} opt_callbackParamName The parameter name that is used to
     *     specify the callback. Defaults to "callback".
     *
     * @constructor
     * @final
     */
    class Jsonp {
        constructor(uri: goog.html.TrustedResourceUrl, opt_callbackParamName?: string);
        
        /**
         * The prefix for the callback name which will be stored on goog.global.
         */
        static CALLBACKS: any;
        
        /**
         * Sets the length of time, in milliseconds, this channel is prepared
         * to wait for for a request to complete. If the call is not competed
         * within the set time span, it is assumed to have failed. To wait
         * indefinitely for a request to complete set the timout to a negative
         * number.
         *
         * @param {number} timeout The length of time before calls are
         * interrupted.
         */
        setRequestTimeout(timeout: number): void;
        
        /**
         * Returns the current timeout value, in milliseconds.
         *
         * @return {number} The timeout value.
         */
        getRequestTimeout(): number;
        
        /**
         * Sets the nonce value for CSP. This nonce value will be added to any created
         * script elements and must match the nonce provided in the
         * Content-Security-Policy header sent by the server for the callback to pass
         * CSP enforcement.
         *
         * @param {string} nonce The CSP nonce value.
         */
        setNonce(nonce: string): void;
        
        /**
         * Sends the given payload to the URL specified at the construction
         * time. The reply is delivered to the given replyCallback. If the
         * errorCallback is specified and the reply does not arrive within the
         * timeout period set on this channel, the errorCallback is invoked
         * with the original payload.
         *
         * If no reply callback is specified, then the response is expected to
         * consist of calls to globally registered functions. No &callback=
         * URL parameter will be sent in the request, and the script element
         * will be cleaned up after the timeout.
         *
         * @param {Object=} opt_payload Name-value pairs.  If given, these will be
         *     added as parameters to the supplied URI as GET parameters to the
         *     given server URI.
         *
         * @param {Function=} opt_replyCallback A function expecting one
         *     argument, called when the reply arrives, with the response data.
         *
         * @param {Function=} opt_errorCallback A function expecting one
         *     argument, called on timeout, with the payload (if given), otherwise
         *     null.
         *
         * @param {string=} opt_callbackParamValue Value to be used as the
         *     parameter value for the callback parameter (callbackParamName).
         *     To be used when the value needs to be fixed by the client for a
         *     particular request, to make use of the cached responses for the request.
         *     NOTE: If multiple requests are made with the same
         *     opt_callbackParamValue, only the last call will work whenever the
         *     response comes back.
         *
         * @return {!Object} A request descriptor that may be used to cancel this
         *     transmission, or null, if the message may not be cancelled.
         */
        send(opt_payload?: Object, opt_replyCallback?: Function, opt_errorCallback?: Function, opt_callbackParamValue?: string): Object;
        
        /**
         * Cancels a given request. The request must be exactly the object returned by
         * the send method.
         * @param {Object} request The request object returned by the send method.
         * @suppress {strictMissingProperties} Part of the go/strict_warnings_migration
         */
        cancel(request: Object): void;
    }
}
