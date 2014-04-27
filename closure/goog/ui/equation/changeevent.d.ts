declare module goog.ui.equation {

    /**
     * Event fired when equation changes.
     * @constructor
     * @param {boolean} isValid Whether the equation is valid.
     * @extends {goog.events.Event}
     * @final
     */
    export class ChangeEvent extends goog.events.Event {
        constructor(isValid: boolean);
    }
}
