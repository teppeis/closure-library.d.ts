declare module goog.userAgent.iphoto {

    /**
     * Whether the installed version of iPhoto is as new or newer than a given
     * version.
     * @param {string} version The version to check.
     * @return {boolean} Whether the installed version of iPhoto is as new or newer
     *     than a given version.
     */
    export function isVersion(version: string): boolean;
}
