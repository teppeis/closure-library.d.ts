declare module goog {
    function require(name: 'goog.testing.PseudoRandom'): typeof goog.testing.PseudoRandom;
}

declare module goog.testing {

    /**
     * Class for unit testing code that uses Math.random. Generates deterministic
     * random numbers.
     *
     * @param {number=} opt_seed The seed to use.
     * @param {boolean=} opt_install Whether to install the PseudoRandom at
     *     construction time.
     * @extends {goog.Disposable}
     * @constructor
     * @final
     */
    class PseudoRandom extends goog.Disposable {
        constructor(opt_seed?: number, opt_install?: boolean);
        
        /**
         * Constant used as part of the algorithm.
         * @type {number}
         */
        static A: number;
        
        /**
         * Constant used as part of the algorithm. 2^31 - 1.
         * @type {number}
         */
        static M: number;
        
        /**
         * Constant used as part of the algorithm. It is equal to M / A.
         * @type {number}
         */
        static Q: number;
        
        /**
         * Constant used as part of the algorithm. It is equal to M % A.
         * @type {number}
         */
        static R: number;
        
        /**
         * Constant used as part of the algorithm to get values from range [0, 1).
         * @type {number}
         */
        static ONE_OVER_M_MINUS_ONE: number;
        
        /**
         * Installs this PseudoRandom as the system number generator.
         */
        install(): void;
        
        /**
         * Uninstalls the PseudoRandom.
         */
        uninstall(): void;
        
        /**
         * Seed the generator.
         *
         * @param {number=} opt_seed The seed to use.
         */
        seed(opt_seed?: number): void;
        
        /**
         * @return {number} The next number in the sequence.
         */
        random(): number;
    }
}
