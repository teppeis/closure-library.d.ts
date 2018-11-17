declare module goog {
    function require(name: 'goog.soy'): typeof goog.soy;
}

declare module goog.soy {

    /**
     * Type definition for strict Soy templates. Very useful when passing a template
     * as an argument.
     * @typedef {function(?, null=, ?Object<string, *>=):
     *     !goog.soy.data.SanitizedContent}
     */
    type StrictTemplate = (arg0: any, arg1?: void, arg2?: {[index: string]: any}) => goog.soy.data.SanitizedContent;

    /**
     * Type definition for strict Soy HTML templates. Very useful when passing
     * a template as an argument.
     * @typedef {function(?, null=, ?Object<string, *>=):
     *     !goog.soy.data.SanitizedHtml}
     */
    type StrictHtmlTemplate = (arg0: any, arg1?: void, arg2?: {[index: string]: any}) => goog.soy.data.SanitizedHtml;

    /**
     * Sets the processed template as the innerHTML of an element. It is recommended
     * to use this helper function instead of directly setting innerHTML in your
     * hand-written code, so that it will be easier to audit the code for cross-site
     * scripting vulnerabilities.
     *
     * @param {?Element} element The element whose content we are rendering into.
     * @param {!goog.soy.data.SanitizedContent} templateResult The processed
     *     template of kind HTML or TEXT (which will be escaped).
     * @template ARG_TYPES
     */
    function renderHtml<ARG_TYPES>(element: Element, templateResult: goog.soy.data.SanitizedContent): void;

    /**
     * Renders a Soy template and then set the output string as
     * the innerHTML of an element. It is recommended to use this helper function
     * instead of directly setting innerHTML in your hand-written code, so that it
     * will be easier to audit the code for cross-site scripting vulnerabilities.
     *
     * @param {Element} element The element whose content we are rendering into.
     * @param {?function(ARG_TYPES, Object<string, *>=):*|
     *     ?function(ARG_TYPES, null=, Object<string, *>=):*} template
     *     The Soy template defining the element's content.
     * @param {ARG_TYPES=} opt_templateData The data for the template.
     * @param {Object=} opt_injectedData The injected data for the template.
     * @template ARG_TYPES
     */
    function renderElement<ARG_TYPES>(element: Element, template: ((arg0: ARG_TYPES, arg1?: {[index: string]: any}) => any)|((arg0: ARG_TYPES, arg1?: void, arg2?: {[index: string]: any}) => any), opt_templateData?: ARG_TYPES, opt_injectedData?: Object): void;

    /**
     * Renders a Soy template into a single node or a document
     * fragment. If the rendered HTML string represents a single node, then that
     * node is returned (note that this is *not* a fragment, despite them name of
     * the method). Otherwise a document fragment is returned containing the
     * rendered nodes.
     *
     * @param {
     *     ?function(ARG_TYPES, Object<string, *>=):goog.soy.data.SanitizedContent|
     *     ?function(ARG_TYPES, null=, Object<string, *>=):
     *     goog.soy.data.SanitizedContent} template The Soy template defining the
     *     element's content. The kind of the template must be "html" or "text".
     * @param {ARG_TYPES=} opt_templateData The data for the template.
     * @param {Object=} opt_injectedData The injected data for the template.
     * @param {goog.dom.DomHelper=} opt_domHelper The DOM helper used to
     *     create DOM nodes; defaults to `goog.dom.getDomHelper`.
     * @return {!Node} The resulting node or document fragment.
     * @template ARG_TYPES
     */
    function renderAsFragment<ARG_TYPES>(template: ((arg0: ARG_TYPES, arg1?: {[index: string]: any}) => goog.soy.data.SanitizedContent)|((arg0: ARG_TYPES, arg1?: void, arg2?: {[index: string]: any}) => goog.soy.data.SanitizedContent), opt_templateData?: ARG_TYPES, opt_injectedData?: Object, opt_domHelper?: goog.dom.DomHelper): Node;

    /**
     * Renders a Soy template into a single node. If the rendered
     * HTML string represents a single node, then that node is returned. Otherwise,
     * a DIV element is returned containing the rendered nodes.
     *
     * @param {?function(ARG_TYPES, Object<string, *>=):*|
     *     ?function(ARG_TYPES, null=, Object<string, *>=):*} template
     *     The Soy template defining the element's content.
     * @param {ARG_TYPES=} opt_templateData The data for the template.
     * @param {Object=} opt_injectedData The injected data for the template.
     * @param {goog.dom.DomHelper=} opt_domHelper The DOM helper used to
     *     create DOM nodes; defaults to `goog.dom.getDomHelper`.
     * @return {!Element} Rendered template contents, wrapped in a parent DIV
     *     element if necessary.
     * @template ARG_TYPES
     */
    function renderAsElement<ARG_TYPES>(template: ((arg0: ARG_TYPES, arg1?: {[index: string]: any}) => any)|((arg0: ARG_TYPES, arg1?: void, arg2?: {[index: string]: any}) => any), opt_templateData?: ARG_TYPES, opt_injectedData?: Object, opt_domHelper?: goog.dom.DomHelper): Element;

    /**
     * Converts a processed Soy template into a single node. If the rendered
     * HTML string represents a single node, then that node is returned. Otherwise,
     * a DIV element is returned containing the rendered nodes.
     *
     * @param {!goog.soy.data.SanitizedContent} templateResult The processed
     *     template of kind HTML or TEXT (which will be escaped).
     * @param {?goog.dom.DomHelper=} opt_domHelper The DOM helper used to
     *     create DOM nodes; defaults to `goog.dom.getDomHelper`.
     * @return {!Element} Rendered template contents, wrapped in a parent DIV
     *     element if necessary.
     */
    function convertToElement(templateResult: goog.soy.data.SanitizedContent, opt_domHelper?: goog.dom.DomHelper): Element;
}
