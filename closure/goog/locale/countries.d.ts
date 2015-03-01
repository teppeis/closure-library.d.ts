declare module goog {
    function require(name: 'goog.locale.countries'): typeof goog.locale.countries;
}

declare module goog.locale {

    /**
     * List of codes for countries valid today.
     * @type {!Array<string>}
     */
    var countries: Array<string>;
}
