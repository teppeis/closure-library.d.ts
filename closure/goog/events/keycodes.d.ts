declare module goog.events {

    /**
     * Key codes for common characters.
     *
     * This list is not localized and therefore some of the key codes are not
     * correct for non US keyboard layouts. See comments below.
     *
     * @enum {number}
     */
    export interface KeyCodes {
        WIN_KEY_FF_LINUX: number;
        MAC_ENTER: number;
        BACKSPACE: number;
        TAB: number;
        NUM_CENTER: number;
        ENTER: number;
        SHIFT: number;
        CTRL: number;
        ALT: number;
        PAUSE: number;
        CAPS_LOCK: number;
        ESC: number;
        SPACE: number;
        PAGE_UP: number;
        PAGE_DOWN: number;
        END: number;
        HOME: number;
        LEFT: number;
        UP: number;
        RIGHT: number;
        DOWN: number;
        PRINT_SCREEN: number;
        INSERT: number;
        DELETE: number;
        ZERO: number;
        ONE: number;
        TWO: number;
        THREE: number;
        FOUR: number;
        FIVE: number;
        SIX: number;
        SEVEN: number;
        EIGHT: number;
        NINE: number;
        FF_SEMICOLON: number;
        FF_EQUALS: number;
        FF_DASH: number;
        QUESTION_MARK: number;
        A: number;
        B: number;
        C: number;
        D: number;
        E: number;
        F: number;
        G: number;
        H: number;
        I: number;
        J: number;
        K: number;
        L: number;
        M: number;
        N: number;
        O: number;
        P: number;
        Q: number;
        R: number;
        S: number;
        T: number;
        U: number;
        V: number;
        W: number;
        X: number;
        Y: number;
        Z: number;
        META: number;
        WIN_KEY_RIGHT: number;
        CONTEXT_MENU: number;
        NUM_ZERO: number;
        NUM_ONE: number;
        NUM_TWO: number;
        NUM_THREE: number;
        NUM_FOUR: number;
        NUM_FIVE: number;
        NUM_SIX: number;
        NUM_SEVEN: number;
        NUM_EIGHT: number;
        NUM_NINE: number;
        NUM_MULTIPLY: number;
        NUM_PLUS: number;
        NUM_MINUS: number;
        NUM_PERIOD: number;
        NUM_DIVISION: number;
        F1: number;
        F2: number;
        F3: number;
        F4: number;
        F5: number;
        F6: number;
        F7: number;
        F8: number;
        F9: number;
        F10: number;
        F11: number;
        F12: number;
        NUMLOCK: number;
        SCROLL_LOCK: number;
        FIRST_MEDIA_KEY: number;
        LAST_MEDIA_KEY: number;
        SEMICOLON: number;
        DASH: number;
        EQUALS: number;
        COMMA: number;
        PERIOD: number;
        SLASH: number;
        APOSTROPHE: number;
        TILDE: number;
        SINGLE_QUOTE: number;
        OPEN_SQUARE_BRACKET: number;
        BACKSLASH: number;
        CLOSE_SQUARE_BRACKET: number;
        WIN_KEY: number;
        MAC_FF_META: number;
        MAC_WK_CMD_LEFT: number;
        MAC_WK_CMD_RIGHT: number;
        WIN_IME: number;
        PHANTOM: number;
    }
}

declare module goog.events.KeyCodes {

    /**
     * Returns true if the event contains a text modifying key.
     * @param {goog.events.BrowserEvent} e A key event.
     * @return {boolean} Whether it's a text modifying key.
     */
    export function isTextModifyingKeyEvent(e: goog.events.BrowserEvent): boolean;

    /**
     * Returns true if the key fires a keypress event in the current browser.
     *
     * Accoridng to MSDN [1] IE only fires keypress events for the following keys:
     * - Letters: A - Z (uppercase and lowercase)
     * - Numerals: 0 - 9
     * - Symbols: ! @ # $ % ^ & * ( ) _ - + = < [ ] { } , . / ? \ | ' ` " ~
     * - System: ESC, SPACEBAR, ENTER
     *
     * That's not entirely correct though, for instance there's no distinction
     * between upper and lower case letters.
     *
     * [1] http://msdn2.microsoft.com/en-us/library/ms536939(VS.85).aspx)
     *
     * Safari is similar to IE, but does not fire keypress for ESC.
     *
     * Additionally, IE6 does not fire keydown or keypress events for letters when
     * the control or alt keys are held down and the shift key is not. IE7 does
     * fire keydown in these cases, though, but not keypress.
     *
     * @param {number} keyCode A key code.
     * @param {number=} opt_heldKeyCode Key code of a currently-held key.
     * @param {boolean=} opt_shiftKey Whether the shift key is held down.
     * @param {boolean=} opt_ctrlKey Whether the control key is held down.
     * @param {boolean=} opt_altKey Whether the alt key is held down.
     * @return {boolean} Whether it's a key that fires a keypress event.
     */
    export function firesKeyPressEvent(keyCode: number, opt_heldKeyCode?: number, opt_shiftKey?: boolean, opt_ctrlKey?: boolean, opt_altKey?: boolean): boolean;

    /**
     * Returns true if the key produces a character.
     * This does not cover characters on non-US keyboards (Russian, Hebrew, etc.).
     *
     * @param {number} keyCode A key code.
     * @return {boolean} Whether it's a character key.
     */
    export function isCharacterKey(keyCode: number): boolean;

    /**
     * Normalizes key codes from OS/Browser-specific value to the general one.
     * @param {number} keyCode The native key code.
     * @return {number} The normalized key code.
     */
    export function normalizeKeyCode(keyCode: number): number;

    /**
     * Normalizes key codes from their Gecko-specific value to the general one.
     * @param {number} keyCode The native key code.
     * @return {number} The normalized key code.
     */
    export function normalizeGeckoKeyCode(keyCode: number): number;

    /**
     * Normalizes key codes from their Mac WebKit-specific value to the general one.
     * @param {number} keyCode The native key code.
     * @return {number} The normalized key code.
     */
    export function normalizeMacWebKitKeyCode(keyCode: number): number;
}
