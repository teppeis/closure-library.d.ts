declare module goog {
    function require(name: 'goog.module.ModuleLoader'): typeof goog.module.ModuleLoader;
}

declare module goog.module {

    /**
     * A class that loads JavaScript modules.
     * @constructor
     * @extends {goog.events.EventTarget}
     * @implements {goog.module.AbstractModuleLoader}
     */
    class ModuleLoader extends goog.events.EventTarget {
        constructor();
        
        /**
         * A logger.
         * @type {goog.log.Logger}
         * @protected
         */
        logger: goog.log.Logger;
        
        /**
         * Events dispatched by the ModuleLoader.
         * @const
         */
        static EventType: any;
        
        /**
         * @return {boolean} Whether sourceURL affects stack traces.
         */
        static supportsSourceUrlStackTraces(): boolean;
        
        /**
         * @return {boolean} Whether sourceURL affects the debugger.
         */
        static supportsSourceUrlDebugger(): boolean;
        
        /**
         * Gets the debug mode for the loader.
         * @return {boolean} Whether the debug mode is enabled.
         */
        getDebugMode(): boolean;
        
        /**
         * Sets the debug mode for the loader.
         * @param {boolean} debugMode Whether the debug mode is enabled.
         */
        setDebugMode(debugMode: boolean): void;
        
        /**
         * When enabled, we will add a sourceURL comment to the end of all scripts
         * to mark their origin.
         *
         * On WebKit, stack traces will reflect the sourceURL comment, so this is
         * useful for debugging webkit stack traces in production.
         *
         * Notice that in debug mode, we will use source url injection + eval rather
         * then appending script nodes to the DOM, because the scripts will load far
         * faster.  (Appending script nodes is very slow, because we can't parallelize
         * the downloading and evaling of the script).
         *
         * The cost of appending sourceURL information is negligible when compared to
         * the cost of evaling the script. Almost all clients will want this on.
         *
         * TODO(nicksantos): Turn this on by default. We may want to turn this off
         * for clients that inject their own sourceURL.
         *
         * @param {boolean} enabled Whether source url injection is enabled.
         */
        setSourceUrlInjection(enabled: boolean): void;
    }
}

declare module goog.module.ModuleLoader {

    /**
     * @param {Array<string>} moduleIds The ids of the modules being evaluated.
     * @constructor
     * @extends {goog.events.Event}
     * @final
     * @protected
     */
    class EvaluateCodeEvent extends goog.events.Event {
        constructor(moduleIds: Array<string>);
    }

    /**
     * @param {Array<string>} moduleIds The ids of the modules being evaluated.
     * @constructor
     * @extends {goog.events.Event}
     * @final
     * @protected
     */
    class RequestSuccessEvent extends goog.events.Event {
        constructor(moduleIds: Array<string>);
    }

    /**
     * @param {Array<string>} moduleIds The ids of the modules being evaluated.
     * @param {!Error=} opt_error The error encountered, if available.
     * @constructor
     * @extends {goog.events.Event}
     * @final
     * @protected
     */
    class RequestErrorEvent extends goog.events.Event {
        constructor(moduleIds: Array<string>, opt_error?: Error);
    }

    /**
     * A class that keeps the state of the module during the loading process. It is
     * used to save loading information between modules download and evaluation.
     * @constructor
     * @final
     */
    class LoadStatus {
        constructor();
    }
}
