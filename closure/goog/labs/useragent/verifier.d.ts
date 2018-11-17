declare module goog {
    function require(name: 'goog.labs.useragent.verifier'): typeof goog.labs.useragent.verifier;
}

declare module goog.labs.useragent.verifier {

    /** @const */
    var NOT_IE: any;

    /**
     * Detect the the current IE version using runtime behavior, returns 0
     * if a version of IE is not detected.
     * @return {number}
     */
    function detectIeVersionByBehavior(): number;

    /**
     * Detect the the current IE version using MSIE version presented in the
     * user agent string (This will not detected IE 11 which does not present a
     * MSIE version), or zero if IE is not detected.
     * @return {number}
     */
    function detectIeVersionByNavigator(): number;

    /**
     * Correct the actual IE version based on the Trident version in the user agent
     * string.  This adjusts for IE's "compatiblity modes".
     * @return {number}
     */
    function getCorrectedIEVersionByNavigator(): number;
}
