declare module goog {
    function require(name: 'goog.debug.errorcontext'): typeof goog.debug.errorcontext;
}

declare module goog.debug.errorcontext {

    /**
     * Adds key-value context to the error.
     * @param {!Error} err The error to add context to.
     * @param {string} contextKey Key for the context to be added.
     * @param {string} contextValue Value for the context to be added.
     */
    function addErrorContext(err: Error, contextKey: string, contextValue: string): void;

    /**
     * @param {!Error} err The error to get context from.
     * @return {!Object<string, string>} The context of the provided error.
     */
    function getErrorContext(err: Error): {[index: string]: string};
}
