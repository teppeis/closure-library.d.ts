declare module goog {
    function require(name: 'goog.module.ModuleManager'): typeof goog.module.ModuleManager;
    function require(name: 'goog.module.ModuleManager.CallbackType'): typeof goog.module.ModuleManager.CallbackType;
    function require(name: 'goog.module.ModuleManager.FailureType'): typeof goog.module.ModuleManager.FailureType;
}

declare module goog.module {

    /**
     * The ModuleManager keeps track of all modules in the environment.
     * Since modules may not have their code loaded, we must keep track of them.
     * @constructor
     * @extends {goog.loader.AbstractModuleManager}
     * @implements {goog.disposable.IDisposable}
     * @struct
     */
    class ModuleManager extends goog.loader.AbstractModuleManager {
        constructor();
        
        /**
         * A non-HTTP status code indicating a corruption in loaded module.
         * This should be used by a ModuleLoader as a replacement for the HTTP code
         * given to the error handler function to indicated that the module was
         * corrupted.
         * This will set the forceReload flag on the loadModules method when retrying
         * module loading.
         * @type {number}
         */
        static CORRUPT_RESPONSE_STATUS_CODE: number;
        
        /** @return {!goog.loader.AbstractModuleManager} */
        static getInstance(): goog.loader.AbstractModuleManager;
    }
}

declare module goog.module.ModuleManager {

    /**
     * The type of callbacks that can be registered with the module manager,.
     * @enum {string}
     */
    export import CallbackType = goog.loader.AbstractModuleManager.CallbackType;

    /**
     * The possible reasons for a module load failure callback being fired.
     * @enum {number}
     */
    export import FailureType = goog.loader.AbstractModuleManager.FailureType;
}
