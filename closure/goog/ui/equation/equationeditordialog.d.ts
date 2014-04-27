declare module goog.ui.equation {

    /**
     * User interface for equation editor plugin standalone tests.
     * @constructor
     * @param {string=} opt_equation Encoded equation. If not specified, starts with
     *     an empty equation.
     * @extends {goog.ui.Dialog}
     * @final
     */
    export class EquationEditorDialog extends goog.ui.Dialog {
        constructor(opt_equation?: string);
        
        /**
         * Returns the encoded equation.
         * @return {string} The encoded equation.
         */
        getEquation(): string;
        
        /**
         * Sets the encoded equation.
         * @param {string} equation The encoded equation.
         */
        setEquation(equation: string): void;
        
        /**
         * @return {string} The html code to embed in the document.
         */
        getHtml(): string;
    }
}
