declare module goog.string$.html {

    /**
     * An implementation of the {@code goog.string.HtmlSaxHandler} interface that
     * will take each of the html tags and sanitize it.
     *
     * @param {goog.string.StringBuffer} stringBuffer A string buffer, used to
     *     output the html as we sanitize it.
     * @param {?function(string):string} opt_urlPolicy An optional function to be
     *     applied in URLs.
     * @param {?function(string):string} opt_nmTokenPolicy An optional function to
     *     be applied in names.
     * @constructor
     * @extends {goog.string.html.HtmlSaxHandler}
     */
    export class HtmlSanitizer extends goog.string$.html.HtmlSaxHandler {
        constructor(stringBuffer: goog.string$.StringBuffer, opt_urlPolicy: (arg0: string) => string, opt_nmTokenPolicy: (arg0: string) => string);
    }

    /**
     * Strips unsafe tags and attributes from HTML.
     *
     * @param {string} htmlText The HTML text to sanitize.
     * @param {function(string): string=} opt_urlPolicy A transform to apply to URL
     *     attribute values.
     * @param {function(string): string=} opt_nmTokenPolicy A transform to apply to
     *     names, IDs, and classes.
     * @return {string} A sanitized HTML, safe to be embedded on the page.
     */
    export function htmlSanitize(htmlText: string, opt_urlPolicy?: (arg0: string) => string, opt_nmTokenPolicy?: (arg0: string) => string): string;
}

declare module goog.string$.html.HtmlSanitizer {

    /**
     * The HTML types the parser supports.
     * @enum {number}
     */
    export interface AttributeType {
        NONE: number;
        URI: number;
        URI_FRAGMENT: number;
        SCRIPT: number;
        STYLE: number;
        ID: number;
        IDREF: number;
        IDREFS: number;
        GLOBAL_NAME: number;
        LOCAL_NAME: number;
        CLASSES: number;
        FRAME_TARGET: number;
    }

