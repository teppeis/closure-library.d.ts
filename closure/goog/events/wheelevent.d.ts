declare module goog.events {

    /**
     * A common class for wheel events. This is used with the WheelHandler.
     *
     * @param {Event} browserEvent Browser event object.
     * @param {goog.events.WheelEvent.DeltaMode} deltaMode The delta mode units of
     *     the wheel event.
     * @param {number} deltaX The number of delta units the user in the X axis.
     * @param {number} deltaY The number of delta units the user in the Y axis.
     * @param {number} deltaZ The number of delta units the user in the Z axis.
     * @constructor
     * @extends {goog.events.BrowserEvent}
     * @final
     */
    class WheelEvent extends goog.events.BrowserEvent {
        constructor(browserEvent: Event, deltaMode: goog.events.WheelEvent.DeltaMode, deltaX: number, deltaY: number, deltaZ: number);
    }
}

declare module goog.events.WheelEvent {

    /**
     * Enum type for the events fired by the wheel handler.
     * @enum {string}
     */
    interface EventType {
        WHEEL: string;
    }

    /**
     * Units for the deltas in a WheelEvent.
     * @enum {number}
     */
    interface DeltaMode {
        PIXEL: number;
        LINE: number;
        PAGE: number;
    }
}
