declare module goog.ui {

    /**
     * Creates a new id generator.
     * @constructor
     * @final
     */
    export class IdGenerator {
        constructor();
        
        /**
         * Gets the next unique ID.
         * @return {string} The next unique identifier.
         */
        getNextUniqueId(): string;
    }
}
