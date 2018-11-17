declare module goog {
    function require(name: 'goog.editor.Plugin'): typeof goog.editor.Plugin;
}

declare module goog.editor {

    /**
     * @constructor
     * @extends {goog.editor.PluginImpl}
     */
    class Plugin extends goog.editor.PluginImpl {
        constructor();
    }
}
