declare module goog.graphics {

    /**
     * Creates an immutable stroke object.
     *
     * @param {number|string} width The width of the stroke.
     * @param {string} color The color of the stroke.
     * @param {number=} opt_opacity The opacity of the background fill. The value
     *    must be greater than or equal to zero (transparent) and less than or
     *    equal to 1 (opaque).
     * @constructor
     * @deprecated goog.graphics is deprecated. It existed to abstract over browser
     *     differences before the canvas tag was widely supported.  See
     *     http://en.wikipedia.org/wiki/Canvas_element for details.
     */
    class Stroke {
        constructor(width: number, color: string, opt_opacity?: number);
        
        /**
         * @return {number|string} The width of this stroke.
         */
        getWidth(): number;
        
        /**
         * @return {string} The color of this stroke.
         */
        getColor(): string;
        
        /**
         * @return {number} The opacity of this fill.
         */
        getOpacity(): number;
    }
}
