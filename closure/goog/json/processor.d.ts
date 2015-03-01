declare module goog {
    function require(name: 'goog.json.Processor'): typeof goog.json.Processor;
}

declare module goog.json {

    /**
     * An interface for JSON parsing and serialization.
     * @interface
     * @extends {goog.string.Parser}
     * @extends {goog.string.Stringifier}
     */
    interface Processor extends goog.string$.Parser, goog.string$.Stringifier {
    }
}
