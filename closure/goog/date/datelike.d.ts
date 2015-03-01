declare module goog {
    function require(name: 'goog.date.DateLike'): typeof goog.date.DateLike;
}

declare module goog.date {

    /**
     * @typedef {(Date|goog.date.Date)}
     */
    type DateLike = Date|goog.date.Date;
}
