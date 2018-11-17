declare module goog {
    function require(name: 'goog.format.JsonPrettyPrinter'): typeof goog.format.JsonPrettyPrinter;
    function require(name: 'goog.format.JsonPrettyPrinter.TextDelimiters'): typeof goog.format.JsonPrettyPrinter.TextDelimiters;
    function require(name: 'goog.format.JsonPrettyPrinter.SafeHtmlDelimiters'): typeof goog.format.JsonPrettyPrinter.SafeHtmlDelimiters;
}

declare module goog.format {

    /**
     * Formats a JSON object as a string, properly indented for display.  Supports
     * displaying the string as text or html.  Users can also specify their own
     * set of delimiters for different environments.  For example, the JSON object:
     *
     * <code>{"a": 1, "b": {"c": null, "d": true, "e": [1, 2]}}</code>
     *
     * Will be displayed like this:
     *
     * <code>{
     *   "a": 1,
     *   "b": {
     *     "c": null,
     *     "d": true,
     *     "e": [
     *       1,
     *       2
     *     ]
     *   }
     * }</code>
     * @param {?goog.format.JsonPrettyPrinter.TextDelimiters=} opt_delimiters
     *     Container for the various strings to use to delimit objects, arrays,
     *     newlines, and other pieces of the output.
     * @constructor
     */
    class JsonPrettyPrinter {
        constructor(opt_delimiters?: goog.format.JsonPrettyPrinter.TextDelimiters);
        
        /**
         * Formats a JSON object as a string, properly indented for display.
         * @param {*} json The object to pretty print. It could be a JSON object, a
         *     string representing a JSON object, or any other type.
         * @return {string} Returns a string of the JSON object, properly indented for
         *     display.
         */
        format(json: any): string;
        
        /**
         * Formats a JSON object as a SafeHtml, properly indented for display.
         * @param {*} json The object to pretty print. It could be a JSON object, a
         *     string representing a JSON object, or any other type.
         * @return {!goog.html.SafeHtml} A HTML code of the JSON object.
         */
        formatSafeHtml(json: any): goog.html.SafeHtml;
    }
}

declare module goog.format.JsonPrettyPrinter {

    /**
     * A container for the delimiting characters used to display the JSON string
     * to a text display.  Each delimiter is a publicly accessible property of
     * the object, which makes it easy to tweak delimiters to specific environments.
     * @constructor
     */
    class TextDelimiters {
        constructor();
        
        /**
         * Represents a space character in the output.  Used to indent properties a
         * certain number of spaces, and to separate property names from property
         * values.
         * @type {string}
         */
        space: string;
        
        /**
         * Represents a newline character in the output.  Used to begin a new line.
         * @type {string|!goog.html.SafeHtml}
         */
        lineBreak: string|goog.html.SafeHtml;
        
        /**
         * Represents the start of an object in the output.
         * @type {string}
         */
        objectStart: string;
        
        /**
         * Represents the end of an object in the output.
         * @type {string}
         */
        objectEnd: string;
        
        /**
         * Represents the start of an array in the output.
         * @type {string}
         */
        arrayStart: string;
        
        /**
         * Represents the end of an array in the output.
         * @type {string}
         */
        arrayEnd: string;
        
        /**
         * Represents the string used to separate properties in the output.
         * @type {string}
         */
        propertySeparator: string;
        
        /**
         * Represents the string used to separate property names from property values in
         * the output.
         * @type {string|!goog.html.SafeHtml}
         */
        nameValueSeparator: string|goog.html.SafeHtml;
        
        /**
         * A string that's placed before a property name in the output.  Useful for
         * wrapping a property name in an html tag.
         * @type {string}
         */
        preName: string;
        
        /**
         * A string that's placed after a property name in the output.  Useful for
         * wrapping a property name in an html tag.
         * @type {string}
         */
        postName: string;
        
        /**
         * A string that's placed before a property value in the output.  Useful for
         * wrapping a property value in an html tag.
         * @type {string}
         */
        preValue: string;
        
        /**
         * A string that's placed after a property value in the output.  Useful for
         * wrapping a property value in an html tag.
         * @type {string}
         */
        postValue: string;
        
        /**
         * Represents the number of spaces to indent each sub-property of the JSON.
         * @type {number}
         */
        indent: number;
        
        /**
         * Formats a property name before adding it to the output.
         * @param {string} name The property name.
         * @return {string|!goog.html.SafeHtml}
         */
        formatName(name: string): string|goog.html.SafeHtml;
        
        /**
         * Formats a value before adding it to the output.
         * @param {string} value The value.
         * @param {string} typeOf The type of the value obtained by goog.typeOf.
         * @return {string|!goog.html.SafeHtml}
         */
        formatValue(value: string, typeOf: string): string|goog.html.SafeHtml;
    }

    /**
     * A container for the delimiting characters used to display the JSON string
     * to an HTML <code>&lt;pre&gt;</code> or <code>&lt;code&gt;</code> element.
     * It escapes the names and values before they are added to the output.
     * Use this class together with goog.format.JsonPrettyPrinter#formatSafeHtml.
     * @constructor
     * @extends {goog.format.JsonPrettyPrinter.TextDelimiters}
     */
    class SafeHtmlDelimiters extends goog.format.JsonPrettyPrinter.TextDelimiters {
        constructor();
        
        /**
         * Return a class name for the given type.
         * @param {string} typeOf The type of the value.
         * @return {string}
         * @protected
         */
        getValueCssName(typeOf: string): string;
    }
}
