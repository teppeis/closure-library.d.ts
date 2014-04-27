declare module goog.ui.editor {

    /**
     * OK event object for the equation editor dialog.
     * @param {string} equationHtml html containing the equation to put in the
     *     editable field.
     * @constructor
     * @extends {goog.events.Event}
     * @final
     */
    export class EquationEditorOkEvent extends goog.events.Event {
        constructor(equationHtml: string);
        
        /**
         * Event type.
         * @type {goog.ui.editor.AbstractDialog.EventType}
         * @override
         */
        type: goog.ui.editor.AbstractDialog.EventType;
        
        /**
         * HTML containing the equation to put in the editable field.
         * @type {string}
         */
        equationHtml: string;
    }
}
