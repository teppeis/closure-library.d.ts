declare module goog.net.xpc {

    /**
     * Enum used to identify transport types.
     * @enum {number}
     */
    interface TransportTypes {
        NATIVE_MESSAGING: number;
        FRAME_ELEMENT_METHOD: number;
        IFRAME_RELAY: number;
        IFRAME_POLLING: number;
        FLASH: number;
        NIX: number;
        DIRECT: number;
    }

    /**
     * @enum {number}
     */
    interface ChannelStates {
        NOT_CONNECTED: number;
        CONNECTED: number;
        CLOSED: number;
    }

    /**
     * Enum containing transport names. These need to correspond to the
     * transport class names for createTransport_() to work.
     * @type {Object}
     */
    var TransportNames: Object;

    /**
     * Field names used on configuration object.
     * @type {Object}
     */
    var CfgFields: Object;

    /**
     * Config properties that need to be URL sanitized.
     * @type {Array}.<string>
     */
    var UriCfgFields: Array<any>;

    /**
     * The name of the transport service (used for internal signalling).
     * @type {string}
     * @suppress {underscore|visibility}
     */
    var TRANSPORT_SERVICE_: string;

    /**
     * Transport signaling message: setup.
     * @type {string}
     */
    var SETUP: string;

    /**
     * Transport signaling message: setup for native transport protocol v2.
     * @type {string}
     */
    var SETUP_NTPV2: string;

    /**
     * Transport signaling message: setup acknowledgement.
     * @type {string}
     * @suppress {underscore|visibility}
     */
    var SETUP_ACK_: string;

    /**
     * Transport signaling message: setup acknowledgement.
     * @type {string}
     */
    var SETUP_ACK_NTPV2: string;

    /**
     * Object holding active channels.
     * Package private. Do not call from outside goog.net.xpc.
     *
     * @type {Object.<string, goog.net.xpc.CrossPageChannel>}
     */
    var channels: Object;

    /**
     * The logger.
     * @type {goog.log.Logger}
     */
    var logger: goog.log.Logger;

    /**
     * Returns a random string.
     * @param {number} length How many characters the string shall contain.
     * @param {string=} opt_characters The characters used.
     * @return {string} The random string.
     */
    function getRandomString(length: number, opt_characters?: string): string;
}
