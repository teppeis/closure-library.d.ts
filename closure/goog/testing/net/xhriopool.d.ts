declare module goog {
    function require(name: 'goog.testing.net.XhrIoPool'): typeof goog.testing.net.XhrIoPool;
}

declare module goog.testing.net {

    /**
     * A pool containing a single mock XhrIo object.
     *
     * @param {goog.testing.net.XhrIo=} opt_xhr The mock XhrIo object.
     * @constructor
     * @extends {goog.net.XhrIoPool}
     * @final
     */
    class XhrIoPool extends goog.net.XhrIoPool {
        constructor(opt_xhr?: goog.testing.net.XhrIo);
        
        /**
         * Get the mock XhrIo used by this pool.
         *
         * @return {!goog.testing.net.XhrIo} The mock XhrIo.
         */
        getXhr(): goog.testing.net.XhrIo;
    }
}
