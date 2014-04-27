declare module goog.userAgent.flash {

    /**
     * Whether we can detect that the browser has flash
     * @type {boolean}
     */
    export var HAS_FLASH: boolean;

    /**
     * Full version information of flash installed, in form 7.0.61
     * @type {string}
     */
    export var VERSION: string;

    /**
     * Whether the installed flash version is as new or newer than a given version.
     * @param {string} version The version to check.
     * @return {boolean} Whether the installed flash version is as new or newer
     *     than a given version.
     */
    export function isVersion(version: string): boolean;
}
