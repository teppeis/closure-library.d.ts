declare module goog {
    function require(name: 'goog.testing.messaging.MockMessagePort'): typeof goog.testing.messaging.MockMessagePort;
}

declare module goog.testing.messaging {

    /**
     * Class for unit-testing code that uses MessagePorts.
     * @param {*} id An opaque identifier, used because message ports otherwise have
     *     no distinguishing characteristics.
     * @param {goog.testing.MockControl} mockControl The mock control used to create
     *     the method mock for #postMessage.
     * @constructor
     * @extends {goog.events.EventTarget}
     * @final
     */
    class MockMessagePort extends goog.events.EventTarget {
        constructor(id: any, mockControl: goog.testing.MockControl);
        
        /**
         * A mock postMessage funciton. Actually an instance of
         * {@link goog.testing.FunctionMock}.
         * @param {*} message The message to send.
         * @param {Array<MessagePort>=} opt_ports Ports to send with the message.
         */
        postMessage(message: any, opt_ports?: Array<MessagePort>): void;
        
        /**
         * Starts the port.
         */
        start(): void;
        
        /**
         * Closes the port.
         */
        close(): void;
    }
}
