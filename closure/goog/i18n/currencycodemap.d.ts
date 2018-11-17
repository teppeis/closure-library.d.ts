declare module goog.i18n {

    /**
     * Deprecated, this data is not being updated. Please use
     * {@link goog.i18n.currency}.
     *
     * The mapping of currency symbol through intl currency code.
     * The source of information is mostly from wikipedia and CLDR. Since there is
     * no authoritative source, items are judged by personal perception.
    
     * If an application need currency support that available in tier2, it
     * should extend currencyCodeMap to include tier2 data by doing this:
     *     goog.object.extend(goog.i18n.currencyCodeMap,
     *                        goog.i18n.currencyCodeMapTier2);
     *
     * @deprecated Use {@link goog.i18n.currency.getLocalCurrencyPattern} instead.
     * @const {!Object<string, string>}
     */
    var currencyCodeMap: any;

    /**
     * Deprecated, this data is not being updated. Please use
     * {@link goog.i18n.currency}.
     *
     * This group of currency data is unlikely to be used. In case they are,
     * program need to merge it into goog.locale.CurrencyCodeMap.
     *
     * @deprecated Call {@link goog.i18n.currency.addTier2Support} and then use
     *     {@link goog.i18n.currency.getLocalCurrencyPattern}.
     * @const {!Object<string, string>}
     */
    var currencyCodeMapTier2: any;
}
