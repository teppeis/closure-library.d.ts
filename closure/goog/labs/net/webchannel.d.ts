declare module goog.net {

    /**
     * A WebChannel represents a logical bi-directional channel over which the
     * client communicates with a remote server that holds the other endpoint
     * of the channel. A WebChannel is always created in the context of a shared
     * {@link WebChannelTransport} instance. It is up to the underlying client-side
     * and server-side implementations to decide how or when multiplexing is
     * to be enabled.
     *
     * @interface
     * @extends {EventTarget}
     */
    export interface WebChannel extends EventTarget {
        
        /**
         * Open the WebChannel against the URI specified in the constructor.
         */
        open(): void;
        
        /**
         * Close the WebChannel.
         */
        close(): void;
        
        /**
         * Sends a message to the server that maintains the other end point of
         * the WebChannel.
         *
         * @param {!goog.net.WebChannel.MessageData} message The message to send.
         */
        send(message: goog.net.WebChannel.MessageData): void;
        
        /**
         * @return {!goog.net.WebChannel.RuntimeProperties} The runtime properties
         * of the WebChannel instance.
         */
        getRuntimeProperties(): goog.net.WebChannel.RuntimeProperties;
    }
}

declare module goog.net.WebChannel {

    /**
     * Common events fired by WebChannels.
     * @enum {string}
     */
    export interface EventType {
        OPEN: string;
        CLOSE: string;
        ERROR: string;
        MESSAGE: string;
    }

    /**
     * WebChannel level error conditions.
     * @enum {number}
     */
    export interface ErrorStatus {
        OK: number;
        NETWORK_ERROR: number;
        SERVER_ERROR: number;
    }

    /**
     * Configuration spec for newly created WebChannel instances.
     *
     * WebChannels are configured in the context of the containing
     * {@link WebChannelTransport}. The configuration parameters are specified
     * when a new instance of WebChannel is created via {@link WebChannelTransport}.
     *
     * messageHeaders: custom headers to be added to every message sent to the
     * server.
     *
     * messageUrlParams: custom url query parameters to be added to every message
     * sent to the server.
     *
     * spdyRequestLimit: the maximum number of in-flight HTTP requests allowed
     * when SPDY is enabled. Currently we only detect SPDY in Chrome.
     * This parameter defaults to 10. When SPDY is not enabled, this parameter
     * will have no effect.
     *
     * supportsCrossDomainXhr: setting this to true to allow the use of sub-domains
     * (as configured by the server) to send XHRs with the CORS withCredentials
     * bit set to true.
     *
     * testUrl: the test URL for detecting connectivity during the initial
     * handshake. This parameter defaults to "/<channel_url>/test".
     *
     *
     * @typedef {{
     *   messageHeaders: (!Object.<string, string>|undefined),
     *   messageUrlParams: (!Object.<string, string>|undefined),
     *   spdyRequestLimit: (number|undefined),
     *   supportsCrossDomainXhr: (boolean|undefined),
     *   testUrl: (string|undefined)
     * }}
     */
    export interface Options {
        messageHeaders: Object;
        messageUrlParams: Object;
        spdyRequestLimit: number;
        supportsCrossDomainXhr: boolean;
        testUrl: string;
    }

    /**
     * Types that are allowed as message data.
     *
     * @typedef {(ArrayBuffer|Blob|Object.<string, string>|Array)}
     */
    export interface MessageData {
    }

    /**
     * The event interface for the MESSAGE event.
     *
     * @constructor
     * @extends {goog.events.Event}
     */
    export class MessageEvent extends goog.events.Event {
        constructor();
        
        /**
         * The content of the message received from the server.
         *
         * @type {!goog.net.WebChannel.MessageData}
         */
        data: goog.net.WebChannel.MessageData;
    }

    /**
     * The event interface for the ERROR event.
     *
     * @constructor
     * @extends {goog.events.Event}
     */
    export class ErrorEvent extends goog.events.Event {
        constructor();
        
        /**
         * The error status.
         *
         * @type {!goog.net.WebChannel.ErrorStatus}
         */
        status: goog.net.WebChannel.ErrorStatus;
    }

    /**
     * The readonly runtime properties of the WebChannel instance.
     *
     * This class is defined for debugging and monitoring purposes, and for
     * optimization functions that the application may choose to manage by itself.
     *
     * @interface
     */
    export interface RuntimeProperties {
        
        /**
         * @return {number} The effective limit for the number of concurrent HTTP
         * requests that are allowed to be made for sending messages from the client
         * to the server. When SPDY is not enabled, this limit will be one.
         */
        getConcurrentRequestLimit(): number;
        
        /**
         * For applications that need support multiple channels (e.g. from
         * different tabs) to the same origin, use this method to decide if SPDY is
         * enabled and therefore it is safe to open multiple channels.
         *
         * If SPDY is disabled, the application may choose to limit the number of active
         * channels to one or use other means such as sub-domains to work around
         * the browser connection limit.
         *
         * @return {boolean} Whether SPDY is enabled for the origin against which
         * the channel is created.
         */
        isSpdyEnabled(): boolean;
        
        /**
         * This method may be used by the application to stop ack of received messages
         * as a means of enabling or disabling flow-control on the server-side.
         *
         * @param {boolean} enabled If true, enable flow-control behavior on the
         * server side. Setting it to false will cancel ay previous enabling action.
         */
        setServerFlowControl(enabled: boolean): void;
        
        /**
         * This method may be used by the application to throttle the rate of outgoing
         * messages, as a means of sender initiated flow-control.
         *
         * @return {number} The total number of messages that have not received
         * ack from the server and therefore remain in the buffer.
         */
        getNonAckedMessageCount(): number;
    }
}
