declare module goog {
    function require(name: 'goog.testing.messaging.MockMessageEvent'): typeof goog.testing.messaging.MockMessageEvent;
}

declare module goog.testing.messaging {

    /**
     * Creates a new fake MessageEvent.
     *
     * @param {*} data The data of the message.
     * @param {string=} opt_origin The origin of the message, for server-sent and
     *     cross-document events.
     * @param {string=} opt_lastEventId The last event ID, for server-sent events.
     * @param {Window=} opt_source The proxy for the source window, for
     *     cross-document events.
     * @param {Array<MessagePort>=} opt_ports The Array of ports sent with the
     *     message, for cross-document and channel events.
     * @extends {goog.testing.events.Event}
     * @constructor
     * @final
     */
    class MockMessageEvent extends goog.testing.events.Event {
        constructor(data: any, opt_origin?: string, opt_lastEventId?: string, opt_source?: Window, opt_ports?: Array<MessagePort>);
        
        /**
         * Wraps a new fake MessageEvent in a BrowserEvent, like how a real MessageEvent
         * would be wrapped.
         *
         * @param {*} data The data of the message.
         * @param {string=} opt_origin The origin of the message, for server-sent and
         *     cross-document events.
         * @param {string=} opt_lastEventId The last event ID, for server-sent events.
         * @param {Window=} opt_source The proxy for the source window, for
         *     cross-document events.
         * @param {Array<MessagePort>=} opt_ports The Array of ports sent with the
         *     message, for cross-document and channel events.
         * @return {!goog.events.BrowserEvent} The wrapping event.
         */
        static wrap(data: any, opt_origin?: string, opt_lastEventId?: string, opt_source?: Window, opt_ports?: Array<MessagePort>): goog.events.BrowserEvent;
    }
}
