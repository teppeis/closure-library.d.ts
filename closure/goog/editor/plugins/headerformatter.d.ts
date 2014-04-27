declare module goog.editor.plugins {

    /**
     * Applies header styles to text.
     * @constructor
     * @extends {goog.editor.Plugin}
     * @final
     */
    export class HeaderFormatter extends goog.editor.Plugin {
        constructor();
    }
}

declare module goog.editor.plugins.HeaderFormatter {

    /**
     * Commands that can be passed as the optional argument to execCommand.
     * @enum {string}
     */
    export interface HEADER_COMMAND {
        H1: string;
        H2: string;
        H3: string;
        H4: string;
    }
}
