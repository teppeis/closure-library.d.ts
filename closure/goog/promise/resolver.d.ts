declare module goog.promise {

    /**
     * Resolver interface for promises. The resolver is a convenience interface that
     * bundles the promise and its associated resolve and reject functions together,
     * for cases where the resolver needs to be persisted internally.
     *
     * @interface
     * @template TYPE
     */
    export interface Resolver<TYPE> {
        
        /**
         * The promise that created this resolver.
         * @const {!goog.Promise.<TYPE>}
         */
        promise(): void;
        
        /**
         * Resolves this resolver with the specified value.
         * @const {function((TYPE|goog.Promise.<TYPE>|Thenable))}
         */
        resolve(): void;
        
        /**
         * Rejects this resolver with the specified reason.
         * @const {function(*): void}
         */
        reject(): void;
    }
}
