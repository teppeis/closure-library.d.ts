declare module goog {
    function require(name: 'goog.testing.messaging.MockPortNetwork'): typeof goog.testing.messaging.MockPortNetwork;
}

declare module goog.testing.messaging {

    /**
     * The fake PortNetwork.
     *
     * @param {!goog.testing.MockControl} mockControl The mock control for creating
     *     the mock message channels.
     * @constructor
     * @implements {goog.messaging.PortNetwork}
     * @final
     */
    class MockPortNetwork {
        constructor(mockControl: goog.testing.MockControl);
        
        /**
         * Get the mock port with the given name.
         * @param {string} name The name of the port to get.
         * @return {!goog.testing.messaging.MockMessageChannel} The mock port.
         * @override
         */
        dial(name: string): goog.testing.messaging.MockMessageChannel;
    }
}
