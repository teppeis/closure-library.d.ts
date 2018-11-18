declare module goog {
    function require(name: 'goog.testing.events.EventMatcher'): typeof goog.testing.events.EventMatcher;
}

declare module goog.testing.events {

    /**
     * A matcher that verifies that an argument is a `goog.events.Event` of a
     * particular type.
     * @param {string} type The single type the event argument must be of.
     * @constructor
     * @extends {goog.testing.mockmatchers.ArgumentMatcher}
     * @final
     */
    class EventMatcher extends goog.testing.mockmatchers.ArgumentMatcher {
        constructor(type: string);
    }
}
