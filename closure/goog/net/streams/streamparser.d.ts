declare module goog.net.streams {

    /**
     * This interface represents a stream parser.
     *
     * @interface
     * @package
     */
    interface StreamParser {
        
        /**
         * Checks if the parser is aborted due to invalid input.
         *
         * @return {boolean} true if the input is still valid.
         */
        isInputValid(): boolean;
        
        /**
         * Checks the error message.
         *
         * @return {?string} any debug info on the first invalid input, or null if
         *    the input is still valid.
         */
        getErrorMessage(): string;
        
        /**
         * Parse the new input.
         *
         * Note that there is no Parser state to indicate the end of a stream.
         *
         * @param {string|!ArrayBuffer|!Array<number>} input The input data
         * @throws {!Error} if the input is invalid, and the parser will remain invalid
         *    once an error has been thrown.
         * @return {?Array<string|!Object>} any parsed objects (atomic messages)
         *    in an array, or null if more data needs be read to parse any new object.
         */
        parse(input: string|ArrayBuffer|Array<number>): Array<string|Object>;
    }
}
