declare module goog.editor.plugins {

    /**
     * A plugin that opens the equation editor in a dialog window.
     * @param {string=} opt_helpUrl A URL pointing to help documentation.
     * @constructor
     * @extends {goog.editor.plugins.AbstractDialogPlugin}
     * @final
     */
    export class EquationEditorPlugin extends goog.editor.plugins.AbstractDialogPlugin {
        constructor(opt_helpUrl?: string);
    }
}
