declare module goog {
    function require(name: 'goog.html.textExtractor'): typeof goog.html.textExtractor;
}

declare module goog.html.textExtractor {

    /**
     * Safely extracts text from an untrusted HTML string using the HtmlSanitizer.
     * Compared to goog.html.utils.stripHtmlTags, it tries to be smarter about
     * printing newlines between blocks and leave out textual content that would not
     * be displayed to the user (such as SCRIPT and STYLE tags).
     * @param {string} html The untrusted HTML string.
     * @return {string}
     */
    function extractTextContent(html: string): string;

    /**
     * Whether the browser supports the text extractor. The extractor depends on the
     * HTML Sanitizer, which only supports IE starting from version 10.
     * Visible for testing.
     * @return {boolean}
     * @package
     */
    function isSupported(): boolean;
}
