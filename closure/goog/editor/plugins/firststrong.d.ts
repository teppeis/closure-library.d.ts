declare module goog.editor.plugins {

    /**
     * First Strong plugin.
     * @constructor
     * @extends {goog.editor.Plugin}
     * @final
     */
    export class FirstStrong extends goog.editor.Plugin {
        constructor();
        
        /**
         * The name of the attribute which records the input text.
         *
         * @type {string}
         * @const
         */
        static INPUT_ATTRIBUTE: string;
    }
}
