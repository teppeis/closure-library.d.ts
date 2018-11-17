declare module goog {
    function require(name: 'goog.crypt.base64'): typeof goog.crypt.base64;
}

declare module goog.crypt.base64 {

    /**
     * Our default alphabet, shared between
     * ENCODED_VALS and ENCODED_VALS_WEBSAFE
     * @type {string}
     */
    var ENCODED_VALS_BASE: string;

    /**
     * Our default alphabet. Value 64 (=) is special; it means "nothing."
     * @type {string}
     */
    var ENCODED_VALS: string;

    /**
     * Our websafe alphabet.
     * @type {string}
     */
    var ENCODED_VALS_WEBSAFE: string;

    /**
     * Base64-encode an array of bytes.
     *
     * @param {Array<number>|Uint8Array} input An array of bytes (numbers with
     *     value in [0, 255]) to encode.
     * @param {boolean=} opt_webSafe True indicates we should use the alternative
     *     alphabet, which does not require escaping for use in URLs.
     * @return {string} The base64 encoded string.
     */
    function encodeByteArray(input: Array<number>|Uint8Array, opt_webSafe?: boolean): string;

    /**
     * Base64-encode a string.
     *
     * @param {string} input A string to encode.
     * @param {boolean=} opt_webSafe True indicates we should use the alternative
     *     alphabet, which does not require escaping for use in URLs.
     * @return {string} The base64 encoded string.
     */
    function encodeString(input: string, opt_webSafe?: boolean): string;

    /**
     * Base64-decode a string.
     *
     * @param {string} input Input to decode. Any whitespace is ignored, and the
     *     input maybe encoded with either supported alphabet (or a mix thereof).
     * @param {boolean=} opt_webSafe True indicates we should use the alternative
     *     alphabet, which does not require escaping for use in URLs. Note that
     *     passing false may also still allow webSafe input decoding, when the
     *     fallback decoder is used on browsers without native support.
     * @return {string} string representing the decoded value.
     */
    function decodeString(input: string, opt_webSafe?: boolean): string;

    /**
     * Base64-decode a string to an Array of numbers.
     *
     * In base-64 decoding, groups of four characters are converted into three
     * bytes.  If the encoder did not apply padding, the input length may not
     * be a multiple of 4.
     *
     * In this case, the last group will have fewer than 4 characters, and
     * padding will be inferred.  If the group has one or two characters, it decodes
     * to one byte.  If the group has three characters, it decodes to two bytes.
     *
     * @param {string} input Input to decode. Any whitespace is ignored, and the
     *     input maybe encoded with either supported alphabet (or a mix thereof).
     * @param {boolean=} opt_ignored Unused parameter, retained for compatibility.
     * @return {!Array<number>} bytes representing the decoded value.
     */
    function decodeStringToByteArray(input: string, opt_ignored?: boolean): Array<number>;

    /**
     * Base64-decode a string to a Uint8Array.
     *
     * Note that Uint8Array is not supported on older browsers, e.g. IE < 10.
     * @see http://caniuse.com/uint8array
     *
     * In base-64 decoding, groups of four characters are converted into three
     * bytes.  If the encoder did not apply padding, the input length may not
     * be a multiple of 4.
     *
     * In this case, the last group will have fewer than 4 characters, and
     * padding will be inferred.  If the group has one or two characters, it decodes
     * to one byte.  If the group has three characters, it decodes to two bytes.
     *
     * @param {string} input Input to decode. Any whitespace is ignored, and the
     *     input maybe encoded with either supported alphabet (or a mix thereof).
     * @return {!Uint8Array} bytes representing the decoded value.
     */
    function decodeStringToUint8Array(input: string): Uint8Array;
}
