declare module goog.async {

    /**
     * Fires the provided callback just before the current callstack unwinds, or as
     * soon as possible after the current JS execution context.
     * @param {function(this:THIS)} callback
     * @param {THIS=} opt_context Object to use as the "this value" when calling
     *     the provided function.
     * @template THIS
     */
    export function run<THIS>(callback: () => any, opt_context?: THIS): void;
}

declare module goog.async.run {

    /**
     * @constructor
     * @final
     * @struct
     * @private
     *
     * @param {function()} fn
     * @param {Object|null|undefined} scope
     */
    export interface WorkItem_ {
    }

    /**
     * Run any pending goog.async.run work items. This function is not intended
     * for general use, but for use by entry point handlers to run items ahead of
     * goog.async.nextTick.
     */
    export function processWorkQueue(): void;
}
