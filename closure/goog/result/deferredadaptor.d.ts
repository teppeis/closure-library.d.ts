declare module goog {
    function require(name: 'goog.result.DeferredAdaptor'): typeof goog.result.DeferredAdaptor;
}

declare module goog.result {

    /**
     * An adaptor from Result to a Deferred, for use with existing Deferred chains.
     *
     * @param {!goog.result.Result} result A result.
     * @constructor
     * @extends {goog.async.Deferred}
     * @final
     * @deprecated Use {@link goog.Promise} instead - http://go/promisemigration
     */
    class DeferredAdaptor extends goog.async.Deferred<any> {
        constructor(result: goog.result.Result);
    }
}
