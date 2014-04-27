declare module goog.labs.userAgent.platform {

    /**
     * @return {boolean} Whether the platform is Android.
     */
    export function isAndroid(): boolean;

    /**
     * @return {boolean} Whether the platform is iPod.
     */
    export function isIpod(): boolean;

    /**
     * @return {boolean} Whether the platform is iPhone.
     */
    export function isIphone(): boolean;

    /**
     * @return {boolean} Whether the platform is iPad.
     */
    export function isIpad(): boolean;

    /**
     * @return {boolean} Whether the platform is iOS.
     */
    export function isIos(): boolean;

    /**
     * @return {boolean} Whether the platform is Mac.
     */
    export function isMacintosh(): boolean;

    /**
     * @return {boolean} Whether the platform is Linux.
     */
    export function isLinux(): boolean;

    /**
     * @return {boolean} Whether the platform is Windows.
     */
    export function isWindows(): boolean;

    /**
     * @return {boolean} Whether the platform is ChromeOS.
     */
    export function isChromeOS(): boolean;

    /**
     * The version of the platform. We only determine the version for Windows,
     * Mac, and Chrome OS. It doesn't make much sense on Linux. For Windows, we only
     * look at the NT version. Non-NT-based versions (e.g. 95, 98, etc.) are given
     * version 0.0.
     *
     * @return {string} The platform version or empty string if version cannot be
     *     determined.
     */
    export function getVersion(): string;

    /**
     * @param {string|number} version The version to check.
     * @return {boolean} Whether the browser version is higher or the same as the
     *     given version.
     */
    export function isVersionOrHigher(version: string): boolean;
}
