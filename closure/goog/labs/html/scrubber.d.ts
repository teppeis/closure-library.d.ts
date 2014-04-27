declare module goog.labs.html.scrubber {

    /**
     * Groups of elements used to specify containment relationships.
     * @enum {number}
     * @private
     */
    export interface Group_ {
        BLOCK_: number;
        INLINE_: number;
        INLINE_MINUS_A_: number;
        MIXED_: number;
        TABLE_CONTENT_: number;
        HEAD_CONTENT_: number;
        TOP_CONTENT_: number;
        AREA_ELEMENT_: number;
        FORM_ELEMENT_: number;
        LEGEND_ELEMENT_: number;
        LI_ELEMENT_: number;
        DL_PART_: number;
        P_ELEMENT_: number;
        OPTIONS_ELEMENT_: number;
        OPTION_ELEMENT_: number;
        PARAM_ELEMENT_: number;
        TABLE_ELEMENT_: number;
        TR_ELEMENT_: number;
        TD_ELEMENT_: number;
        COL_ELEMENT_: number;
        CHARACTER_DATA_: number;
    }

    /**
     * Element scopes limit where close tags can have effects.
     * For example, a table cannot be implicitly closed by a {@code </p>} even if
     * the table appears inside a {@code <p>} because the {@code <table>} element
     * introduces a scope.
     *
     * @enum {number}
     * @private
     */
    export interface Scope_ {
        COMMON_: number;
        BUTTON_: number;
        LIST_ITEM_: number;
        TABLE_: number;
    }

    /** Character code constant for {@code '<'}.  @private */
    export var CC_LT_: any;

    /** Character code constant for {@code '!'}.  @private */
    export var CC_BANG_: any;

    /** Character code constant for {@code '/'}.  @private */
    export var CC_SLASH_: any;

    /** Character code constant for {@code '?'}.  @private */
    export var CC_QMARK_: any;

    /** @const @private */
    export var ALL_SCOPES_: any;

    /**
     * Replaces tags not on the white-list with empty text nodes, dropping all
     * attributes, and drops other non-text nodes such as comments.
     *
     * @param {!Object.<string, boolean>} tagWhitelist a set of lower-case tag names
     *    following the convention established by {@link goog.object.createSet}.
     * @param {!Object.<string, Object.<string, goog.labs.html.AttributeRewriter>>}
     *        attrWhitelist
     *    maps lower-case tag names and the special string {@code "*"} to functions
     *    from decoded attribute values to sanitized values or {@code null} to
     *    indicate that the attribute is not allowed with that value.
     *
     *    For example, if {@code attrWhitelist['a']['href']} is defined then it
     *    is used to sanitize the value of the link's URL.
     *
     *    If {@code attrWhitelist['*']['id']} is defined, and
     *    {@code attrWhitelist['div']['id']} is not, then the former is used to
     *    sanitize any {@code id} attribute on a {@code <div>} element.
     * @param {string} html a string of HTML
     * @return {string} the input but with potentially dangerous tokens removed.
     */
    export function scrub(tagWhitelist: Object, attrWhitelist: Object, html: string): string;

    /**
     * Balances tags in trusted HTML.
     * @param {string} html a string of HTML
     * @return {string} the input but with an end-tag for each non-void start tag
     *     and only for non-void start tags, and with start and end tags nesting
     *     properly.
     */
    export function balance(html: string): string;
}
