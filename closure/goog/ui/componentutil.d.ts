declare module goog {
    function require(name: 'goog.ui.ComponentUtil'): typeof goog.ui.ComponentUtil;
}

declare module goog.ui.ComponentUtil {

    /**
     * @param {!goog.ui.Component} component
     * @return {!Object} The mouse event type the given component should listen for.
     */
    function getMouseEventType(component: goog.ui.Component): Object;
}
