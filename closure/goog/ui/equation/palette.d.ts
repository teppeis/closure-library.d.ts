declare module goog.ui.equation {

    /**
     * Constructs a new palette.
     * @param {goog.ui.equation.PaletteManager} paletteManager The
     *     manager of the palette.
     * @param {goog.ui.equation.Palette.Type} type The type of the
     *     palette.
     * @param {number} spriteX Coordinate of first icon in sprite.
     * @param {number} spriteY Coordinate of top of all icons in sprite.
     * @param {number} itemWidth Pixel width of each palette icon.
     * @param {number} itemHeight Pixel height of each palette icon.
     * @param {Array.<string>=} opt_actions An optional action list for palette
     *     elements. The number of actions determine the number of palette
     *     elements.
     * @param {goog.ui.PaletteRenderer=} opt_renderer Optional customized renderer,
     *     defaults to {@link goog.ui.PaletteRenderer}.
     * @extends {goog.ui.Palette}
     * @constructor
     */
    export class Palette extends goog.ui.Palette {
        constructor(paletteManager: goog.ui.equation.PaletteManager, type: goog.ui.equation.Palette.Type, spriteX: number, spriteY: number, itemWidth: number, itemHeight: number, opt_actions?: Array<string>, opt_renderer?: goog.ui.PaletteRenderer);
        
        /**
         * The CSS class name for the palette.
         * @type {string}
         */
        static CSS_CLASS: string;
        
        /**
         * Returns the type of the palette.
         * @return {goog.ui.equation.Palette.Type} The type of the palette.
         */
        getType(): goog.ui.equation.Palette.Type;
        
        /**
         * Returns the palette manager.
         * @return {goog.ui.equation.PaletteManager} The palette manager
         *     that manages all the palette.
         */
        getPaletteManager(): goog.ui.equation.PaletteManager;
        
        /**
         * Returns actions for this palette.
         * @return {Array.<string>} The palette actions.
         */
        getActions(): Array<string>;
        
        /**
         * Returns the action for a given index.
         * @param {number} index The index of the action to be retrieved.
         * @return {string?} The action for given index, or {@code null} if action is
         *     not found.
         */
        getAction(index: number): string;
        
        /**
         * Handles mouseup events. Overrides {@link goog.ui.Palette#handleMouseUp}
         * by dispatching a {@link goog.ui.equation.PaletteEvent}.
         * @param {goog.events.Event} e Mouse event to handle.
         * @override
         */
        handleMouseUp(e: goog.events.Event): void;
        
        /**
         * Handles mouse out events. Overrides {@link goog.ui.Palette#handleMouseOut}
         * by deactivate the palette.
         * @param {goog.events.BrowserEvent} e Mouse event to handle.
         * @override
         */
        handleMouseOut(e: goog.events.BrowserEvent): void;
        
        /**
         * Handles mouse over events. Overrides {@link goog.ui.Palette#handleMouseOver}
         * by stop deactivating the palette. When mouse leaves the palettes, the
         * palettes will be deactivated after a centain period of time. Reentering the
         * palettes inside this time will stop the timer and cancel the deactivation.
         * @param {goog.events.BrowserEvent} e Mouse event to handle.
         * @override
         */
        handleMouseOver(e: goog.events.BrowserEvent): void;
    }

    /**
     * The event that palettes dispatches.
     * @param {string} type Type of the event.
     * @param {goog.ui.equation.Palette} palette The palette that the
     *     event is fired on.
     * @param {Element=} opt_target The optional target of the event.
     * @constructor
     * @extends {goog.events.Event}
     * @final
     */
    export class PaletteEvent extends goog.events.Event {
        constructor(type: string, palette: goog.ui.equation.Palette, opt_target?: Element);
        
        /**
         * Returns the palette that this event is fired from.
         * @return {goog.ui.equation.Palette} The palette this event is
         *     fired from.
         */
        getPalette(): goog.ui.equation.Palette;
    }

    /**
     * The renderer for palette.
     * @extends {goog.ui.PaletteRenderer}
     * @constructor
     */
    export class PaletteRenderer extends goog.ui.PaletteRenderer {
        constructor();
        
        /**
         * Returns the CSS class name for the palette item.
         * @return {string} The CSS class name of the palette item.
         */
        getItemCssClass(): string;
    }
}

declare module goog.ui.equation.Palette {

    /**
     * The type of possible palettes. They are made short to minimize JS size.
     * @enum {string}
     */
    export interface Type {
        MENU: string;
        GREEK: string;
        SYMBOL: string;
        COMPARISON: string;
        MATH: string;
        ARROW: string;
    }
}

declare module goog.ui.equation.PaletteEvent {

    /**
     * The type of events that can be fired on palettes.
     * @enum {string}
     */
    export interface Type {
        ACTION: string;
    }
}
