declare module goog.ui.equation {

    /**
     * Constructs a new menu palette.
     * @param {goog.ui.equation.PaletteManager} paletteManager The
     *     manager of the palette.
     * @extends {goog.ui.equation.Palette}
     * @constructor
     * @final
     */
    export class MenuPalette extends goog.ui.equation.Palette {
        constructor(paletteManager: goog.ui.equation.PaletteManager);
        
        /**
         * The CSS class name for the palette.
         * @type {string}
         */
        static CSS_CLASS: string;
        
        /**
         * Overrides the setVisible method to make menu palette always visible.
         * @param {boolean} visible Whether to show or hide the component.
         * @param {boolean=} opt_force If true, doesn't check whether the component
         *     already has the requested visibility, and doesn't dispatch any events.
         * @return {boolean} Whether the visibility was changed.
         * @override
         */
        setVisible(visible: boolean, opt_force?: boolean): boolean;
    }

    /**
     * The renderer for menu palette.
     * @extends {goog.ui.equation.PaletteRenderer}
     * @constructor
     * @final
     */
    export class MenuPaletteRenderer extends goog.ui.equation.PaletteRenderer {
        constructor();
    }
}
