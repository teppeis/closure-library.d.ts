declare module goog.ui.RoundedPanel {

    /**
     * Enum for specifying which corners to render.
     * @enum {number}
     */
    export interface Corner {
        NONE: number;
        BOTTOM_LEFT: number;
        TOP_LEFT: number;
        LEFT: number;
        TOP_RIGHT: number;
        TOP: number;
        BOTTOM_RIGHT: number;
        BOTTOM: number;
        RIGHT: number;
        ALL: number;
    }

    /**
     * CSS class name suffixes for the elements comprising the RoundedPanel.
     * @enum {string}
     * @private
     */
    export interface Classes_ {
        BACKGROUND: string;
        PANEL: string;
        CONTENT: string;
    }

    /**
     * Factory method that returns an instance of a BaseRoundedPanel.
     * @param {number} radius The radius of the rounded corner(s), in pixels.
     * @param {number} borderWidth The thickness of the border, in pixels.
     * @param {string} borderColor The border color of the panel.
     * @param {string=} opt_backgroundColor The background color of the panel.
     * @param {number=} opt_corners The corners of the panel to be rounded. Any
     *     corners not specified will be rendered as square corners. Will default
     *     to all square corners if not specified.
     * @param {goog.dom.DomHelper=} opt_domHelper The DOM helper object for the
     *     document we want to render in.
     * @return {goog.ui.BaseRoundedPanel} An instance of a
     *     goog.ui.BaseRoundedPanel subclass.
     */
    export function create(radius: number, borderWidth: number, borderColor: string, opt_backgroundColor?: string, opt_corners?: number, opt_domHelper?: goog.dom.DomHelper): goog.ui.BaseRoundedPanel;
}

declare module goog.ui {

    /**
     * Base class for the hierarchy of RoundedPanel classes. Do not
     * instantiate directly. Instead, call goog.ui.RoundedPanel.create().
     * The HTML structure for the RoundedPanel is:
     * <pre>
     * - div (Contains the background and content. Class name: goog-roundedpanel)
     *   - div (Contains the background/rounded corners. Class name:
     *       goog-roundedpanel-bg)
     *   - div (Contains the content. Class name: goog-roundedpanel-content)
     * </pre>
     * @param {number} radius The radius of the rounded corner(s), in pixels.
     * @param {number} borderWidth The thickness of the border, in pixels.
     * @param {string} borderColor The border color of the panel.
     * @param {string=} opt_backgroundColor The background color of the panel.
     * @param {number=} opt_corners The corners of the panel to be rounded. Any
     *     corners not specified will be rendered as square corners. Will default
     *     to all square corners if not specified.
     * @param {goog.dom.DomHelper=} opt_domHelper The DOM helper object for the
     *     document we want to render in.
     * @extends {goog.ui.Component}
     * @constructor
     */
    export class BaseRoundedPanel extends goog.ui.Component {
        constructor(radius: number, borderWidth: number, borderColor: string, opt_backgroundColor?: string, opt_corners?: number, opt_domHelper?: goog.dom.DomHelper);
        
        /**
         * This method performs all the necessary DOM manipulation to create the panel.
         * Overrides {@link goog.ui.Component#decorateInternal}.
         * @param {Element} element The element to decorate.
         * @protected
         * @override
         */
        decorateInternal(element: Element): void;
        
        /**
         * Returns the DOM element containing the actual content.
         * @return {Element} The element containing the actual content (null if none).
         * @override
         */
        getContentElement(): Element;
    }

    /**
     * RoundedPanel class specifically for browsers that support CSS attributes
     * for elements with rounded borders (ex. Safari 3.0+, Firefox 3.0+). Do not
     * instantiate directly. Instead, call goog.ui.RoundedPanel.create().
     * @param {number} radius The radius of the rounded corner(s), in pixels.
     * @param {number} borderWidth The thickness of the border, in pixels.
     * @param {string} borderColor The border color of the panel.
     * @param {string=} opt_backgroundColor The background color of the panel.
     * @param {number=} opt_corners The corners of the panel to be rounded. Any
     *     corners not specified will be rendered as square corners. Will
     *     default to all square corners if not specified.
     * @param {goog.dom.DomHelper=} opt_domHelper The DOM helper object for the
     *     document we want to render in.
     * @extends {goog.ui.BaseRoundedPanel}
     * @constructor
     * @final
     */
    export class CssRoundedPanel extends goog.ui.BaseRoundedPanel {
        constructor(radius: number, borderWidth: number, borderColor: string, opt_backgroundColor?: string, opt_corners?: number, opt_domHelper?: goog.dom.DomHelper);
        
        /**
         * This method performs all the necessary DOM manipulation to create the panel.
         * Overrides {@link goog.ui.Component#decorateInternal}.
         * @param {Element} element The element to decorate.
         * @protected
         * @override
         */
        decorateInternal(element: Element): void;
    }

    /**
     * RoundedPanel class that uses goog.graphics to create the rounded corners.
     * Do not instantiate directly. Instead, call goog.ui.RoundedPanel.create().
     * @param {number} radius The radius of the rounded corner(s), in pixels.
     * @param {number} borderWidth The thickness of the border, in pixels.
     * @param {string} borderColor The border color of the panel.
     * @param {string=} opt_backgroundColor The background color of the panel.
     * @param {number=} opt_corners The corners of the panel to be rounded. Any
     *     corners not specified will be rendered as square corners. Will
     *     default to all square corners if not specified.
     * @param {goog.dom.DomHelper=} opt_domHelper The DOM helper object for the
     *     document we want to render in.
     * @extends {goog.ui.BaseRoundedPanel}
     * @constructor
     * @final
     */
    export class GraphicsRoundedPanel extends goog.ui.BaseRoundedPanel {
        constructor(radius: number, borderWidth: number, borderColor: string, opt_backgroundColor?: string, opt_corners?: number, opt_domHelper?: goog.dom.DomHelper);
        
        /**
         * This method performs all the necessary DOM manipulation to create the panel.
         * Overrides {@link goog.ui.Component#decorateInternal}.
         * @param {Element} element The element to decorate.
         * @protected
         * @override
         */
        decorateInternal(element: Element): void;
    }
}
