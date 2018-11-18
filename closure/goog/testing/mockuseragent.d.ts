declare module goog {
    function require(name: 'goog.testing.MockUserAgent'): typeof goog.testing.MockUserAgent;
}

declare module goog.testing {

    /**
     * Class for unit testing code that uses goog.userAgent.
     *
     * @extends {goog.Disposable}
     * @constructor
     * @final
     */
    class MockUserAgent extends goog.Disposable {
        constructor();
        
        /**
         * Installs this MockUserAgent.
         */
        install(): void;
        
        /**
         * @return {?string} The userAgent set in this class.
         */
        getUserAgentString(): string;
        
        /**
         * @param {string} userAgent The desired userAgent string to use.
         */
        setUserAgentString(userAgent: string): void;
        
        /**
         * @return {?Object} The Navigator set in this class.
         */
        getNavigator(): Object;
        
        /**
         * @return {?Navigator} The Navigator set in this class.
         */
        getNavigatorTyped(): Navigator;
        
        /**
         * @param {Object} navigator The desired Navigator object to use.
         */
        setNavigator(navigator: Object): void;
        
        /**
         * @return {number|undefined} The documentMode set in this class.
         */
        getDocumentMode(): number|void;
        
        /**
         * @param {number} documentMode The desired documentMode to use.
         */
        setDocumentMode(documentMode: number): void;
        
        /**
         * Uninstalls the MockUserAgent.
         */
        uninstall(): void;
    }
}
