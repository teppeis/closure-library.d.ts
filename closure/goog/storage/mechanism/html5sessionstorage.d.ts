declare module goog.storage.mechanism {

    /**
     * Provides a storage mechanism that uses HTML5 session storage.
     *
     * @constructor
     * @extends {goog.storage.mechanism.HTML5WebStorage}
     */
    export class HTML5SessionStorage extends goog.storage.mechanism.HTML5WebStorage {
        constructor();
    }
}
