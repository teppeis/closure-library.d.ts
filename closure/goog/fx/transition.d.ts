declare module goog.fx {

    /**
     * An interface for programmatic transition. Must extend
     * {@code goog.events.EventTarget}.
     * @interface
     */
    export interface Transition {
        
        /**
         * Plays the transition.
         */
        play(): void;
        
        /**
         * Stops the transition.
         */
        stop(): void;
    }
}

declare module goog.fx.Transition {

    /**
     * Transition event types.
     * @enum {string}
     */
    export interface EventType {
        PLAY: string;
        BEGIN: string;
        RESUME: string;
        END: string;
        STOP: string;
        FINISH: string;
        PAUSE: string;
    }
}
