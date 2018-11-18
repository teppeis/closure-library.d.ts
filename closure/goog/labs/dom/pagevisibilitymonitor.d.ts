declare module goog {
    function require(name: 'goog.labs.dom.PageVisibilityState'): typeof goog.labs.dom.PageVisibilityState;
    function require(name: 'goog.labs.dom.PageVisibilityMonitor'): typeof goog.labs.dom.PageVisibilityMonitor;
    function require(name: 'goog.labs.dom.PageVisibilityEvent'): typeof goog.labs.dom.PageVisibilityEvent;
}

declare module goog.labs.dom {

    /**
     * The different visibility states.
     * @enum {string}
     */
    type PageVisibilityState = string;
    var PageVisibilityState: {
        HIDDEN: PageVisibilityState;
        VISIBLE: PageVisibilityState;
        PRERENDER: PageVisibilityState;
        UNLOADED: PageVisibilityState;
    };

    /**
     * This event handler allows you to catch page visibility change events.
     * @param {!goog.dom.DomHelper=} opt_domHelper
     * @constructor
     * @extends {goog.events.EventTarget}
     * @final
     */
    class PageVisibilityMonitor extends goog.events.EventTarget {
        constructor(opt_domHelper?: goog.dom.DomHelper);
        
        /**
         * @return {boolean} Whether the visibility API is supported.
         */
        isSupported(): boolean;
        
        /**
         * @return {boolean} Whether the page is visible.
         */
        isHidden(): boolean;
        
        /**
         * @return {?goog.labs.dom.PageVisibilityState} The page visibility state, or
         *     null if not supported.
         */
        getVisibilityState(): goog.labs.dom.PageVisibilityState;
    }

    /**
     * A page visibility change event.
     * @param {boolean} hidden Whether the page is hidden.
     * @param {goog.labs.dom.PageVisibilityState} visibilityState A more detailed
     *     visibility state.
     * @constructor
     * @extends {goog.events.Event}
     * @final
     */
    class PageVisibilityEvent extends goog.events.Event {
        constructor(hidden: boolean, visibilityState: goog.labs.dom.PageVisibilityState);
    }
}
