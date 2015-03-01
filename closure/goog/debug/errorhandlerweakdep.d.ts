declare module goog {
    function require(name: 'goog.debug.errorHandlerWeakDep'): typeof goog.debug.errorHandlerWeakDep;
}

declare module goog.debug {

    /**
     * Dummy object to work around undefined properties compiler warning.
     * @type {!Object<string,Function>}
     */
    var errorHandlerWeakDep: {[index: string]: Function};
}
