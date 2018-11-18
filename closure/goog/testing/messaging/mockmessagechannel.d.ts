declare module goog {
    function require(name: 'goog.testing.messaging.MockMessageChannel'): typeof goog.testing.messaging.MockMessageChannel;
}

declare module goog.testing.messaging {

    /**
     * Class for unit-testing code that communicates over a MessageChannel.
     * @param {goog.testing.MockControl} mockControl The mock control used to create
     *   the method mock for #send.
     * @extends {goog.messaging.AbstractChannel}
     * @constructor
     * @final
     */
    class MockMessageChannel extends goog.messaging.AbstractChannel {
        constructor(mockControl: goog.testing.MockControl);
        
        /**
         * A mock send function. Actually an instance of
         * {@link goog.testing.FunctionMock}.
         * @param {string} serviceName The name of the remote service to run.
         * @param {string|!Object} payload The payload to send to the remote page.
         * @override
         */
        send(serviceName: string, payload: string|Object): void;
        
        /**
         * Mocks the receipt of a message. Passes the payload the appropriate service.
         * @param {string} serviceName The service to run.
         * @param {string|!Object} payload The argument to pass to the service.
         */
        receive(serviceName: string, payload: string|Object): void;
    }
}
