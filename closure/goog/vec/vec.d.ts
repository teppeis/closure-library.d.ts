declare module goog.vec {

    /** @typedef {!Float32Array} */
    interface Float32 {
    }

    /** @typedef {!Float64Array} */
    interface Float64 {
    }

    /** @typedef {!Array<number>} */
    interface Number {
    }

    /** @typedef {!goog.vec.Float32|!goog.vec.Float64|!goog.vec.Number} */
    interface AnyType {
    }

    /**
     * @deprecated Use AnyType.
     * @typedef {!Float32Array|!Array<number>}
     */
    interface ArrayType {
    }

    /**
     * For graphics work, 6 decimal places of accuracy are typically all that is
     * required.
     *
     * @type {number}
     * @const
     */
    var EPSILON: number;
}
