declare module goog {
    function require(name: 'goog.dom.tags'): typeof goog.dom.tags;
}

declare module goog.dom.tags {

    /**
     * The void elements specified by
     * http://www.w3.org/TR/html-markup/syntax.html#void-elements.
     * @const @private {!Object<string, boolean>}
     */
    var VOID_TAGS_: any;

    /**
     * Checks whether the tag is void (with no contents allowed and no legal end
     * tag), for example 'br'.
     * @param {string} tagName The tag name in lower case.
     * @return {boolean}
     */
    function isVoidTag(tagName: string): boolean;
}
