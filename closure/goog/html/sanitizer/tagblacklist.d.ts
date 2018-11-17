declare module goog.html.sanitizer {

    /**
     * A list of tags which should be removed entirely from the DOM, rather than
     * merely being made inert. In that sense, this is not a "true" blacklist
     * because removing a tag here without adding it to the whitelist does not have
     * security implications. Tag names must be in all caps. Note that even if
     * TEMPLATE is removed from this blacklist (or even whitelisted) it will
     * continue to be removed from the HTML, as TEMPLATE is used interally to
     * denote nodes which should not be added to the sanitized HTML.
     * @const @dict {boolean}
     */
    var TagBlacklist: any;
}
