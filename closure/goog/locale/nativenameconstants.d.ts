declare module goog {
    function require(name: 'goog.locale.nativeNameConstants'): typeof goog.locale.nativeNameConstants;
}

declare module goog.locale {

    /**
     * Native country and language names
     * @const {!Object<string, !Object<string, string>>}
     */
    var nativeNameConstants: any;
}
