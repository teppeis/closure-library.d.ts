declare module goog.ui.equation {

    /**
     * User interface for TeX equation editor tab pane.
     * @param {Object} context The context this Tex editor pane runs in.
     * @param {string} helpUrl The help link URL.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
     * @constructor
     * @extends {goog.ui.equation.EditorPane}
     * @final
     */
    export class TexPane extends goog.ui.equation.EditorPane {
        constructor(context: Object, helpUrl: string, opt_domHelper?: goog.dom.DomHelper);
        
        /**
         * The CSS class name for the preview container.
         * @type {string}
         */
        static PREVIEW_CONTAINER_CSS_CLASS: string;
        
        /**
         * The CSS class name for section titles.
         * @type {string}
         */
        static SECTION_TITLE_CSS_CLASS: string;
        
        /**
         * The CSS class name for section titles that float left.
         * @type {string}
         */
        static SECTION_TITLE_FLOAT_CSS_CLASS: string;
        
        /**
         * The CSS id name for the link to "Learn more".
         * @type {string}
         */
        static SECTION_LEARN_MORE_CSS_ID: string;
        
        /**
         * The CSS class name for the Tex editor.
         * @type {string}
         */
        static TEX_EDIT_CSS_CLASS: string;
        
        /**
         * The CSS class name for the preview container.
         * @type {string}
         */
        static WARNING_CLASS: string;
    }
}
