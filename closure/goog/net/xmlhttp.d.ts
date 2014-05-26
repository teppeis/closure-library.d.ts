declare module goog.net {

    /**
     * Default factory to use when creating xhr objects.  You probably shouldn't be
     * instantiating this directly, but rather using it via goog.net.XmlHttp.
     * @extends {goog.net.XmlHttpFactory}
     * @constructor
     */
    class DefaultXmlHttpFactory extends goog.net.XmlHttpFactory {
        constructor();
    }

    /** @const */
    var XmlHttpDefines: any;

    /**
     * Static class for creating XMLHttpRequest objects.
     * @return {!goog.net.XhrLike.OrNative} A new XMLHttpRequest object.
     */
    function XmlHttp(): goog.net.XhrLike.OrNative;
}

declare module goog.net.XmlHttp {

    /**
     * Type of options that an XmlHttp object can have.
     * @enum {number}
     */
    interface OptionType {
        USE_NULL_FUNCTION: number;
        LOCAL_REQUEST_ERROR: number;
    }

    /**
     * Status constants for XMLHTTP, matches:
     * http://msdn.microsoft.com/library/default.asp?url=/library/
     *   en-us/xmlsdk/html/0e6a34e4-f90c-489d-acff-cb44242fafc6.asp
     * @enum {number}
     */
    interface ReadyState {
        UNINITIALIZED: number;
        LOADING: number;
        LOADED: number;
        INTERACTIVE: number;
        COMPLETE: number;
    }

    /**
     * Gets the options to use with the XMLHttpRequest objects obtained using
     * the static methods.
     * @return {Object} The options.
     */
    function getOptions(): Object;

    /**
     * Sets the factories for creating XMLHttpRequest objects and their options.
     * @param {Function} factory The factory for XMLHttpRequest objects.
     * @param {Function} optionsFactory The factory for options.
     * @deprecated Use setGlobalFactory instead.
     */
    function setFactory(factory: Function, optionsFactory: Function): void;

    /**
     * Sets the global factory object.
     * @param {!goog.net.XmlHttpFactory} factory New global factory object.
     */
    function setGlobalFactory(factory: goog.net.XmlHttpFactory): void;
}
