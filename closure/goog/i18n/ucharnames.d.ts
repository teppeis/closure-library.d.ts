declare module goog {
    function require(name: 'goog.i18n.uCharNames'): typeof goog.i18n.uCharNames;
}

declare module goog.i18n.uCharNames {

    /**
     * Gets the name of a character, if available, returns null otherwise.
     * @param {string} ch The character.
     * @return {?string} The name of the character.
     */
    function toName(ch: string): string;

    /**
     * Sets up the character map, lazily.  Some characters are indexed by their
     * decimal value.
     * @protected
     */
    function createCharData(): void;
}
