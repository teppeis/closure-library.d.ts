declare module goog.locale {

    /**
     * Enum of resources that can be registered.
     * @enum {string}
     */
    export interface Resource {
        DATE_TIME_CONSTANTS: string;
        NUMBER_FORMAT_CONSTANTS: string;
        TIME_ZONE_CONSTANTS: string;
        LOCAL_NAME_CONSTANTS: string;
        TIME_ZONE_SELECTED_IDS: string;
        TIME_ZONE_SELECTED_SHORT_NAMES: string;
        TIME_ZONE_SELECTED_LONG_NAMES: string;
        TIME_ZONE_ALL_LONG_NAMES: string;
    }

    /**
     * Set currnet locale to the specified one.
     * @param {string} localeName Locale name string. We are following the usage
     *     in CLDR, but can make a few compromise for existing name compatibility.
     */
    export function setLocale(localeName: string): void;

    /**
     * Retrieve the current locale
     * @return {string} Current locale name string.
     * @deprecated Use goog.LOCALE and goog.i18n instead.
     */
    export function getLocale(): string;

    /**
     * Returns the language-subtag of the given language code.
     *
     * @param {string} languageCode Language code to extract language subtag from.
     * @return {string} Language subtag (in lowercase).
     */
    export function getLanguageSubTag(languageCode: string): string;

    /**
     * Returns the region-sub-tag of the given language code.
     *
     * @param {string} languageCode Language code to extract region subtag from.
     * @return {string} Region sub-tag (in uppercase).
     */
    export function getRegionSubTag(languageCode: string): string;

    /**
     * Returns the script subtag of the locale with the first alphabet in uppercase
     * and the rest 3 characters in lower case.
     *
     * @param {string} languageCode Language Code to extract script subtag from.
     * @return {string} Script subtag.
     */
    export function getScriptSubTag(languageCode: string): string;

    /**
     * Returns the variant-sub-tag of the given language code.
     *
     * @param {string} languageCode Language code to extract variant subtag from.
     * @return {string} Variant sub-tag.
     */
    export function getVariantSubTag(languageCode: string): string;

    /**
     * Returns the country name of the provided language code in its native
     * language.
     *
     * This method depends on goog.locale.nativeNameConstants available from
     * nativenameconstants.js. User of this method has to add dependency to this.
     *
     * @param {string} countryCode Code to lookup the country name for.
     *
     * @return {string} Country name for the provided language code.
     */
    export function getNativeCountryName(countryCode: string): string;

    /**
     * Returns the localized country name for the provided language code in the
     * current or provided locale symbols set.
     *
     * This method depends on goog.locale.LocaleNameConstants__<locale> available
     * from http://go/js_locale_data. User of this method has to add dependency to
     * this.
     *
     * @param {string} languageCode Language code to lookup the country name for.
     * @param {Object=} opt_localeSymbols If omitted the current locale symbol
     *     set is used.
     *
     * @return {string} Localized country name.
     */
    export function getLocalizedCountryName(languageCode: string, opt_localeSymbols?: Object): string;

    /**
     * Returns the language name of the provided language code in its native
     * language.
     *
     * This method depends on goog.locale.nativeNameConstants available from
     * nativenameconstants.js. User of this method has to add dependency to this.
     *
     * @param {string} languageCode Language code to lookup the language name for.
     *
     * @return {string} Language name for the provided language code.
     */
    export function getNativeLanguageName(languageCode: string): string;

    /**
     * Returns the localized language name for the provided language code in
     * the current or provided locale symbols set.
     *
     * This method depends on goog.locale.LocaleNameConstants__<locale> available
     * from http://go/js_locale_data. User of this method has to add dependency to
     * this.
     *
     * @param {string} languageCode Language code to lookup the language name for.
     * @param {Object=} opt_localeSymbols locale symbol set if given.
     *
     * @return {string} Localized language name of the provided language code.
     */
    export function getLocalizedLanguageName(languageCode: string, opt_localeSymbols?: Object): string;

    /**
     * Register a resource object for certain locale.
     * @param {Object} dataObj The resource object being registered.
     * @param {goog.locale.Resource|string} resourceName String that represents
     *     the type of resource.
     * @param {string} localeName Locale ID.
     */
    export function registerResource(dataObj: Object, resourceName: goog.locale.Resource, localeName: string): void;

    /**
     * Returns true if the required resource has already been registered.
     * @param {goog.locale.Resource|string} resourceName String that represents
     *     the type of resource.
     * @param {string} localeName Locale ID.
     * @return {boolean} Whether the required resource has already been registered.
     */
    export function isResourceRegistered(resourceName: goog.locale.Resource, localeName: string): boolean;

    /**
     * Registers the timezone constants object for a given locale name.
     * @param {Object} dataObj The resource object.
     * @param {string} localeName Locale ID.
     * @deprecated Use goog.i18n.TimeZone, no longer need this.
     */
    export function registerTimeZoneConstants(dataObj: Object, localeName: string): void;

    /**
     * Registers the LocaleNameConstants constants object for a given locale name.
     * @param {Object} dataObj The resource object.
     * @param {string} localeName Locale ID.
     */
    export function registerLocaleNameConstants(dataObj: Object, localeName: string): void;

    /**
     * Registers the TimeZoneSelectedIds constants object for a given locale name.
     * @param {Object} dataObj The resource object.
     * @param {string} localeName Locale ID.
     */
    export function registerTimeZoneSelectedIds(dataObj: Object, localeName: string): void;

    /**
     * Registers the TimeZoneSelectedShortNames constants object for a given
     *     locale name.
     * @param {Object} dataObj The resource object.
     * @param {string} localeName Locale ID.
     */
    export function registerTimeZoneSelectedShortNames(dataObj: Object, localeName: string): void;

    /**
     * Registers the TimeZoneSelectedLongNames constants object for a given locale
     *     name.
     * @param {Object} dataObj The resource object.
     * @param {string} localeName Locale ID.
     */
    export function registerTimeZoneSelectedLongNames(dataObj: Object, localeName: string): void;

    /**
     * Registers the TimeZoneAllLongNames constants object for a given locale name.
     * @param {Object} dataObj The resource object.
     * @param {string} localeName Locale ID.
     */
    export function registerTimeZoneAllLongNames(dataObj: Object, localeName: string): void;

    /**
     * Retrieve specified resource for certain locale.
     * @param {string} resourceName String that represents the type of resource.
     * @param {string=} opt_locale Locale ID, if not given, current locale
     *     will be assumed.
     * @return {Object|undefined} The resource object that hold all the resource
     *     data, or undefined if not available.
     */
    export function getResource(resourceName: string, opt_locale?: string): Object;

    /**
     * Retrieve specified resource for certain locale with fallback. For example,
     * request of 'zh_CN' will be resolved in following order: zh_CN, zh, en.
     * If none of the above succeeds, of if the resource as indicated by
     * resourceName does not exist at all, undefined will be returned.
     *
     * @param {string} resourceName String that represents the type of resource.
     * @param {string=} opt_locale locale ID, if not given, current locale
     *     will be assumed.
     * @return {Object|undefined} The resource object for desired locale.
     */
    export function getResourceWithFallback(resourceName: string, opt_locale?: string): Object;
}
