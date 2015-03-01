declare module goog {
    function require(name: 'goog.ui.INLINE_BLOCK_CLASSNAME'): typeof goog.ui.INLINE_BLOCK_CLASSNAME;
}

declare module goog.ui {

    /**
     * CSS class name for applying the "display: inline-block" property in a
     * cross-browser way.
     * @type {string}
     */
    var INLINE_BLOCK_CLASSNAME: string;
}
