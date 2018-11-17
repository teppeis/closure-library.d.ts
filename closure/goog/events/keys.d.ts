declare module goog {
    function require(name: 'goog.events.Keys'): typeof goog.events.Keys;
}

declare module goog.events {

    /**
     * Key values for common characters.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key
     * @enum {string}
     */
    type Keys = string;
    var Keys: {
        ALT: Keys;
        ALTGRAPH: Keys;
        CTRL: Keys;
        DOWN: Keys;
        END: Keys;
        ENTER: Keys;
        ESCAPE: Keys;
        HOME: Keys;
        LEFT: Keys;
        PAGE_DOWN: Keys;
        PAGE_UP: Keys;
        RIGHT: Keys;
        SHIFT: Keys;
        SPACE: Keys;
        TAB: Keys;
        UP: Keys;
    };
}
