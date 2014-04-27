declare module goog.dom {

    /**
     * Enum of browser capabilities.
     * @enum {boolean}
     */
    export interface BrowserFeature {
        CAN_ADD_NAME_OR_TYPE_ATTRIBUTES: boolean;
        CAN_USE_CHILDREN_ATTRIBUTE: boolean;
        CAN_USE_INNER_TEXT: boolean;
        CAN_USE_PARENT_ELEMENT_PROPERTY: boolean;
        INNER_HTML_NEEDS_SCOPED_ELEMENT: boolean;
    }
}
