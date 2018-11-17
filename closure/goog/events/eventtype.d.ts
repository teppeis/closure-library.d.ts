declare module goog {
    function require(name: 'goog.events.EventType'): typeof goog.events.EventType;
    function require(name: 'goog.events.PointerFallbackEventType'): typeof goog.events.PointerFallbackEventType;
    function require(name: 'goog.events.PointerTouchFallbackEventType'): typeof goog.events.PointerTouchFallbackEventType;
    function require(name: 'goog.events.PointerAsMouseEventType'): typeof goog.events.PointerAsMouseEventType;
    function require(name: 'goog.events.PointerAsTouchEventType'): typeof goog.events.PointerAsTouchEventType;
}

declare module goog.events {

    /**
     * Constants for event names.
     * @enum {string}
     */
    type EventType = string;
    var EventType: {
        CLICK: EventType;
        RIGHTCLICK: EventType;
        DBLCLICK: EventType;
        MOUSEDOWN: EventType;
        MOUSEUP: EventType;
        MOUSEOVER: EventType;
        MOUSEOUT: EventType;
        MOUSEMOVE: EventType;
        MOUSEENTER: EventType;
        MOUSELEAVE: EventType;
        MOUSECANCEL: EventType;
        SELECTIONCHANGE: EventType;
        SELECTSTART: EventType;
        WHEEL: EventType;
        KEYPRESS: EventType;
        KEYDOWN: EventType;
        KEYUP: EventType;
        BLUR: EventType;
        FOCUS: EventType;
        DEACTIVATE: EventType;
        FOCUSIN: EventType;
        FOCUSOUT: EventType;
        CHANGE: EventType;
        RESET: EventType;
        SELECT: EventType;
        SUBMIT: EventType;
        INPUT: EventType;
        PROPERTYCHANGE: EventType;
        DRAGSTART: EventType;
        DRAG: EventType;
        DRAGENTER: EventType;
        DRAGOVER: EventType;
        DRAGLEAVE: EventType;
        DROP: EventType;
        DRAGEND: EventType;
        TOUCHSTART: EventType;
        TOUCHMOVE: EventType;
        TOUCHEND: EventType;
        TOUCHCANCEL: EventType;
        BEFOREUNLOAD: EventType;
        CONSOLEMESSAGE: EventType;
        CONTEXTMENU: EventType;
        DEVICECHANGE: EventType;
        DEVICEMOTION: EventType;
        DEVICEORIENTATION: EventType;
        DOMCONTENTLOADED: EventType;
        ERROR: EventType;
        HELP: EventType;
        LOAD: EventType;
        LOSECAPTURE: EventType;
        ORIENTATIONCHANGE: EventType;
        READYSTATECHANGE: EventType;
        RESIZE: EventType;
        SCROLL: EventType;
        UNLOAD: EventType;
        CANPLAY: EventType;
        CANPLAYTHROUGH: EventType;
        DURATIONCHANGE: EventType;
        EMPTIED: EventType;
        ENDED: EventType;
        LOADEDDATA: EventType;
        LOADEDMETADATA: EventType;
        PAUSE: EventType;
        PLAY: EventType;
        PLAYING: EventType;
        RATECHANGE: EventType;
        SEEKED: EventType;
        SEEKING: EventType;
        STALLED: EventType;
        SUSPEND: EventType;
        TIMEUPDATE: EventType;
        VOLUMECHANGE: EventType;
        WAITING: EventType;
        SOURCEOPEN: EventType;
        SOURCEENDED: EventType;
        SOURCECLOSED: EventType;
        ABORT: EventType;
        UPDATE: EventType;
        UPDATESTART: EventType;
        UPDATEEND: EventType;
        HASHCHANGE: EventType;
        PAGEHIDE: EventType;
        PAGESHOW: EventType;
        POPSTATE: EventType;
        COPY: EventType;
        PASTE: EventType;
        CUT: EventType;
        BEFORECOPY: EventType;
        BEFORECUT: EventType;
        BEFOREPASTE: EventType;
        ONLINE: EventType;
        OFFLINE: EventType;
        MESSAGE: EventType;
        CONNECT: EventType;
        INSTALL: EventType;
        ACTIVATE: EventType;
        FETCH: EventType;
        FOREIGNFETCH: EventType;
        MESSAGEERROR: EventType;
        STATECHANGE: EventType;
        UPDATEFOUND: EventType;
        CONTROLLERCHANGE: EventType;
        ANIMATIONSTART: EventType;
        ANIMATIONEND: EventType;
        ANIMATIONITERATION: EventType;
        TRANSITIONEND: EventType;
        POINTERDOWN: EventType;
        POINTERUP: EventType;
        POINTERCANCEL: EventType;
        POINTERMOVE: EventType;
        POINTEROVER: EventType;
        POINTEROUT: EventType;
        POINTERENTER: EventType;
        POINTERLEAVE: EventType;
        GOTPOINTERCAPTURE: EventType;
        LOSTPOINTERCAPTURE: EventType;
        MSGESTURECHANGE: EventType;
        MSGESTUREEND: EventType;
        MSGESTUREHOLD: EventType;
        MSGESTURESTART: EventType;
        MSGESTURETAP: EventType;
        MSGOTPOINTERCAPTURE: EventType;
        MSINERTIASTART: EventType;
        MSLOSTPOINTERCAPTURE: EventType;
        MSPOINTERCANCEL: EventType;
        MSPOINTERDOWN: EventType;
        MSPOINTERENTER: EventType;
        MSPOINTERHOVER: EventType;
        MSPOINTERLEAVE: EventType;
        MSPOINTERMOVE: EventType;
        MSPOINTEROUT: EventType;
        MSPOINTEROVER: EventType;
        MSPOINTERUP: EventType;
        TEXT: EventType;
        TEXTINPUT: EventType;
        COMPOSITIONSTART: EventType;
        COMPOSITIONUPDATE: EventType;
        COMPOSITIONEND: EventType;
        BEFOREINPUT: EventType;
        EXIT: EventType;
        LOADABORT: EventType;
        LOADCOMMIT: EventType;
        LOADREDIRECT: EventType;
        LOADSTART: EventType;
        LOADSTOP: EventType;
        RESPONSIVE: EventType;
        SIZECHANGED: EventType;
        UNRESPONSIVE: EventType;
        VISIBILITYCHANGE: EventType;
        STORAGE: EventType;
        DOMSUBTREEMODIFIED: EventType;
        DOMNODEINSERTED: EventType;
        DOMNODEREMOVED: EventType;
        DOMNODEREMOVEDFROMDOCUMENT: EventType;
        DOMNODEINSERTEDINTODOCUMENT: EventType;
        DOMATTRMODIFIED: EventType;
        DOMCHARACTERDATAMODIFIED: EventType;
        BEFOREPRINT: EventType;
        AFTERPRINT: EventType;
        BEFOREINSTALLPROMPT: EventType;
        APPINSTALLED: EventType;
    };

