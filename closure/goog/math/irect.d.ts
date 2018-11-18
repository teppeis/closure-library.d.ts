declare module goog.math {

    /**
     * Record for representing rectangular regions, allows compatibility between
     * things like ClientRect and goog.math.Rect.
     *
     * @record
     */
    interface IRect {
        
        /** @type {number} */
        left: number;
        
        /** @type {number} */
        top: number;
        
        /** @type {number} */
        width: number;
        
        /** @type {number} */
        height: number;
    }
}
