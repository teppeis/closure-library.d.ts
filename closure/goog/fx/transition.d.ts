declare module goog {
    function require(name: 'goog.fx.Transition.EventType'): typeof goog.fx.Transition.EventType;
}

declare module goog.fx {

    /**
     * An interface for programmatic transition. Must extend
     * `goog.events.EventTarget`.
     * @interface
     */
    interface Transition {
        
        /**
         * @type {function()}
         * Plays the transition.
         */
        play: () => any;
        
        /**
         * @type {function()}
         * Stops the transition.
         */
        stop: () => any;
    }
}

declare module goog.fx.Transition {

    /**
     * Transition event types.
     * @enum {string}
     */
    type EventType = string;
    var EventType: {
        PLAY: EventType;
        BEGIN: EventType;
        RESUME: EventType;
        END: EventType;
        STOP: EventType;
        FINISH: EventType;
        PAUSE: EventType;
    };
}
