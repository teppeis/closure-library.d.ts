declare module goog.editor.plugins {

    /**
     * Functions to style text (e.g. underline, make bold, etc.)
     * @constructor
     * @extends {goog.editor.Plugin}
     */
    export class BasicTextFormatter extends goog.editor.Plugin {
        constructor();
        
        /**
         * Logging object.
         * @type {goog.log.Logger}
         * @protected
         * @override
         */
        logger: goog.log.Logger;
        
        /**
         * Whether the string corresponds to a command this plugin handles.
         * @param {string} command Command string to check.
         * @return {boolean} Whether the string corresponds to a command
         *     this plugin handles.
         * @override
         */
        isSupportedCommand(command: string): boolean;
        
        /**
         * Execute a user-initiated command.
         * @param {string} command Command to execute.
         * @param {...*} var_args For color commands, this
         *     should be the hex color (with the #). For FORMAT_BLOCK, this should be
         *     the goog.editor.plugins.BasicTextFormatter.BLOCK_COMMAND.
         *     It will be unused for other commands.
         * @return {Object|undefined} The result of the command.
         * @override
         */
        execCommandInternal(command: string, ...var_args: any[]): Object;
        
        /**
         * Gets the command value.
         * @param {string} command The command value to get.
         * @return {string|boolean|null} The current value of the command in the given
         *     selection.  NOTE: This return type list is not documented in MSDN or MDC
         *     and has been constructed from experience.  Please update it
         *     if necessary.
         * @override
         */
        queryCommandValue(command: string): string;
    }
}

declare module goog.editor.plugins.BasicTextFormatter {

    /**
     * Commands implemented by this plugin.
     * @enum {string}
     */
    export interface COMMAND {
        LINK: string;
        FORMAT_BLOCK: string;
        INDENT: string;
        OUTDENT: string;
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
        BACKGROUND_COLOR: string;
        ORDERED_LIST: string;
        UNORDERED_LIST: string;
        JUSTIFY_CENTER: string;
        JUSTIFY_FULL: string;
        JUSTIFY_RIGHT: string;
        JUSTIFY_LEFT: string;
    }
}
