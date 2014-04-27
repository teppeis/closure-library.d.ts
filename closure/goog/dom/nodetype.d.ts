declare module goog.dom {

    /**
     * Constants for the nodeType attribute in the Node interface.
     *
     * These constants match those specified in the Node interface. These are
     * usually present on the Node object in recent browsers, but not in older
     * browsers (specifically, early IEs) and thus are given here.
     *
     * In some browsers (early IEs), these are not defined on the Node object,
     * so they are provided here.
     *
     * See http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-1950641247
     * @enum {number}
     */
    export interface NodeType {
        ELEMENT: number;
        ATTRIBUTE: number;
        TEXT: number;
        CDATA_SECTION: number;
        ENTITY_REFERENCE: number;
        ENTITY: number;
        PROCESSING_INSTRUCTION: number;
        COMMENT: number;
        DOCUMENT: number;
        DOCUMENT_TYPE: number;
        DOCUMENT_FRAGMENT: number;
        NOTATION: number;
    }
}
