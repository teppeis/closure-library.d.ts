declare module goog {
    function require(name: 'goog.net.WebSocket'): typeof goog.net.WebSocket;
    function require(name: 'goog.net.WebSocket.EventType'): typeof goog.net.WebSocket.EventType;
    function require(name: 'goog.net.WebSocket.MessageEvent'): typeof goog.net.WebSocket.MessageEvent;
    function require(name: 'goog.net.WebSocket.ErrorEvent'): typeof goog.net.WebSocket.ErrorEvent;
}

declare module goog.net {

    /**
     * Class encapsulating the logic for using a WebSocket.
     *
     * @param {boolean|!goog.net.WebSocket.Options=} opt_params
     *     Parameters describing behavior of the WebSocket. The boolean 'true' is
     *     equivalent to setting Options.autoReconnect to be true.
     * @param {function(number): number=} opt_getNextReconnect
     *     @see goog.net.WebSocket.Options.getNextReconnect. This parameter is
     *     ignored if Options is passed for the first argument.
     * @constructor
     * @extends {goog.events.EventTarget}
     */
    class WebSocket extends goog.events.EventTarget {
        constructor(opt_params?: boolean|goog.net.WebSocket.Options, opt_getNextReconnect?: (arg0: number) => number);
        
        /**
         * Installs exception protection for all entry points introduced by
         * goog.net.WebSocket instances which are not protected by
         * {@link goog.debug.ErrorHandler#protectWindowSetTimeout},
         * {@link goog.debug.ErrorHandler#protectWindowSetInterval}, or
         * {@link goog.events.protectBrowserEventEntryPoint}.
         *
         * @param {!goog.debug.ErrorHandler} errorHandler Error handler with which to
         *     protect the entry points.
         */
        static protectEntryPoints(errorHandler: goog.debug.ErrorHandler): void;
        
        /**
         * Creates and opens the actual WebSocket.  Only call this after attaching the
         * appropriate listeners to this object.  If listeners aren't registered, then
         * the `goog.net.WebSocket.EventType.OPENED` event might be missed.
         *
         * @param {string} url The URL to which to connect.
         * @param {string=} opt_protocol The subprotocol to use.  The connection will
         *     only be established if the server reports that it has selected this
         *     subprotocol. The subprotocol name must all be a non-empty ASCII string
         *     with no control characters and no spaces in them (i.e. only characters
         *     in the range U+0021 to U+007E).
         */
        open(url: string, opt_protocol?: string): void;
        
        /**
         * Closes the web socket connection.
         */
        close(): void;
        
        /**
         * Sends the message over the web socket.
         *
         * @param {string|!ArrayBuffer|!ArrayBufferView} message The message to send.
         */
        send(message: string|ArrayBuffer|ArrayBufferView): void;
        
        /**
         * Checks to see if the web socket is open or not.
         *
         * @return {boolean} True if the web socket is open, false otherwise.
         */
        isOpen(): boolean;
        
        /**
         * Gets the number of bytes of data that have been queued using calls to send()
         * but not yet transmitted to the network.
         *
         * @return {number} Number of bytes of data that have been queued.
         */
        getBufferedAmount(): number;
    }
}

declare module goog.net.WebSocket {

    /** @enum {string} */
    type BinaryType = string;
    var BinaryType: {
        ARRAY_BUFFER: BinaryType;
        BLOB: BinaryType;
    };

    /**
     * The events fired by the web socket.
     * @enum {string} The event types for the web socket.
     */
    type EventType = string;
    var EventType: {
        CLOSED: EventType;
        ERROR: EventType;
        MESSAGE: EventType;
        OPENED: EventType;
    };

    /**
     * The various states of the web socket.
     * @enum {number} The states of the web socket.
     * @private
     */
    type ReadyState_ = number;
    var ReadyState_: {
        CONNECTING: ReadyState_;
        OPEN: ReadyState_;
        CLOSING: ReadyState_;
        CLOSED: ReadyState_;
    };

    /** @record */
    interface Options {
    }

    /**
     * Object representing a new incoming message event.
     *
     * @param {string} message The raw message coming from the web socket.
     * @extends {goog.events.Event}
     * @constructor
     * @final
     */
    class MessageEvent extends goog.events.Event {
        constructor(message: string);
    }

    /**
     * Object representing an error event. This is fired whenever an error occurs
     * on the web socket.
     *
     * @param {string} data The error data.
     * @extends {goog.events.Event}
     * @constructor
     * @final
     */
    class ErrorEvent extends goog.events.Event {
        constructor(data: string);
    }
}
