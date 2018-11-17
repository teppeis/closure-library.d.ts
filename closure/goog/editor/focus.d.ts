declare module goog {
    function require(name: 'goog.editor.focus'): typeof goog.editor.focus;
}

declare module goog.editor.focus {

    /**
     * Change focus to the given input field and set cursor to end of current text.
     * @param {Element} inputElem Input DOM element.
     * @suppress {strictMissingProperties} Part of the go/strict_warnings_migration
     */
    function focusInputField(inputElem: Element): void;
}
