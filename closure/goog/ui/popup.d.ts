declare module goog {
    function require(name: 'goog.ui.Popup'): typeof goog.ui.Popup;
}

declare module goog.ui {

    /**
     * The Popup class provides functionality for displaying an absolutely
     * positioned element at a particular location in the window. It's designed to
     * be used as the foundation for building controls like a menu or tooltip. The
     * Popup class includes functionality for displaying a Popup near adjacent to
     * an anchor element.
     *
     * This works cross browser and thus does not use IE's createPopup feature
     * which supports extending outside the edge of the brower window.
     *
     * @param {Element=} opt_element A DOM element for the popup.
     * @param {goog.positioning.AbstractPosition=} opt_position A positioning helper
     *     object.
     * @constructor
     * @extends {goog.ui.PopupBase}
     */
    class Popup extends goog.ui.PopupBase {
        constructor(opt_element?: Element, opt_position?: goog.positioning.AbstractPosition);
        
        /**
         * Returns the corner of the popup to used in the positioning algorithm.
         *
         * @return {goog.positioning.Corner} The popup corner used for positioning.
         */
        getPinnedCorner(): goog.positioning.Corner;
        
        /**
         * Sets the corner of the popup to used in the positioning algorithm.
         *
         * @param {goog.positioning.Corner} corner The popup corner used for
         *     positioning.
         */
        setPinnedCorner(corner: goog.positioning.Corner): void;
        
        /**
         * @return {goog.positioning.AbstractPosition} The position helper object
         *     associated with the popup.
         */
        getPosition(): goog.positioning.AbstractPosition;
        
        /**
         * Sets the position helper object associated with the popup.
         *
         * @param {goog.positioning.AbstractPosition} position A position helper object.
         */
        setPosition(position: goog.positioning.AbstractPosition): void;
        
        /**
         * Returns the margin to place around the popup.
         *
         * @return {goog.math.Box?} The margin.
         */
        getMargin(): goog.math.Box;
        
        /**
         * Sets the margin to place around the popup.
         *
         * @param {goog.math.Box|number|null} arg1 Top value or Box.
         * @param {number=} opt_arg2 Right value.
         * @param {number=} opt_arg3 Bottom value.
         * @param {number=} opt_arg4 Left value.
         */
        setMargin(arg1: goog.math.Box|number|void, opt_arg2?: number, opt_arg3?: number, opt_arg4?: number): void;
    }
}
