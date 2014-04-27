declare module goog.editor {

    /**
     * Commands that the editor can excute via execCommand or queryCommandValue.
     * @enum {string}
     */
    export interface Command {
        UNDO: string;
        REDO: string;
        LINK: string;
        FORMAT_BLOCK: string;
        INDENT: string;
        OUTDENT: string;
        REMOVE_FORMAT: string;
        STRIKE_THROUGH: string;
        HORIZONTAL_RULE: string;
        SUBSCRIPT: string;
        SUPERSCRIPT: string;
        UNDERLINE: string;
        BOLD: string;
        ITALIC: string;
        FONT_SIZE: string;
        FONT_FACE: string;
        FONT_COLOR: string;
        EMOTICON: string;
        EQUATION: string;
        BACKGROUND_COLOR: string;
        ORDERED_LIST: string;
        UNORDERED_LIST: string;
        TABLE: string;
        JUSTIFY_CENTER: string;
        JUSTIFY_FULL: string;
        JUSTIFY_RIGHT: string;
        JUSTIFY_LEFT: string;
        BLOCKQUOTE: string;
        DIR_LTR: string;
        DIR_RTL: string;
        IMAGE: string;
        EDIT_HTML: string;
        UPDATE_LINK_BUBBLE: string;
        DEFAULT_TAG: string;
        CLEAR_LOREM: string;
        UPDATE_LOREM: string;
        USING_LOREM: string;
        MODAL_LINK_EDITOR: string;
    }
}
