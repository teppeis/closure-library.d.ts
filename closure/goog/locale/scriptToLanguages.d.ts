declare module goog {
    function require(name: 'goog.locale.scriptToLanguages'): typeof goog.locale.scriptToLanguages;
}

declare module goog.locale {

    /**
     * The script code to list of language codes map.
     * @type {!Object<string, !Array<string>>}
     */
    var scriptToLanguages: {[index: string]: Array<string>};
}
