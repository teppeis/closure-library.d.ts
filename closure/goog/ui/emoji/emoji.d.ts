declare module goog {
    function require(name: 'goog.ui.emoji.Emoji'): typeof goog.ui.emoji.Emoji;
}

declare module goog.ui.emoji {

    /**
     * Creates an emoji.
     *
     * A simple wrapper for an emoji.
     *
     * @param {string} url URL pointing to the source image for the emoji.
     * @param {string} id The id of the emoji, e.g., 'std.1'.
     * @param {number=} opt_height The height of the emoji, if undefined the
     *     natural height of the emoji is used.
     * @param {number=} opt_width The width of the emoji, if undefined the natural
     *     width of the emoji is used.
     * @param {string=} opt_altText The alt text for the emoji image, eg. the
     *     unicode character representation of the emoji.
     * @constructor
     * @final
     */
    class Emoji {
        constructor(url: string, id: string, opt_height?: number, opt_width?: number, opt_altText?: string);
        
        /**
         * The name of the goomoji attribute, used for emoji image elements.
         * @type {string}
         * @deprecated Use goog.ui.emoji.Emoji.DATA_ATTRIBUTE instead.
         */
        static ATTRIBUTE: string;
        
        /**
         * The name of the goomoji data-attribute, used for emoji image elements. Data
         * attributes are the preferred way in HTML5 to set custom attributes.
         * @type {string}
         */
        static DATA_ATTRIBUTE: string;
        
        /**
         * @return {string} The URL for this emoji.
         */
        getUrl(): string;
        
        /**
         * @return {string} The id of this emoji.
         */
        getId(): string;
        
        /**
         * @return {?number} The height of this emoji.
         */
        getHeight(): number;
        
        /**
         * @return {?number} The width of this emoji.
         */
        getWidth(): number;
        
        /**
         * @return {?string} The alt text for the emoji image, eg. the unicode character
         *     representation of the emoji.
         */
        getAltText(): string;
    }
}
