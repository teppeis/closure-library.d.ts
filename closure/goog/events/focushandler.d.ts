declare module goog.events {

    /**
     * This event handler allows you to catch focus events when descendants gain or
     * loses focus.
     * @param {Element|Document} element  The node to listen on.
     * @constructor
     * @extends {goog.events.EventTarget}
     * @final
     */
    export class FocusHandler extends goog.events.EventTarget {
        constructor(element: Element);
        
        /**
         * This handles the underlying events and dispatches a new event.
         * @param {goog.events.BrowserEvent} e  The underlying browser event.
         */
        handleEvent(e: goog.events.BrowserEvent): void;
    }
}

declare module goog.events.FocusHandler {

    /**
     * Enum type for the events fired by the focus handler
     * @enum {string}
     */
    export interface EventType {
        FOCUSIN: string;
        FOCUSOUT: string;
    }
}
