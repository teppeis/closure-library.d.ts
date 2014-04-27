declare module goog.fx {

    /**
     * Constructor for AnimationQueue object.
     *
     * @constructor
     * @extends {goog.fx.TransitionBase}
     */
    export class AnimationQueue extends goog.fx.TransitionBase {
        constructor();
        
        /**
         * Pushes an Animation to the end of the queue.
         * @param {goog.fx.TransitionBase} animation The animation to add to the queue.
         */
        add(animation: goog.fx.TransitionBase): void;
        
        /**
         * Removes an Animation from the queue.
         * @param {goog.fx.Animation} animation The animation to remove.
         */
        remove(animation: goog.fx.Animation): void;
        
        /**
         * Handles the event that an animation has finished.
         * @param {goog.events.Event} e The finishing event.
         * @protected
         */
        onAnimationFinish(e: goog.events.Event): void;
    }

    /**
     * Constructor for AnimationParallelQueue object.
     * @constructor
     * @extends {goog.fx.AnimationQueue}
     */
    export class AnimationParallelQueue extends goog.fx.AnimationQueue {
        constructor();
    }

    /**
     * Constructor for AnimationSerialQueue object.
     * @constructor
     * @extends {goog.fx.AnimationQueue}
     */
    export class AnimationSerialQueue extends goog.fx.AnimationQueue {
        constructor();
    }
}
