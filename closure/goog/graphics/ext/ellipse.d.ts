declare module goog.graphics.ext {

    /**
     * Wrapper for a graphics ellipse element.
     * @param {goog.graphics.ext.Group} group Parent for this element.
     * @constructor
     * @extends {goog.graphics.ext.StrokeAndFillElement}
     * @final
     */
    export class Ellipse extends goog.graphics.ext.StrokeAndFillElement {
        constructor(group: goog.graphics.ext.Group);
    }
}
