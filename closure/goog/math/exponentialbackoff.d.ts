declare module goog {
    function require(name: 'goog.math.ExponentialBackoff'): typeof goog.math.ExponentialBackoff;
}

declare module goog.math {

    /**
     * @struct
     * @constructor
     *
     * @param {number} initialValue The initial backoff value.
     * @param {number} maxValue The maximum backoff value.
     * @param {number=} opt_randomFactor When set, adds randomness to the backoff
     *     and decay to avoid a thundering herd problem. Should be a number between
     *     0 and 1, where 0 means no randomness and 1 means a factor of 0x to 2x.
     * @param {number=} opt_backoffFactor The factor to backoff by. Defaults to 2.
     *     Should be a number greater than 1.
     * @param {number=} opt_decayFactor The factor to decay by. Defaults to 2.
     *     Should be a number between greater than one.
     */
    class ExponentialBackoff {
        constructor(initialValue: number, maxValue: number, opt_randomFactor?: number, opt_backoffFactor?: number, opt_decayFactor?: number);
        
        /**
         * Resets the backoff value to its initial value.
         */
        reset(): void;
        
        /**
         * @return {number} The current backoff value.
         */
        getValue(): number;
        
        /**
         * @return {number} The number of times this class has backed off.
         */
        getBackoffCount(): number;
        
        /**
         * @return {number} The number of times this class has decayed.
         */
        getDecayCount(): number;
        
        /**
         * Initiates a backoff.
         */
        backoff(): void;
        
        /**
         * Initiates a decay.
         */
        decay(): void;
    }
}
