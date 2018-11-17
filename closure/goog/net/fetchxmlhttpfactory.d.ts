declare module goog {
    function require(name: 'goog.net.FetchXmlHttpFactory'): typeof goog.net.FetchXmlHttpFactory;
    function require(name: 'goog.net.FetchXmlHttp'): typeof goog.net.FetchXmlHttp;
}

declare module goog.net {

    /**
     * Factory for creating Xhr objects that uses the native fetch() method.
     * https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
     * Note that this factory is intended for use in Service Worker only.
     * @param {!WorkerGlobalScope} worker The Service Worker global scope.
     * @extends {goog.net.XmlHttpFactory}
     * @struct
     * @constructor
     */
    class FetchXmlHttpFactory extends goog.net.XmlHttpFactory {
        constructor(worker: WorkerGlobalScope);
        
        /**
         * @param {!RequestCredentials} credentialsMode The credentials mode of the
         *     Service Worker fetch.
         */
        setCredentialsMode(credentialsMode: RequestCredentials): void;
        
        /**
         * @param {!RequestCache} cacheMode The cache mode of the Service Worker fetch.
         */
        setCacheMode(cacheMode: RequestCache): void;
    }

    /**
     * FetchXmlHttp object constructor.
     * @param {!WorkerGlobalScope} worker
     * @extends {goog.events.EventTarget}
     * @implements {goog.net.XhrLike}
     * @constructor
     * @struct
     */
    class FetchXmlHttp extends goog.events.EventTarget {
        constructor(worker: WorkerGlobalScope);
        
        /**
         * @param {!RequestCredentials} credentialsMode The credentials mode of the
         *     Service Worker fetch.
         */
        setCredentialsMode(credentialsMode: RequestCredentials): void;
        
        /**
         * @param {!RequestCache} cacheMode The cache mode of the Service Worker fetch.
         */
        setCacheMode(cacheMode: RequestCache): void;
    }
}

declare module goog.net.FetchXmlHttp {

    /**
     * State of the requests.
     * @enum {number}
     */
    type RequestState = number;
    var RequestState: {
        UNSENT: RequestState;
        OPENED: RequestState;
        HEADER_RECEIVED: RequestState;
        LOADING: RequestState;
        DONE: RequestState;
    };
}
