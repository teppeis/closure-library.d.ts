declare module goog {
    function require(name: 'goog.dom.Attr'): typeof goog.dom.Attr;
}

declare module goog.dom {

    /**
     * Enum of all html attribute names specified by the HTML specifications.
     * @enum {string}
     */
    type Attr = string;
    var Attr: {
        ACCEPT: Attr;
        ACCEPT_CHARSET: Attr;
        ACCESSKEY: Attr;
        ACTION: Attr;
        ALIGN: Attr;
        ALT: Attr;
        ASYNC: Attr;
        AUTOCOMPLETE: Attr;
        AUTOFOCUS: Attr;
        AUTOPLAY: Attr;
        AUTOSAVE: Attr;
        BGCOLOR: Attr;
        BORDER: Attr;
        BUFFERED: Attr;
        CHALLENGE: Attr;
        CHARSET: Attr;
        CHECKED: Attr;
        CITE: Attr;
        CLASS: Attr;
        CODE: Attr;
        CODEBASE: Attr;
        COLOR: Attr;
        COLS: Attr;
        COLSPAN: Attr;
        CONTENT: Attr;
        CONTENTEDITABLE: Attr;
        CONTEXTMENU: Attr;
        CONTROLS: Attr;
        COORDS: Attr;
        DATA: Attr;
        DATETIME: Attr;
        DEFAULT: Attr;
        DEFER: Attr;
        DIR: Attr;
        DIRNAME: Attr;
        DISABLED: Attr;
        DOWNLOAD: Attr;
        DRAGGABLE: Attr;
        DROPZONE: Attr;
        ENCTYPE: Attr;
        FOR: Attr;
        FORM: Attr;
        FORMACTION: Attr;
        HEADERS: Attr;
        HEIGHT: Attr;
        HIDDEN: Attr;
        HIGH: Attr;
        HREF: Attr;
        HREFLANG: Attr;
        HTTP_EQUIV: Attr;
        ICON: Attr;
        ID: Attr;
        ISMAP: Attr;
        ITEMPROP: Attr;
        KEYTYPE: Attr;
        KIND: Attr;
        LABEL: Attr;
        LANG: Attr;
        LANGUAGE: Attr;
        LIST: Attr;
        LOOP: Attr;
        LOW: Attr;
        MANIFEST: Attr;
        MAX: Attr;
        MAXLENGTH: Attr;
        MEDIA: Attr;
        METHOD: Attr;
        MIN: Attr;
        MULTIPLE: Attr;
        MUTED: Attr;
        NAME: Attr;
        NOVALIDATE: Attr;
        OPEN: Attr;
        OPTIMUM: Attr;
        PATTERN: Attr;
        PING: Attr;
        PLACEHOLDER: Attr;
        POSTER: Attr;
        PRELOAD: Attr;
        RADIOGROUP: Attr;
        READONLY: Attr;
        REL: Attr;
        REQUIRED: Attr;
        REVERSED: Attr;
        ROWS: Attr;
        ROWSPAN: Attr;
        SANDBOX: Attr;
        SCOPE: Attr;
        SCOPED: Attr;
        SEAMLESS: Attr;
        SELECTED: Attr;
        SHAPE: Attr;
        SIZE: Attr;
        SIZES: Attr;
        SPAN: Attr;
        SPELLCHECK: Attr;
        SRC: Attr;
        SRCDOC: Attr;
        SRCLANG: Attr;
        SRCSET: Attr;
        START: Attr;
        STEP: Attr;
        STYLE: Attr;
        SUMMARY: Attr;
        TABINDEX: Attr;
        TARGET: Attr;
        TITLE: Attr;
        TYPE: Attr;
        USEMAP: Attr;
        VALUE: Attr;
        WIDTH: Attr;
        WRAP: Attr;
    };
}