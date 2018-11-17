declare module goog {
    function require(name: 'goog.dom.HtmlElement'): typeof goog.dom.HtmlElement;
}

declare module goog.dom {

    /**
     * This subclass of HTMLElement is used when only a HTMLElement is possible and
     * not any of its subclasses. Normally, a type can refer to an instance of
     * itself or an instance of any subtype. More concretely, if HTMLElement is used
     * then the compiler must assume that it might still be e.g. HTMLScriptElement.
     * With this, the type check knows that it couldn't be any special element.
     *
     * @constructor
     * @extends {HTMLElement}
     */
    class HtmlElement extends HTMLElement {
        constructor();
    }
}
