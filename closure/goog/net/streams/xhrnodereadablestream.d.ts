declare module goog {
    function require(name: 'goog.net.streams.XhrNodeReadableStream'): typeof goog.net.streams.XhrNodeReadableStream;
}

declare module goog.net.streams {

    /**
     * The XhrNodeReadableStream class.
     *
     * @param {!goog.net.streams.XhrStreamReader} xhrReader The XhrStreamReader
     *    object that handles the events of the underlying Xhr.
     * @constructor
     * @implements {goog.net.streams.NodeReadableStream}
     * @struct
     * @final
     * @package
     */
    class XhrNodeReadableStream {
        constructor(xhrReader: goog.net.streams.XhrStreamReader);
    }
}
