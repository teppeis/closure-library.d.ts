declare module goog {
    function require(name: 'goog.testing.MockRandom'): typeof goog.testing.MockRandom;
}

declare module goog.testing {

    /**
     * Class for unit testing code that uses Math.random.
     *
     * @param {Array<number>} sequence The sequence of numbers to return. This
     *     object will modify this array.
     * @param {boolean=} opt_install Whether to install the MockRandom at
     *     construction time.
     * @extends {goog.Disposable}
     * @constructor
     * @final
     */
    class MockRandom extends goog.Disposable {
        constructor(sequence: Array<number>, opt_install?: boolean);
        
        /**
         * Installs this MockRandom as the system number generator.
         */
        install(): void;
        
        /**
         * @return {number} The next number in the sequence. If there are no more values
         *     left, this will return a random number, unless
         *     `this.strictlyFromSequence_` is true, in which case an error will
         *     be thrown.
         */
        random(): number;
        
        /**
         * @return {boolean} Whether there are more numbers left in the sequence.
         */
        hasMoreValues(): boolean;
        
        /**
         * Injects new numbers into the beginning of the sequence.
         * @param {!Array<number>|number} values Number or array of numbers to inject.
         */
        inject(values: Array<number>|number): void;
        
        /**
         * Uninstalls the MockRandom.
         */
        uninstall(): void;
        
        /**
         * @param {boolean} strictlyFromSequence Whether to throw an exception when
         *     Math.random() is called when there is nothing left in the sequence.
         */
        setStrictlyFromSequence(strictlyFromSequence: boolean): void;
    }
}
