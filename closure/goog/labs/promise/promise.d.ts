declare module goog.labs {

    /**
     * Alias for the {@code goog.Promise} class. Closure Promises were developed
     * under the temporary namespace {@code goog.labs.Promise}. This alias will be
     * removed once existing users have had a chance to migrate to the new name.
     *
     * @see goog.Promise
     *
     * @deprecated Use goog.Promise instead.
     * @param {function(
     *             this:RESOLVER_CONTEXT,
     *             function((TYPE|IThenable.<TYPE>|Thenable)),
     *             function(*)): void} resolver
     * @param {RESOLVER_CONTEXT=} opt_context
     * @constructor
     * @struct
     * @final
     * @implements {goog.Thenable.<TYPE>}
     * @template TYPE,RESOLVER_CONTEXT
     */
    export class Promise<TYPE, RESOLVER_CONTEXT> {
        constructor(resolver: (arg0: (arg0: TYPE) => any, arg1: (arg0: any) => any) => void, opt_context?: RESOLVER_CONTEXT);
    }

    /**
     * Alias for the {@code goog.promise.Resolver} interface. This alias will be
     * removed once existing users have had a chance to migrate to the new name.
     *
     * @deprecated Use goog.promise.Resolver instead.
     * @interface
     * @template TYPE
     */
    export interface Resolver<TYPE> {
    }
}
