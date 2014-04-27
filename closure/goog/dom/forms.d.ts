declare module goog.dom.forms {

    /**
     * Returns form data as a map of name to value arrays. This doesn't
     * support file inputs.
     * @param {HTMLFormElement} form The form.
     * @return {!goog.structs.Map} A map of the form data as form name to arrays of
     *     values.
     */
    export function getFormDataMap(form: HTMLFormElement): goog.structs.Map<any, any>;

    /**
     * Returns the form data as an application/x-www-url-encoded string. This
     * doesn't support file inputs.
     * @param {HTMLFormElement} form The form.
     * @return {string} An application/x-www-url-encoded string.
     */
    export function getFormDataString(form: HTMLFormElement): string;

    /**
     * Whether the form has a file input.
     * @param {HTMLFormElement} form The form.
     * @return {boolean} Whether the form has a file input.
     */
    export function hasFileInput(form: HTMLFormElement): boolean;

    /**
     * Enables or disables either all elements in a form or a single form element.
     * @param {Element} el The element, either a form or an element within a form.
     * @param {boolean} disabled Whether the element should be disabled.
     */
    export function setDisabled(el: Element, disabled: boolean): void;

    /**
     * Focuses, and optionally selects the content of, a form element.
     * @param {Element} el The form element.
     */
    export function focusAndSelect(el: Element): void;

    /**
     * Whether a form element has a value.
     * @param {Element} el The element.
     * @return {boolean} Whether the form has a value.
     */
    export function hasValue(el: Element): boolean;

    /**
     * Whether a named form field has a value.
     * @param {HTMLFormElement} form The form element.
     * @param {string} name Name of an input to the form.
     * @return {boolean} Whether the form has a value.
     */
    export function hasValueByName(form: HTMLFormElement, name: string): boolean;

    /**
     * Gets the current value of any element with a type.
     * @param {Element} el The element.
     * @return {string|Array.<string>|null} The current value of the element
     *     (or null).
     */
    export function getValue(el: Element): string;

    /**
     * Returns the value of the named form field. In the case of radio buttons,
     * returns the value of the checked button with the given name.
     *
     * @param {HTMLFormElement} form The form element.
     * @param {string} name Name of an input to the form.
     *
     * @return {Array.<string>|string|null} The value of the form element, or
     *     null if the form element does not exist or has no value.
     */
    export function getValueByName(form: HTMLFormElement, name: string): Array<string>;

    /**
     * Sets the current value of any element with a type.
     * @param {Element} el The element.
     * @param {*=} opt_value The value to give to the element, which will be coerced
     *     by the browser in the default case using toString. This value should be
     *     an array for setting the value of select multiple elements.
     */
    export function setValue(el: Element, opt_value?: any): void;
}

declare module goog.dom {

    /**
     * Alias for goog.dom.form.element.getValue
     * @type {Function}
     * @deprecated Use {@link goog.dom.forms.getValue} instead.
     */
    export var $F: Function;
}