    /**
     * Constants for pointer event names that fall back to corresponding mouse event
     * names on unsupported platforms. These are intended to be drop-in replacements
     * for corresponding values in `goog.events.EventType`.
     * @enum {string}
     */
    type PointerFallbackEventType = string;
    var PointerFallbackEventType: {
        POINTERDOWN: PointerFallbackEventType;
        POINTERUP: PointerFallbackEventType;
        POINTERCANCEL: PointerFallbackEventType;
        POINTERMOVE: PointerFallbackEventType;
        POINTEROVER: PointerFallbackEventType;
        POINTEROUT: PointerFallbackEventType;
        POINTERENTER: PointerFallbackEventType;
        POINTERLEAVE: PointerFallbackEventType;
    };

    /**
     * Constants for pointer event names that fall back to corresponding touch event
     * names on unsupported platforms. These are intended to be drop-in replacements
     * for corresponding values in `goog.events.EventType`.
     * @enum {string}
     */
    type PointerTouchFallbackEventType = string;
    var PointerTouchFallbackEventType: {
        POINTERDOWN: PointerTouchFallbackEventType;
        POINTERUP: PointerTouchFallbackEventType;
        POINTERCANCEL: PointerTouchFallbackEventType;
        POINTERMOVE: PointerTouchFallbackEventType;
    };

    /**
     * An alias for `goog.events.EventType.MOUSE*` event types that is overridden by
     * corresponding `POINTER*` event types.
     * @enum {string}
     */
    type PointerAsMouseEventType = string;
    var PointerAsMouseEventType: {
        MOUSEDOWN: PointerAsMouseEventType;
        MOUSEUP: PointerAsMouseEventType;
        MOUSECANCEL: PointerAsMouseEventType;
        MOUSEMOVE: PointerAsMouseEventType;
        MOUSEOVER: PointerAsMouseEventType;
        MOUSEOUT: PointerAsMouseEventType;
        MOUSEENTER: PointerAsMouseEventType;
        MOUSELEAVE: PointerAsMouseEventType;
    };

    /**
     * An alias for `goog.events.EventType.TOUCH*` event types that is overridden by
     * corresponding `POINTER*` event types.
     * @enum {string}
     */
    type PointerAsTouchEventType = string;
    var PointerAsTouchEventType: {
        TOUCHCANCEL: PointerAsTouchEventType;
        TOUCHEND: PointerAsTouchEventType;
        TOUCHMOVE: PointerAsTouchEventType;
        TOUCHSTART: PointerAsTouchEventType;
    };
}
