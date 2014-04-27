declare module osapi {

    /** @type {Function} */
    export var callback: Function;
}

declare module goog.osapi {

    /**
     * Dispatch a JSON-RPC batch request to services defined in the osapi namespace
     * @param {Array.<Object>} requests an array of rpc requests.
     */
    export function handleGadgetRpcMethod(requests: Array<Object>): void;

    /**
     * Initializes container side osapi binding.
     */
    export function init(): void;
}
