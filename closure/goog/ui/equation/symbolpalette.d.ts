declare module goog.ui.equation {

    /**
     * Constructs a new symbols palette.
     * @param {goog.ui.equation.PaletteManager} paletteManager The
     *     manager of the palette.
     * @extends {goog.ui.equation.Palette}
     * @constructor
     * @final
     */
    export class SymbolPalette extends goog.ui.equation.Palette {
        constructor(paletteManager: goog.ui.equation.PaletteManager);
    }
}
