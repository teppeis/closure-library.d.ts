declare module goog.ui.editor {

    /**
     * Equation editor dialog (based on goog.ui.editor.AbstractDialog).
     * @param {Object} context The context that this dialog runs in.
     * @param {goog.dom.DomHelper} domHelper DomHelper to be used to create the
     *     dialog's dom structure.
     * @param {string} equation Initial equation.
     * @param {string} helpUrl URL pointing to help documentation.
     * @constructor
     * @extends {goog.ui.editor.AbstractDialog}
     * @final
     */
    export class EquationEditorDialog extends goog.ui.editor.AbstractDialog {
        constructor(context: Object, domHelper: goog.dom.DomHelper, equation: string, helpUrl: string);
    }
}
