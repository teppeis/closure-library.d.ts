declare module goog {
    function require(name: 'goog.dom.forms'): typeof goog.dom.forms;
}

declare module goog.dom.forms {

    /**
     * Submits form data via a new window. This hides references to the parent
     * window and should be used when submitting forms to untrusted 3rd party urls.
     * By default, this uses the action and method of the specified form
     * element. It is possible to override the default action and method if an
     * optional submit element with formaction and/or formmethod attributes is
     * provided.
     * @param {!HTMLFormElement} form The form.
     * @param {!HTMLElement=} opt_submitElement The `<button>` or `<input>` element
     *     used to submit the form. The element should have a submit type.
     * @return {boolean} true If the form was submitted succesfully.
     * @throws {!Error} If opt_submitElement is not a valid form submit element.
     */
    function submitFormInNewWindow(form: HTMLFormElement, opt_submitElement?: HTMLElement): boolean;

    /**
     * Submits form data via a new window. This hides references to the parent
     * window and should be used when submitting forms to untrusted 3rd party urls.
     * @param {string} actionUri uri to submit form content to.
     * @param {string} method HTTP method used to submit the form.
     * @param {!goog.structs.Map<string, !Array<string>>} formData A map of the form
     *     data as field name to arrays of values.
     * @return {boolean} true If the form was submitted succesfully.
     */
    function submitFormDataInNewWindow(actionUri: string, method: string, formData: goog.structs.Map<string, Array<string>>): boolean;

    /**
     * Returns form data as a map of name to value arrays. This doesn't
     * support file inputs.
     * @param {HTMLFormElement} form The form.
     * @return {!goog.structs.Map<string, !Array<string>>} A map of the form data
     *     as field name to arrays of values.
     */
    function getFormDataMap(form: HTMLFormElement): goog.structs.Map<string, Array<string>>;

    /**
     * Returns the form data as an application/x-www-url-encoded string. This
     * doesn't support file inputs.
     * @param {HTMLFormElement} form The form.
     * @return {string} An application/x-www-url-encoded string.
     */
    function getFormDataString(form: HTMLFormElement): string;

    /**
     * Whether the form has a file input.
     * @param {HTMLFormElement} form The form.
     * @return {boolean} Whether the form has a file input.
     */
    function hasFileInput(form: HTMLFormElement): boolean;

    /**
     * Enables or disables either all elements in a form or a single form element.
     * @param {Element} el The element, either a form or an element within a form.
     * @param {boolean} disabled Whether the element should be disabled.
     */
    function setDisabled(el: Element, disabled: boolean): void;

    /**
     * Focuses, and optionally selects the content of, a form element.
     * @param {Element} el The form element.
     */
    function focusAndSelect(el: Element): void;

    /**
     * Whether a form element has a value.
     * @param {Element} el The element.
     * @return {boolean} Whether the form has a value.
     */
    function hasValue(el: Element): boolean;

    /**
     * Whether a named form field has a value.
     * @param {HTMLFormElement} form The form element.
     * @param {string} name Name of an input to the form.
     * @return {boolean} Whether the form has a value.
     */
    function hasValueByName(form: HTMLFormElement, name: string): boolean;

    /**
     * Gets the current value of any element with a type.
     * @param {Element} el The element.
     * @return {string|Array<string>|null} The current value of the element
     *     (or null).
     */
    function getValue(el: Element): string|Array<string>|void;

    /**
     * Returns the value of the named form field. In the case of radio buttons,
     * returns the value of the checked button with the given name.
     *
     * @param {HTMLFormElement} form The form element.
     * @param {string} name Name of an input to the form.
     *
     * @return {Array<string>|string|null} The value of the form element, or
     *     null if the form element does not exist or has no value.
     */
    function getValueByName(form: HTMLFormElement, name: string): Array<string>|string|void;

    /**
     * Sets the current value of any element with a type.
     * @param {Element} el The element.
     * @param {*=} opt_value The value to give to the element, which will be coerced
     *     by the browser in the default case using toString. This value should be
     *     an array for setting the value of select multiple elements.
     */
    function setValue(el: Element, opt_value?: any): void;
}
