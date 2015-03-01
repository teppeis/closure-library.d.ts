declare module goog {
    function require(name: 'goog.editor.BrowserFeature'): typeof goog.editor.BrowserFeature;
}

declare module goog.editor {

    /**
     * Maps browser quirks to boolean values, detailing what the current
     * browser supports.
     * @const
     */
    var BrowserFeature: any;
}
