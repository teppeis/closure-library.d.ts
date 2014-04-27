declare module goog.fx {

    /**
     * Drag/drop implementation for creating drag sources/drop targets consisting of
     * a single HTML Element.
     *
     * @param {Element|string} element Dom Node, or string representation of node
     *     id, to be used as drag source/drop target.
     * @param {Object=} opt_data Data associated with the source/target.
     * @throws Error If no element argument is provided or if the type is invalid
     * @extends {goog.fx.AbstractDragDrop}
     * @constructor
     */
    export class DragDrop extends goog.fx.AbstractDragDrop {
        constructor(element: Element, opt_data?: Object);
    }
}
