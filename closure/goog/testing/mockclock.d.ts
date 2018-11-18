declare module goog {
    function require(name: 'goog.testing.MockClock'): typeof goog.testing.MockClock;
}

declare module goog.testing {

    /**
     * Class for unit testing code that uses setTimeout and clearTimeout.
     *
     * NOTE: If you are using MockClock to test code that makes use of
     *       goog.fx.Animation, then you must either:
     *
     * 1. Install and dispose of the MockClock in setUpPage() and tearDownPage()
     *    respectively (rather than setUp()/tearDown()).
     *
     * or
     *
     * 2. Ensure that every test clears the animation queue by calling
     *    mockClock.tick(x) at the end of each test function (where `x` is large
     *    enough to complete all animations).
     *
     * Otherwise, if any animation is left pending at the time that
     * MockClock.dispose() is called, that will permanently prevent any future
     * animations from playing on the page.
     *
     * @param {boolean=} opt_autoInstall Install the MockClock at construction time.
     * @constructor
     * @extends {goog.Disposable}
     * @final
     */
    class MockClock extends goog.Disposable {
        constructor(opt_autoInstall?: boolean);
        
        /**
         * Default wait timeout for mocking requestAnimationFrame (in milliseconds).
         *
         * @type {number}
         * @const
         */
        static REQUEST_ANIMATION_FRAME_TIMEOUT: number;
        
        /**
         * ID to use for next timeout.  Timeout IDs must never be reused, even across
         * MockClock instances.
         * @public {number}
         */
        static nextId: any;
        
        /** @type {function():number} */
        oldGoogNow_: () => number;
        
        /**
         * Installs the MockClock by overriding the global object's implementation of
         * setTimeout, setInterval, clearTimeout and clearInterval.
         */
        install(): void;
        
        /**
         * Removes the MockClock's hooks into the global object's functions and revert
         * to their original values.
         */
        uninstall(): void;
        
        /**
         * Resets the MockClock, removing all timeouts that are scheduled and resets
         * the fake timer count.
         */
        reset(): void;
        
        /**
         * Sets the amount of time between when a timeout is scheduled to fire and when
         * it actually fires.
         * @param {number} delay The delay in milliseconds.  May be negative.
         */
        setTimeoutDelay(delay: number): void;
        
        /**
         * @return {number} delay The amount of time between when a timeout is
         *     scheduled to fire and when it actually fires, in milliseconds.  May
         *     be negative.
         */
        getTimeoutDelay(): number;
        
        /**
         * Increments the MockClock's time by a given number of milliseconds, running
         * any functions that are now overdue.
         * @param {number=} opt_millis Number of milliseconds to increment the counter.
         *     If not specified, clock ticks 1 millisecond.
         * @return {number} Current mock time in milliseconds.
         */
        tick(opt_millis?: number): number;
        
        /**
         * Takes a promise and then ticks the mock clock. If the promise successfully
         * resolves, returns the value produced by the promise. If the promise is
         * rejected, it throws the rejection as an exception. If the promise is not
         * resolved at all, throws an exception.
         * Also ticks the general clock by the specified amount.
         * Only works with goog.Thenable, hence goog.Promise. Does NOT work with native
         * browser promises.
         *
         * @param {!goog.Thenable<T>} promise A promise that should be resolved after
         *     the mockClock is ticked for the given opt_millis.
         * @param {number=} opt_millis Number of milliseconds to increment the counter.
         *     If not specified, clock ticks 1 millisecond.
         * @return {T}
         * @template T
         *
         * @deprecated Treating Promises as synchronous values is incompatible with
         *     native promises and async functions. More generally, this code relies on
         *     promises "pumped" by setTimeout which is not done in production code,
         *     even for goog.Promise and results unnatural timing between resolved
         *     promises callback and setTimeout/setInterval callbacks in tests.
         */
        tickPromise<T>(promise: goog.Thenable<T>, opt_millis?: number): T;
        
        /**
         * @return {number} The number of timeouts or intervals that have been
         * scheduled. A setInterval call is only counted once.
         */
        getTimeoutsMade(): number;
        
        /**
         * @return {number} The number of timeout or interval callbacks that have been
         * triggered. For setInterval, each callback is counted separately.
         */
        getCallbacksTriggered(): number;
        
        /**
         * @return {number} The MockClock's current time in milliseconds.
         */
        getCurrentTime(): number;
        
        /**
         * @param {number} timeoutKey The timeout key.
         * @return {boolean} Whether the timer has been set and not cleared,
         *     independent of the timeout's expiration.  In other words, the timeout
         *     could have passed or could be scheduled for the future.  Either way,
         *     this function returns true or false depending only on whether the
         *     provided timeoutKey represents a timeout that has been set and not
         *     cleared.
         */
        isTimeoutSet(timeoutKey: number): boolean;
    }
}

declare module goog.testing.MockClock {

    /**
     * @typedef {{
     *    timeoutKey: number, millis: number,
     *    runAtMillis: number, funcToCall: Function, recurring: boolean}}
     */
    type QueueObjType_ = {timeoutKey: number; millis: number; runAtMillis: number; funcToCall: Function; recurring: boolean};
}
