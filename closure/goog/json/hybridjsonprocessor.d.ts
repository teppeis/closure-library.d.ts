declare module goog.json {

    /**
     * Processor form of goog.json.hybrid, which attempts to parse/serialize
     * JSON using native JSON methods, falling back to goog.json if not
     * available.
     * @constructor
     * @implements {goog.json.Processor}
     * @final
     */
    export class HybridJsonProcessor {
        constructor();
    }
}
