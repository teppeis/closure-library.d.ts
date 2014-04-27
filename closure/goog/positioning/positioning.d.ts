declare module goog.positioning {

    /**
     * Enum for representing an element corner for positioning the popup.
     *
     * The START constants map to LEFT if element directionality is left
     * to right and RIGHT if the directionality is right to left.
     * Likewise END maps to RIGHT or LEFT depending on the directionality.
     *
     * @enum {number}
     */
    export interface Corner {
        TOP_LEFT: number;
        TOP_RIGHT: number;
        BOTTOM_LEFT: number;
        BOTTOM_RIGHT: number;
        TOP_START: number;
        TOP_END: number;
        BOTTOM_START: number;
        BOTTOM_END: number;
    }

    /**
     * Enum for bits in the {@see goog.positioning.Corner) bitmap.
     *
     * @enum {number}
     */
    export interface CornerBit {
        BOTTOM: number;
        RIGHT: number;
        FLIP_RTL: number;
    }

    /**
     * Enum for representing position handling in cases where the element would be
     * positioned outside the viewport.
     *
     * @enum {number}
     */
    export interface Overflow {
        IGNORE: number;
        ADJUST_X: number;
        FAIL_X: number;
        ADJUST_Y: number;
        FAIL_Y: number;
        RESIZE_WIDTH: number;
        RESIZE_HEIGHT: number;
        ADJUST_X_EXCEPT_OFFSCREEN: number;
        ADJUST_Y_EXCEPT_OFFSCREEN: number;
    }

    /**
     * Enum for representing the outcome of a positioning call.
     *
     * @enum {number}
     */
    export interface OverflowStatus {
        NONE: number;
        ADJUSTED_X: number;
        ADJUSTED_Y: number;
        WIDTH_ADJUSTED: number;
        HEIGHT_ADJUSTED: number;
        FAILED_LEFT: number;
        FAILED_RIGHT: number;
        FAILED_TOP: number;
        FAILED_BOTTOM: number;
        FAILED_OUTSIDE_VIEWPORT: number;
    }

    /**
     * Positions a movable element relative to an anchor element. The caller
     * specifies the corners that should touch. This functions then moves the
     * movable element accordingly.
     *
     * @param {Element} anchorElement The element that is the anchor for where
     *    the movable element should position itself.
     * @param {goog.positioning.Corner} anchorElementCorner The corner of the
     *     anchorElement for positioning the movable element.
     * @param {Element} movableElement The element to move.
     * @param {goog.positioning.Corner} movableElementCorner The corner of the
     *     movableElement that that should be positioned adjacent to the anchor
     *     element.
     * @param {goog.math.Coordinate=} opt_offset An offset specified in pixels.
     *    After the normal positioning algorithm is applied, the offset is then
     *    applied. Positive coordinates move the popup closer to the center of the
     *    anchor element. Negative coordinates move the popup away from the center
     *    of the anchor element.
     * @param {goog.math.Box=} opt_margin A margin specified in pixels.
     *    After the normal positioning algorithm is applied and any offset, the
     *    margin is then applied. Positive coordinates move the popup away from the
     *    spot it was positioned towards its center. Negative coordinates move it
     *    towards the spot it was positioned away from its center.
     * @param {?number=} opt_overflow Overflow handling mode. Defaults to IGNORE if
     *     not specified. Bitmap, {@see goog.positioning.Overflow}.
     * @param {goog.math.Size=} opt_preferredSize The preferred size of the
     *     movableElement.
     * @param {goog.math.Box=} opt_viewport Box object describing the dimensions of
     *     the viewport. The viewport is specified relative to offsetParent of
     *     {@code movableElement}. In other words, the viewport can be thought of as
     *     describing a "position: absolute" element contained in the offsetParent.
     *     It defaults to visible area of nearest scrollable ancestor of
     *     {@code movableElement} (see {@code goog.style.getVisibleRectForElement}).
     * @return {goog.positioning.OverflowStatus} Status bitmap,
     *     {@see goog.positioning.OverflowStatus}.
     */
    export function positionAtAnchor(anchorElement: Element, anchorElementCorner: goog.positioning.Corner, movableElement: Element, movableElementCorner: goog.positioning.Corner, opt_offset?: goog.math.Coordinate, opt_margin?: goog.math.Box, opt_overflow?: number, opt_preferredSize?: goog.math.Size, opt_viewport?: goog.math.Box): goog.positioning.OverflowStatus;

    /**
     * Calculates the page offset of the given element's
     * offsetParent. This value can be used to translate any x- and
     * y-offset relative to the page to an offset relative to the
     * offsetParent, which can then be used directly with as position
     * coordinate for {@code positionWithCoordinate}.
     * @param {!Element} movableElement The element to calculate.
     * @return {!goog.math.Coordinate} The page offset, may be (0, 0).
     */
    export function getOffsetParentPageOffset(movableElement: Element): goog.math.Coordinate;

    /**
     * Positions the specified corner of the movable element at the
     * specified coordinate.
     *
     * @param {goog.math.Coordinate} absolutePos The coordinate to position the
     *     element at.
     * @param {Element} movableElement The element to be positioned.
     * @param {goog.positioning.Corner} movableElementCorner The corner of the
     *     movableElement that that should be positioned.
     * @param {goog.math.Box=} opt_margin A margin specified in pixels.
     *    After the normal positioning algorithm is applied and any offset, the
     *    margin is then applied. Positive coordinates move the popup away from the
     *    spot it was positioned towards its center. Negative coordinates move it
     *    towards the spot it was positioned away from its center.
     * @param {goog.math.Box=} opt_viewport Box object describing the dimensions of
     *     the viewport. Required if opt_overflow is specified.
     * @param {?number=} opt_overflow Overflow handling mode. Defaults to IGNORE if
     *     not specified, {@see goog.positioning.Overflow}.
     * @param {goog.math.Size=} opt_preferredSize The preferred size of the
     *     movableElement. Defaults to the current size.
     * @return {goog.positioning.OverflowStatus} Status bitmap.
     */
    export function positionAtCoordinate(absolutePos: goog.math.Coordinate, movableElement: Element, movableElementCorner: goog.positioning.Corner, opt_margin?: goog.math.Box, opt_viewport?: goog.math.Box, opt_overflow?: number, opt_preferredSize?: goog.math.Size): goog.positioning.OverflowStatus;

    /**
     * Returns an absolute corner (top/bottom left/right) given an absolute
     * or relative (top/bottom start/end) corner and the direction of an element.
     * Absolute corners remain unchanged.
     * @param {Element} element DOM element to test for RTL direction.
     * @param {goog.positioning.Corner} corner The popup corner used for
     *     positioning.
     * @return {goog.positioning.Corner} Effective corner.
     */
    export function getEffectiveCorner(element: Element, corner: goog.positioning.Corner): goog.positioning.Corner;

    /**
     * Returns the corner opposite the given one horizontally.
     * @param {goog.positioning.Corner} corner The popup corner used to flip.
     * @return {goog.positioning.Corner} The opposite corner horizontally.
     */
    export function flipCornerHorizontal(corner: goog.positioning.Corner): goog.positioning.Corner;

    /**
     * Returns the corner opposite the given one vertically.
     * @param {goog.positioning.Corner} corner The popup corner used to flip.
     * @return {goog.positioning.Corner} The opposite corner vertically.
     */
    export function flipCornerVertical(corner: goog.positioning.Corner): goog.positioning.Corner;

    /**
     * Returns the corner opposite the given one horizontally and vertically.
     * @param {goog.positioning.Corner} corner The popup corner used to flip.
     * @return {goog.positioning.Corner} The opposite corner horizontally and
     *     vertically.
     */
    export function flipCorner(corner: goog.positioning.Corner): goog.positioning.Corner;
}

declare module goog.positioning.OverflowStatus {

    /**
     * Shorthand to check if a status code contains any fail code.
     * @type {number}
     */
    export var FAILED: number;

    /**
     * Shorthand to check if horizontal positioning failed.
     * @type {number}
     */
    export var FAILED_HORIZONTAL: number;

    /**
     * Shorthand to check if vertical positioning failed.
     * @type {number}
     */
    export var FAILED_VERTICAL: number;
}
