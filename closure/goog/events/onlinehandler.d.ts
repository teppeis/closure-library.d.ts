declare module goog.events {

    /**
     * Basic object for detecting whether the online state changes.
     * @constructor
     * @extends {goog.events.EventTarget}
     * @implements {goog.net.NetworkStatusMonitor}
     */
    export class OnlineHandler extends goog.events.EventTarget {
        constructor();
    }
}

declare module goog.events.OnlineHandler {

    /**
     * Enum for the events dispatched by the OnlineHandler.
     * @enum {string}
     * @deprecated Use goog.net.NetworkStatusMonitor.EventType instead.
     */
    export interface EventType extends goog.net.NetworkStatusMonitor.EventType {}
}
