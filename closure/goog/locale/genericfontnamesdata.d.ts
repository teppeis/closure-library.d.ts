declare module goog {
    function require(name: 'goog.locale.genericFontNamesData'): typeof goog.locale.genericFontNamesData;
}

declare module goog.locale {

    /**
     * Map from script code or language code to list of pairs of (generic name,
     * font name fallback list).
     * @const {!Object<string, !Array<!Array<string>>>}
     */
    var genericFontNamesData: any;
}
