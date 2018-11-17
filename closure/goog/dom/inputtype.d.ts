declare module goog {
    function require(name: 'goog.dom.InputType'): typeof goog.dom.InputType;
}

declare module goog.dom {

    /**
     * Enum of all input types (for INPUT, BUTTON, SELECT and TEXTAREA elements)
     * specified by the W3C HTML4.01 and HTML5 specifications.
     * @enum {string}
     */
    type InputType = string;
    var InputType: {
        BUTTON: InputType;
        CHECKBOX: InputType;
        COLOR: InputType;
        DATE: InputType;
        DATETIME: InputType;
        DATETIME_LOCAL: InputType;
        EMAIL: InputType;
        FILE: InputType;
        HIDDEN: InputType;
        IMAGE: InputType;
        MENU: InputType;
        MONTH: InputType;
        NUMBER: InputType;
        PASSWORD: InputType;
        RADIO: InputType;
        RANGE: InputType;
        RESET: InputType;
        SEARCH: InputType;
        SELECT_MULTIPLE: InputType;
        SELECT_ONE: InputType;
        SUBMIT: InputType;
        TEL: InputType;
        TEXT: InputType;
        TEXTAREA: InputType;
        TIME: InputType;
        URL: InputType;
        WEEK: InputType;
    };
}
