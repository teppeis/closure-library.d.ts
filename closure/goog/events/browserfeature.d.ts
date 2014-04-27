declare module goog.events {

    /**
     * Enum of browser capabilities.
     * @enum {boolean}
     */
    export interface BrowserFeature {
        HAS_W3C_BUTTON: boolean;
        HAS_W3C_EVENT_SUPPORT: boolean;
        SET_KEY_CODE_TO_PREVENT_DEFAULT: boolean;
        HAS_NAVIGATOR_ONLINE_PROPERTY: boolean;
        HAS_HTML5_NETWORK_EVENT_SUPPORT: boolean;
        HTML5_NETWORK_EVENTS_FIRE_ON_BODY: boolean;
        TOUCH_ENABLED: boolean;
    }
}
