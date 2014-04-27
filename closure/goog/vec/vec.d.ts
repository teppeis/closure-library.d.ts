declare module goog.vec {

    /** @typedef {Float32Array} */
    export interface Float32 {
    }

    /** @typedef {Float64Array} */
    export interface Float64 {
    }

    /** @typedef {Array.<number>} */
    export interface Number {
    }

    /** @typedef {goog.vec.Float32|goog.vec.Float64|goog.vec.Number} */
    export interface AnyType {
    }

    /**
     * @deprecated Use AnyType.
     * @typedef {Float32Array|Array.<number>}
     */
    export interface ArrayType {
    }

    /**
     * For graphics work, 6 decimal places of accuracy are typically all that is
     * required.
     *
     * @type {number}
     * @const
     */
    export var EPSILON: number;
}
