declare module goog.net.streams {

    /**
     * This interface represents a readable stream.
     *
     * @interface
     */
    interface NodeReadableStream {
        
        /**
         * Register a callback to handle I/O events.
         *
         * See https://iojs.org/api/events.html
         *
         * Note that under the object mode, an event of DATA will deliver a message
         * of 1) JSON compliant JS object, including arrays; or 2) an ArrayBuffer.
         *
         * Ordering: messages will be delivered to callbacks in their registration
         * order. There is no ordering between on() and once() callbacks.
         *
         * Exceptions from callbacks will be caught and ignored.
         *
         * @param {string} eventType The event type
         * @param {function(!Object=)} callback The call back to handle the event with
         * an optional input object
         * @return {goog.net.streams.NodeReadableStream} this object
         */
        on(eventType: string, callback: (arg0?: Object) => any): goog.net.streams.NodeReadableStream;
        
        /**
         * Register a callback to handle I/O events. This is an alias to on().
         *
         * @param {string} eventType The event type
         * @param {function(!Object=)} callback The call back to handle the event with
         * an optional input object
         * @return {goog.net.streams.NodeReadableStream} this object
         */
        addListener(eventType: string, callback: (arg0?: Object) => any): goog.net.streams.NodeReadableStream;
        
        /**
         * Unregister an existing callback, including one-time callbacks.
         *
         * @param {string} eventType The event type
         * @param {function(!Object=)} callback The call back to unregister
         * @return {goog.net.streams.NodeReadableStream} this object
         */
        removeListener(eventType: string, callback: (arg0?: Object) => any): goog.net.streams.NodeReadableStream;
        
        /**
         * Register a one-time callback to handle I/O events.
         *
         * @param {string} eventType The event type
         * @param {function(!Object=)} callback The call back to handle the event with
         * an optional input object
         * @return {goog.net.streams.NodeReadableStream} this object
         */
        once(eventType: string, callback: (arg0?: Object) => any): goog.net.streams.NodeReadableStream;
    }
}

declare module goog.net.streams.NodeReadableStream {

    /**
     * Read events for the stream.
     * @enum {string}
     */
    type EventType = string;
    var EventType: {
        READABLE: EventType;
        DATA: EventType;
        END: EventType;
        CLOSE: EventType;
        ERROR: EventType;
    };
}
