declare module goog {
    function require(name: 'goog.string.Const'): typeof goog.string$.Const;
}

declare module goog.string$ {

    /**
     * Wrapper for compile-time-constant strings.
     *
     * Const is a wrapper for strings that can only be created from program
     * constants (i.e., string literals).  This property relies on a custom Closure
     * compiler check that `goog.string.Const.from` is only invoked on
     * compile-time-constant expressions.
     *
     * Const is useful in APIs whose correct and secure use requires that certain
     * arguments are not attacker controlled: Compile-time constants are inherently
     * under the control of the application and not under control of external
     * attackers, and hence are safe to use in such contexts.
     *
     * Instances of this type must be created via its factory method
     * `goog.string.Const.from` and not by invoking its constructor.  The
     * constructor intentionally takes no parameters and the type is immutable;
     * hence only a default instance corresponding to the empty string can be
     * obtained via constructor invocation.  Use goog.string.Const.EMPTY
     * instead of using this constructor to get an empty Const string.
     *
     * @see goog.string.Const#from
     * @constructor
     * @final
     * @struct
     * @implements {goog.string.TypedString}
     * @param {Object=} opt_token package-internal implementation detail.
     * @param {string=} opt_content package-internal implementation detail.
     */
    class Const {
        constructor(opt_token?: Object, opt_content?: string);
        
        /**
         * A Const instance wrapping the empty string.
         * @const {!goog.string.Const}
         */
        static EMPTY: any;
        
        /**
         * Performs a runtime check that the provided object is indeed an instance
         * of `goog.string.Const`, and returns its value.
         * @param {!goog.string.Const} stringConst The object to extract from.
         * @return {string} The Const object's contained string, unless the run-time
         *     type check fails. In that case, `unwrap` returns an innocuous
         *     string, or, if assertions are enabled, throws
         *     `goog.asserts.AssertionError`.
         */
        static unwrap(stringConst: goog.string$.Const): string;
        
        /**
         * Creates a Const object from a compile-time constant string.
         *
         * It is illegal to invoke this function on an expression whose
         * compile-time-constant value cannot be determined by the Closure compiler.
         *
         * Correct invocations include,
         * <pre>
         *   var s = goog.string.Const.from('hello');
         *   var t = goog.string.Const.from('hello' + 'world');
         * </pre>
         *
         * In contrast, the following are illegal:
         * <pre>
         *   var s = goog.string.Const.from(getHello());
         *   var t = goog.string.Const.from('hello' + world);
         * </pre>
         *
         * @param {string} s A constant string from which to create a Const.
         * @return {!goog.string.Const} A Const object initialized to stringConst.
         */
        static from(s: string): goog.string$.Const;
    }
}
