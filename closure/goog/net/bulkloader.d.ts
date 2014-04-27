declare module goog.net {

    /**
     * Class used to load multiple URIs.
     * @param {Array.<string|goog.Uri>} uris The URIs to load.
     * @constructor
     * @extends {goog.events.EventTarget}
     * @final
     */
    export class BulkLoader extends goog.events.EventTarget {
        constructor(uris: Array<string>);
        
        /**
         * Gets the response texts, in order.
         * @return {Array.<string>} The response texts.
         */
        getResponseTexts(): Array<string>;
        
        /**
         * Gets the request Uris.
         * @return {Array.<string>} The request URIs, in order.
         */
        getRequestUris(): Array<string>;
        
        /**
         * Starts the process of loading the URIs.
         */
        load(): void;
    }
}
