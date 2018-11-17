declare module goog {
    function require(name: 'goog.text.LoremIpsum'): typeof goog.text.LoremIpsum;
}

declare module goog.text {

    /**
     * Generates random strings of "lorem ipsum" text, based on the word
     * distribution of a sample text, using the words in a dictionary.
     * @constructor
     */
    class LoremIpsum {
        constructor();
        
        /**
         * Pairs of word-lengths that can appear at the beginning of sentences.
         * @type {Array}
         */
        starts_: Array<any>;
        
        /**
         * Generates a single sentence, of random length.
         * @param {boolean=} opt_startWithLorem Whether to start the setnence with the
         *     standard "Lorem ipsum..." first sentence.
         * @return {string} The generated sentence.
         */
        generateSentence(opt_startWithLorem?: boolean): string;
        
        /**
         * Generates a single lorem ipsum paragraph, of random length.
         * @param {boolean=} opt_startWithLorem Whether to start the sentence with the
         *     standard "Lorem ipsum..." first sentence.
         * @return {string} The generated sentence.
         */
        generateParagraph(opt_startWithLorem?: boolean): string;
        
        /**
         * Find the number in the list of values that is closest to the target.
         * @param {Array<number>|Array<string>} values The values.
         * @param {number} target The target value.
         * @return {number} The closest value.
         */
        static chooseClosest(values: Array<number>|Array<string>, target: number): number;
    }
}
