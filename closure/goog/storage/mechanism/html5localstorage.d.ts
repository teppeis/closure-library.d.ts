declare module goog.storage.mechanism {

    /**
     * Provides a storage mechanism that uses HTML5 local storage.
     *
     * @constructor
     * @extends {goog.storage.mechanism.HTML5WebStorage}
     */
    export class HTML5LocalStorage extends goog.storage.mechanism.HTML5WebStorage {
        constructor();
    }
}
