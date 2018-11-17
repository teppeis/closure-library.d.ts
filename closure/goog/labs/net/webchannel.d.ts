declare module goog {
    function require(name: 'goog.net.WebChannel'): typeof goog.net.WebChannel;
}

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
     * @extends {goog.events.Listenable}
     */
    interface WebChannel extends goog.globalEventTarget, goog.events.Listenable {
        
        /**
         * Open the WebChannel against the URI specified in the constructor.
         */
        open(): void;
        
        /**
         * Close the WebChannel.
         *
         * This is a full close (shutdown) with no guarantee of FIFO delivery in respect
         * to any in-flight messages sent to the server.
         *
         * If you need such a guarantee, see the Half the halfClose() method.
         */
        close(): void;
        
        /**
         * Half-close the WebChannel.
         *
         * Half-close semantics:
         * 1. delivered as a regular message in FIFO programming order
         * 2. the server is expected to return a half-close too (with or without
         *    application involved), which will trigger a full close (shutdown)
         *    on the client side
         * 3. for now, the half-close event defined for server-initiated
         *    half-close is not exposed to the client application
         * 4. a client-side half-close may be triggered internally when the client
         *    receives a half-close from the server; and the client is expected to
         *    do a full close after the half-close is acked and delivered
         *    on the server-side.
         * 5. Full close is always a forced one. See the close() method.
         *
         * New messages sent after halfClose() will be dropped.
         *
         * NOTE: This is not yet implemented, and will throw an exception if called.
         */
        halfClose(): void;
        
        /**
         * Sends a message to the server that maintains the other end point of
         * the WebChannel.
         *
         * O-RTT behavior:
         * 1. messages sent before open() is called will always be delivered as
         *    part of the handshake, i.e. with 0-RTT
         * 2. messages sent after open() is called but before the OPEN event
         *    is received will be delivered as part of the handshake if
         *    send() is called from the same execution context as open().
         * 3. otherwise, those messages will be buffered till the handshake
         *    is completed (which will fire the OPEN event).
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
    type EventType = string;
    var EventType: {
        OPEN: EventType;
        CLOSE: EventType;
        ERROR: EventType;
        MESSAGE: EventType;
    };

    /**
     * WebChannel level error conditions.
     *
     * Summary of error debugging and reporting in WebChannel:
     *
     * Network Error
     * 1. By default the webchannel library will set the error status to
     *    NETWORK_ERROR when a channel has to be aborted or closed. NETWORK_ERROR
     *    may be recovered by the application by retrying and opening a new channel.
     * 2. There may be lost messages (not acked by the server) when a channel is
     *    aborted. Currently we don't have a public API to retrieve messages that
     *    are waiting to be acked on the client side. File a bug if you think it
     *    is useful to expose such an API.
     * 3. Details of why a channel fails are available via closure debug logs,
     *    and stats events (see webchannel/requeststats.js). Those are internal
     *    stats and are subject to change. File a bug if you think it's useful to
     *    version and expose such stats as part of the WebChannel API.
     *
     * Server Error
     * 1. SERVER_ERROR is intended to indicate a non-recoverable condition, e.g.
     *    when auth fails.
     * 2. We don't currently generate any such errors, because most of the time
     *    it's the responsibility of upper-layer frameworks or the application
     *    itself to indicate to the client why a webchannel has been failed
     *    by the server.
     * 3. When a channel is failed by the server explicitly, we still signal
     *    NETWORK_ERROR to the client. Explicit server failure may happen when the
     *    server does a fail-over, or becomes overloaded, or conducts a forced
     *    shutdown etc.
     * 4. We use some heuristic to decide if the network (aka cloud) is down
     *    v.s. the actual server is down.
     *
     *  RuntimeProperties.getLastStatusCode is a useful state that we expose to
     *  the client to indicate the HTTP response status code of the last HTTP
     *  request initiated by the WebChannel client library, for debugging
     *  purposes only.
     *
     *  See WebChannel.Options.backChannelFailureRecovery and
     *  WebChannel.FailureRecovery to install a custom failure-recovery algorithm.
     *
     * @enum {number}
     */
    type ErrorStatus = number;
    var ErrorStatus: {
        OK: ErrorStatus;
        NETWORK_ERROR: ErrorStatus;
        SERVER_ERROR: ErrorStatus;
    };

    /**
     * Configuration spec for newly created WebChannel instances.
     *
     * WebChannels are configured in the context of the containing
     * {@link WebChannelTransport}. The configuration parameters are specified
     * when a new instance of WebChannel is created via {@link WebChannelTransport}.
     *
     * messageHeaders: custom headers to be added to every message sent to the
     * server. This object is mutable, and custom headers may be changed, removed,
     * or added during the runtime after a channel has been opened.
     *
     * initMessageHeaders: similar to messageHeaders, but any custom headers will
     * be sent only once when the channel is opened. Typical usage is to send
     * an auth header to the server, which only checks the auth header at the time
     * when the channel is opened.
     *
     * messageContentType: sent as initMessageHeaders via X-WebChannel-Content-Type,
     * to inform the server the MIME type of WebChannel messages.
     *
     * messageUrlParams: custom url query parameters to be added to every message
     * sent to the server. This object is mutable, and custom parameters may be
     * changed, removed or added during the runtime after a channel has been opened.
     *
     * clientProtocolHeaderRequired: whether a special header should be added to
     * each message so that the server can dispatch webchannel messages without
     * knowing the URL path prefix. Defaults to false.
     *
     * concurrentRequestLimit: the maximum number of in-flight HTTP requests allowed
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
     * sendRawJson: whether to bypass v8 encoding of client-sent messages. Will be
     * deprecated after v9 wire protocol is introduced. Only safe to set if the
     * server is known to support this feature.
     *
     * httpSessionIdParam: the URL parameter name that contains the session id (
     * for sticky routing of HTTP requests). When this param is specified, a server
     * that supports this option will respond with an opaque session id as part of
     * the initial handshake (via the X-HTTP-Session-Id header); and all the
     * subsequent requests will contain the httpSessionIdParam. This option will
     * take precedence over any duplicated parameter specified with
     * messageUrlParams, whose value will be ignored.
     *
     * httpHeadersOverwriteParam: the URL parameter name to allow custom HTTP
     * headers to be overwritten as a URL param to bypass CORS preflight.
     * goog.net.rpc.HttpCors is used to encode the HTTP headers.
     *
     * backgroundChannelTest: whether to run the channel test (detecting networking
     * conditions) as a background process so the OPEN event will be fired sooner
     * to reduce the initial handshake delay. This option defaults to true.
     * The actual background channel test is not fully implemented.
     *
     * forceLongPolling: whether to force long-polling from client to server.
     * This defaults to false. Long-polling may be necessary when a (MITM) proxy
     * is buffering data sent by the server.
     *
     * fastHandshake: experimental feature to enable true 0-RTT message delivery,
     * e.g. by leveraging QUIC 0-RTT (which requires GET to be used). This option
     * defaults to false. When this option is enabled, backgroundChannelTest will
     * be forced to true. Note it is allowed to send messages before Open event is
     * received, after a channel has been connected. In order to enable 0-RTT,
     * messages need be encoded as part of URL and therefore there needs be a size
     * limit (e.g. 16KB) for messages that need be sent immediately
     * as part of the handshake.
     *
     * disableRedact: whether to disable logging redact. By default, redact is
     * enabled to remove any message payload or user-provided info
     * from closure logs.
     *
     * clientProfile: inform the server about the client profile to enable
     * customized configs that are optimized for certain clients or environments.
     * Currently this information is sent via X-WebChannel-Client-Profile header.
     *
     * internalChannelParams: the internal channel parameter name to allow
     * experimental channel configurations. Supported options include fastfail,
     * baseRetryDelayMs, retryDelaySeedMs, forwardChannelMaxRetries and
     * forwardChannelRequestTimeoutMs. Note that these options are subject to
     * change.
     *
     * xmlHttpFactory: allows the caller to override the factory used to create
     * XMLHttpRequest objects. This is introduced to disable CORS on firefox OS.
     *
     * requestRefreshThresholds: client-side thresholds that decide when to refresh
     * an underlying HTTP request, to limit memory consumption due to XHR buffering
     * or compression context. The client-side thresholds should be signficantly
     * smaller than the server-side thresholds. This allows the client to eliminate
     * any latency introduced by request refreshing, i.e. an RTT window during which
     * messages may be buffered on the server-side. Supported params include
     * totalBytesReceived, totalDurationMs.
     *
     * @typedef {{
     *   messageHeaders: (!Object<string, string>|undefined),
     *   initMessageHeaders: (!Object<string, string>|undefined),
     *   messageContentType: (string|undefined),
     *   messageUrlParams: (!Object<string, string>|undefined),
     *   clientProtocolHeaderRequired: (boolean|undefined),
     *   concurrentRequestLimit: (number|undefined),
     *   supportsCrossDomainXhr: (boolean|undefined),
     *   testUrl: (string|undefined),
     *   sendRawJson: (boolean|undefined),
     *   httpSessionIdParam: (string|undefined),
     *   httpHeadersOverwriteParam: (string|undefined),
     *   backgroundChannelTest: (boolean|undefined),
     *   forceLongPolling: (boolean|undefined),
     *   fastHandshake: (boolean|undefined),
     *   disableRedact: (boolean|undefined),
     *   clientProfile: (string|undefined),
     *   internalChannelParams: (!Object<string, boolean|number>|undefined),
     *   xmlHttpFactory: (!goog.net.XmlHttpFactory|undefined),
     *   requestRefreshThresholds: (!Object<string, number>|undefined),
     * }}
     */
    type Options = {messageHeaders: {[index: string]: string}|void; initMessageHeaders: {[index: string]: string}|void; messageContentType: string|void; messageUrlParams: {[index: string]: string}|void; clientProtocolHeaderRequired: boolean|void; concurrentRequestLimit: number|void; supportsCrossDomainXhr: boolean|void; testUrl: string|void; sendRawJson: boolean|void; httpSessionIdParam: string|void; httpHeadersOverwriteParam: string|void; backgroundChannelTest: boolean|void; forceLongPolling: boolean|void; fastHandshake: boolean|void; disableRedact: boolean|void; clientProfile: string|void; internalChannelParams: {[index: string]: boolean|number}|void; xmlHttpFactory: goog.net.XmlHttpFactory|void; requestRefreshThresholds: {[index: string]: number}|void};

    /**
     * Types that are allowed as message data.
     *
     * Note that JS objects (sent by the client) can only have string encoded
     * values due to the limitation of the current wire protocol.
     *
     * Unicode strings (sent by the server) may or may not need be escaped, as
     * decided by the server.
     *
     * @typedef {(!ArrayBuffer|!Blob|!Object<string, !Object|string>|!Array|string)}
     */
    type MessageData = ArrayBuffer|Blob|{[index: string]: Object|string}|Array<any>|string;

    /**
     * This interface defines a pluggable API to allow WebChannel runtime to support
     * customized algorithms in order to recover from transient failures such as
     * those failures caused by network or proxies (intermediaries).
     *
     * The algorithm may also choose to fail-fast, e.g. switch the client to some
     * offline mode.
     *
     * Extra measurements and logging could also be implemented in the custom
     * module, which has the full knowledge of all the state transitions
     * (due to failures).
     *
     * A default algorithm will be provided by the webchannel library itself. Custom
     * algorithms are expected to be tailored to specific client platforms or
     * networking environments, e.g. mobile, cellular network.
     *
     * @interface
     */
    interface FailureRecovery {
        
        /**
         * @return {!goog.net.WebChannel.FailureRecovery.State} the current state,
         * mainly for debugging use.
         */
        getState(): goog.net.WebChannel.FailureRecovery.State;
        
        /**
         * This method is for WebChannel runtime to set the current failure condition
         * and to provide a callback for the algorithm to signal to the runtime
         * when it is time to issue a recovery operation, e.g. a new request to the
         * server.
         *
         * Supported transitions include:
         *   INIT->FAILED
         *   FAILED->FAILED (re-entry ok)
         *   RECOVERY->FAILED.
         *
         * Ignored if state == CLOSED.
         *
         * Advanced implementations are expected to track all the state transitions
         * and their timestamps for monitoring purposes.
         *
         * @param {!goog.net.WebChannel.FailureRecovery.FailureCondition} failure The
         * new failure condition generated by the WebChannel runtime.
         * @param {!Function} operation The callback function to the WebChannel
         * runtime to issue a recovery operation, e.g. a new request. E.g. the default
         * recovery algorithm will issue timeout-based recovery operations.
         * Post-condition for the callback: state transition to RECOVERING.
         *
         * @return {!goog.net.WebChannel.FailureRecovery.State} The updated state
         * as decided by the failure recovery module. Upon a recoverable failure event,
         * the state is transitioned to RECOVERING; or the state is transitioned to
         * FAILED which indicates a fail-fast decision for the runtime to execute.
         */
        setFailure(failure: goog.net.WebChannel.FailureRecovery.FailureCondition, operation: Function): goog.net.WebChannel.FailureRecovery.State;
        
        /**
         * The Webchannel runtime needs call this method when webchannel is closed or
         * aborted.
         *
         * Once the instance is closed, any access to the instance will be a no-op.
         */
        close(): void;
    }

    /**
     * The event interface for the MESSAGE event.
     *
     * @constructor
     * @extends {goog.events.Event}
     */
    class MessageEvent extends goog.events.Event {
        constructor();
        
        /**
         * The content of the message received from the server.
         *
         * @type {!goog.net.WebChannel.MessageData}
         */
        data: goog.net.WebChannel.MessageData;
        
        /**
         * The metadata key when the MESSAGE event represents a metadata message.
         *
         * @type {string|undefined}
         */
        metadataKey: string|void;
    }

    /**
     * The event interface for the ERROR event.
     *
     * @constructor
     * @extends {goog.events.Event}
     */
    class ErrorEvent extends goog.events.Event {
        constructor();
        
        /**
         * The error status.
         *
         * @type {!goog.net.WebChannel.ErrorStatus}
         */
        status: goog.net.WebChannel.ErrorStatus;
    }

    /**
     * The runtime properties of the WebChannel instance.
     *
     * This class is defined for debugging and monitoring purposes, as well as for
     * runtime functions that the application may choose to manage by itself.
     *
     * @interface
     */
    interface RuntimeProperties {
        
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
         * @return {number} The number of requests (for sending messages to the server)
         * that are pending. If this number is approaching the value of
         * getConcurrentRequestLimit(), client-to-server message delivery may experience
         * a higher latency.
         */
        getPendingRequestCount(): number;
        
        /**
         * For applications to query the current HTTP session id, sent by the server
         * during the initial handshake.
         *
         * @return {?string} the HTTP session id or null if no HTTP session is in use.
         */
        getHttpSessionId(): string;
        
        /**
         * This method generates an in-band commit request to the server, which will
         * ack the commit request as soon as all messages sent prior to this commit
         * request have been committed by the application.
         *
         * Committing a message has a stronger semantics than delivering a message
         * to the application. Detail spec:
         * https://github.com/bidiweb/webchannel/blob/master/commit.md
         *
         * Timeout or cancellation is not supported and the application may have to
         * abort the channel if the commit-ack fails to arrive in time.
         *
         * @param {function()} callback The callback will be invoked once an
         * ack has been received for the current commit or any newly issued commit.
         */
        commit(callback: () => any): void;
        
        /**
         * This method may be used by the application to recover from a peer failure
         * or to enable sender-initiated flow-control.
         *
         * Detail spec: https://github.com/bidiweb/webchannel/blob/master/commit.md
         *
         * @return {number} The total number of messages that have not received
         * commit-ack from the server; or if no commit has been issued, the number
         * of messages that have not been delivered to the server application.
         */
        getNonAckedMessageCount(): number;
        
        /**
         * A low water-mark message count to notify the application when the
         * flow-control condition is cleared, that is, when the application is
         * able to send more messages.
         *
         * We expect the application to configure a high water-mark message count,
         * which is checked via getNonAckedMessageCount(). When the high water-mark
         * is exceeded, the application should install a callback via this method
         * to be notified when to start to send new messages.
         *
         * @param {number} count The low water-mark count. It is an error to pass
         * a non-positive value.
         * @param {function()} callback The call back to notify the application
         * when NonAckedMessageCount is below the specified low water-mark count.
         * Any previously registered callback is cleared. This new callback will
         * be cleared once it has been fired, or when the channel is closed or aborted.
         */
        notifyNonAckedMessageCount(count: number, callback: () => any): void;
        
        /**
         * This method registers a callback to handle the commit request sent
         * by the server. Commit protocol spec:
         * https://github.com/bidiweb/webchannel/blob/master/commit.md
         *
         * @param {function(!Object)} callback The callback will take an opaque
         * commitId which needs be passed back to the server when an ack-commit
         * response is generated by the client application, via ackCommit().
         */
        onCommit(callback: (arg0: Object) => any): void;
        
        /**
         * This method is used by the application to generate an ack-commit response
         * for the given commitId. Commit protocol spec:
         * https://github.com/bidiweb/webchannel/blob/master/commit.md
         *
         * @param {!Object} commitId The commitId which denotes the commit request
         * from the server that needs be ack'ed.
         */
        ackCommit(commitId: Object): void;
        
        /**
         * @return {number} The last HTTP status code received by the channel.
         */
        getLastStatusCode(): number;
    }

    /**
     * A request header to indicate to the server the messaging protocol
     * each HTTP message is speaking.
     *
     * @type {string}
     */
    var X_CLIENT_PROTOCOL: string;

    /**
     * The value for x-client-protocol when the messaging protocol is WebChannel.
     *
     * @type {string}
     */
    var X_CLIENT_PROTOCOL_WEB_CHANNEL: string;

    /**
     * A response header for the server to signal the wire-protocol that
     * the browser establishes with the server (or proxy), e.g. "spdy" (aka http/2)
     * "quic". This information avoids the need to use private APIs to decide if
     * HTTP requests are multiplexed etc.
     *
     * @type {string}
     */
    var X_CLIENT_WIRE_PROTOCOL: string;

    /**
     * A response header for the server to send back the HTTP session id as part of
     * the initial handshake. The value of the HTTP session id is opaque to the
     * WebChannel protocol.
     *
     * @type {string}
     */
    var X_HTTP_SESSION_ID: string;

    /**
     * A response header for the server to send back any initial response data as a
     * header to avoid any possible buffering by an intermediary, which may
     * be undesired during the handshake.
     *
     * @type {string}
     */
    var X_HTTP_INITIAL_RESPONSE: string;

    /**
     * A request header for specifying the content-type of WebChannel messages,
     * e.g. application-defined JSON encoding styles. Currently this header
     * is sent by the client via initMessageHeaders when the channel is opened.
     *
     * @type {string}
     */
    var X_WEBCHANNEL_CONTENT_TYPE: string;

    /**
     * A request header for specifying the client profile in order to apply
     * customized config params on the server side, e.g. timeouts.
     *
     * @type {string}
     */
    var X_WEBCHANNEL_CLIENT_PROFILE: string;
}

declare module goog.net.WebChannel.FailureRecovery {

    /**
     * Enum to indicate the current recovery state.
     *
     * @enum {string}
     */
    type State = string;
    var State: {
        INIT: State;
        FAILED: State;
        RECOVERING: State;
        CLOSED: State;
    };

    /**
     * Enum to indicate different failure conditions as detected by the webchannel
     * runtime.
     *
     * This enum is to be used only between the runtime and FailureRecovery module,
     * and new states are expected to be introduced in future.
     *
     * @enum {string}
     */
    type FailureCondition = string;
    var FailureCondition: {
        HTTP_ERROR: FailureCondition;
        ABORT: FailureCondition;
        TIMEOUT: FailureCondition;
        EXCEPTION: FailureCondition;
    };
}
