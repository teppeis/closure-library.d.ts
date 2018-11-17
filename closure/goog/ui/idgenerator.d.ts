declare module goog {
    function require(name: 'goog.ui.IdGenerator'): typeof goog.ui.IdGenerator;
}

declare module goog.ui {

    /**
     * Creates a new id generator.
     * @constructor
     * @final
     */
    class IdGenerator {
        constructor();
        
        /**
         * Sets the ID prefix for this singleton. This is a temporary workaround to be
         * backwards compatible with code relying on the undocumented, but consistent,
         * behavior. In the future this will be removed and the prefix will be set to
         * a randomly generated string.
         * @param {string} idPrefix
         */
        setIdPrefix(idPrefix: string): void;
        
        /**
         * Gets the next unique ID.
         * @return {string} The next unique identifier.
         */
        getNextUniqueId(): string;
    }
}
