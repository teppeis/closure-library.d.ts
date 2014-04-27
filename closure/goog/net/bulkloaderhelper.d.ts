declare module goog.net {

    /**
     * Helper class used to load multiple URIs.
     * @param {Array.<string|goog.Uri>} uris The URIs to load.
     * @constructor
     * @extends {goog.Disposable}
     * @final
     */
    export class BulkLoaderHelper extends goog.Disposable {
        constructor(uris: Array<string>);
        
        /**
         * Gets the URI by id.
         * @param {number} id The id.
         * @return {string|goog.Uri} The URI specified by the id.
         */
        getUri(id: number): string;
        
        /**
         * Gets the URIs.
         * @return {Array.<string|goog.Uri>} The URIs.
         */
        getUris(): Array<string>;
        
        /**
         * Gets the response texts.
         * @return {Array.<string>} The response texts.
         */
        getResponseTexts(): Array<string>;
        
        /**
         * Sets the response text by id.
         * @param {number} id The id.
         * @param {string} responseText The response texts.
         */
        setResponseText(id: number, responseText: string): void;
        
        /**
         * Determines if the load of the URIs is complete.
         * @return {boolean} TRUE iff the load is complete.
         */
        isLoadComplete(): boolean;
    }
}
