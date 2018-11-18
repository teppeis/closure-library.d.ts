declare module goog {
    function require(name: 'goog.testing.events.OnlineHandler'): typeof goog.testing.events.OnlineHandler;
}

declare module goog.testing.events {

    /**
     * NetworkStatusMonitor test double.
     * @param {boolean} initialState The initial online state of the mock.
     * @constructor
     * @extends {goog.events.EventTarget}
     * @implements {goog.net.NetworkStatusMonitor}
     * @final
     */
    class OnlineHandler extends goog.events.EventTarget {
        constructor(initialState: boolean);
        
        /**
         * Sets the online state.
         * @param {boolean} newOnlineState The new online state.
         */
        setOnline(newOnlineState: boolean): void;
    }
}
