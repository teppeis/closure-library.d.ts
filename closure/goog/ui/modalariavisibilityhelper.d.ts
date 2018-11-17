declare module goog {
    function require(name: 'goog.ui.ModalAriaVisibilityHelper'): typeof goog.ui.ModalAriaVisibilityHelper;
}

declare module goog.ui {

    /**
     * Helper object to control aria visibility of the rest of the page (background)
     * for a given element. Example usage is to restrict screenreader focus to
     * a modal popup while it is visible.
     *
     * WARNING: This will work only if the element is rendered directly in the
     * 'body' element.
     *
     * @param {!Element} element The given element.
     * @param {!goog.dom.DomHelper} domHelper DomHelper for the page.
     * @constructor
     */
    class ModalAriaVisibilityHelper {
        constructor(element: Element, domHelper: goog.dom.DomHelper);
        
        /**
         * Sets aria-hidden on the rest of the page to restrict screen reader focus.
         * Top-level elements with an explicit aria-hidden state are not altered.
         * @param {boolean} hide Whether to hide or show the rest of the page.
         */
        setBackgroundVisibility(hide: boolean): void;
    }
}