    /**
     * A map of attributes to types it has.
     * @enum {number}
     */
    export interface Attributes {
        '*::class': number;
        '*::dir': number;
        '*::id': number;
        '*::lang': number;
        '*::onclick': number;
        '*::ondblclick': number;
        '*::onkeydown': number;
        '*::onkeypress': number;
        '*::onkeyup': number;
        '*::onload': number;
        '*::onmousedown': number;
        '*::onmousemove': number;
        '*::onmouseout': number;
        '*::onmouseover': number;
        '*::onmouseup': number;
        '*::style': number;
        '*::title': number;
        '*::accesskey': number;
        '*::tabindex': number;
        '*::onfocus': number;
        '*::onblur': number;
        'a::coords': number;
        'a::href': number;
        'a::hreflang': number;
        'a::name': number;
        'a::onblur': number;
        'a::rel': number;
        'a::rev': number;
        'a::shape': number;
        'a::target': number;
        'a::type': number;
        'area::accesskey': number;
        'area::alt': number;
        'area::coords': number;
        'area::href': number;
        'area::nohref': number;
        'area::onfocus': number;
        'area::shape': number;
        'area::tabindex': number;
        'area::target': number;
        'bdo::dir': number;
        'blockquote::cite': number;
        'br::clear': number;
        'button::accesskey': number;
        'button::disabled': number;
        'button::name': number;
        'button::onblur': number;
        'button::onfocus': number;
        'button::tabindex': number;
        'button::type': number;
        'button::value': number;
        'caption::align': number;
        'col::align': number;
        'col::char': number;
        'col::charoff': number;
        'col::span': number;
        'col::valign': number;
        'col::width': number;
        'colgroup::align': number;
        'colgroup::char': number;
        'colgroup::charoff': number;
        'colgroup::span': number;
        'colgroup::valign': number;
        'colgroup::width': number;
        'del::cite': number;
        'del::datetime': number;
        'dir::compact': number;
        'div::align': number;
        'dl::compact': number;
        'font::color': number;
        'font::face': number;
        'font::size': number;
        'form::accept': number;
        'form::action': number;
        'form::autocomplete': number;
        'form::enctype': number;
        'form::method': number;
        'form::name': number;
        'form::onreset': number;
        'form::onsubmit': number;
        'form::target': number;
        'h1::align': number;
        'h2::align': number;
        'h3::align': number;
        'h4::align': number;
        'h5::align': number;
        'h6::align': number;
        'hr::align': number;
        'hr::noshade': number;
        'hr::size': number;
        'hr::width': number;
        'img::align': number;
        'img::alt': number;
        'img::border': number;
        'img::height': number;
        'img::hspace': number;
        'img::ismap': number;
        'img::longdesc': number;
        'img::name': number;
        'img::src': number;
        'img::usemap': number;
        'img::vspace': number;
        'img::width': number;
        'input::accept': number;
        'input::accesskey': number;
        'input::autocomplete': number;
        'input::align': number;
        'input::alt': number;
        'input::checked': number;
        'input::disabled': number;
        'input::ismap': number;
        'input::maxlength': number;
        'input::name': number;
        'input::onblur': number;
        'input::onchange': number;
        'input::onfocus': number;
        'input::onselect': number;
        'input::readonly': number;
        'input::size': number;
        'input::src': number;
        'input::tabindex': number;
        'input::type': number;
        'input::usemap': number;
        'input::value': number;
        'ins::cite': number;
        'ins::datetime': number;
        'label::accesskey': number;
        'label::for': number;
        'label::onblur': number;
        'label::onfocus': number;
        'legend::accesskey': number;
        'legend::align': number;
        'li::type': number;
        'li::value': number;
        'map::name': number;
        'menu::compact': number;
        'ol::compact': number;
        'ol::start': number;
        'ol::type': number;
        'optgroup::disabled': number;
        'optgroup::label': number;
        'option::disabled': number;
        'option::label': number;
        'option::selected': number;
        'option::value': number;
        'p::align': number;
        'pre::width': number;
        'q::cite': number;
        'select::disabled': number;
        'select::multiple': number;
        'select::name': number;
        'select::onblur': number;
        'select::onchange': number;
        'select::onfocus': number;
        'select::size': number;
        'select::tabindex': number;
        'table::align': number;
        'table::bgcolor': number;
        'table::border': number;
        'table::cellpadding': number;
        'table::cellspacing': number;
        'table::frame': number;
        'table::rules': number;
        'table::summary': number;
        'table::width': number;
        'tbody::align': number;
        'tbody::char': number;
        'tbody::charoff': number;
        'tbody::valign': number;
        'td::abbr': number;
        'td::align': number;
        'td::axis': number;
        'td::bgcolor': number;
        'td::char': number;
        'td::charoff': number;
        'td::colspan': number;
        'td::headers': number;
        'td::height': number;
        'td::nowrap': number;
        'td::rowspan': number;
        'td::scope': number;
        'td::valign': number;
        'td::width': number;
        'textarea::accesskey': number;
        'textarea::cols': number;
        'textarea::disabled': number;
        'textarea::name': number;
        'textarea::onblur': number;
        'textarea::onchange': number;
        'textarea::onfocus': number;
        'textarea::onselect': number;
        'textarea::readonly': number;
        'textarea::rows': number;
        'textarea::tabindex': number;
        'tfoot::align': number;
        'tfoot::char': number;
        'tfoot::charoff': number;
        'tfoot::valign': number;
        'th::abbr': number;
        'th::align': number;
        'th::axis': number;
        'th::bgcolor': number;
        'th::char': number;
        'th::charoff': number;
        'th::colspan': number;
        'th::headers': number;
        'th::height': number;
        'th::nowrap': number;
        'th::rowspan': number;
        'th::scope': number;
        'th::valign': number;
        'th::width': number;
        'thead::align': number;
        'thead::char': number;
        'thead::charoff': number;
        'thead::valign': number;
        'tr::align': number;
        'tr::bgcolor': number;
        'tr::char': number;
        'tr::charoff': number;
        'tr::valign': number;
        'ul::compact': number;
        'ul::type': number;
    }
}
