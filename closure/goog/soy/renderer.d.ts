declare module goog {
    function require(name: 'goog.soy.Renderer'): typeof goog.soy.Renderer;
}

declare module goog.soy {

    /**
     * Creates a new soy renderer. Note that the renderer will only be
     * guaranteed to work correctly within the document scope provided in
     * the DOM helper.
     *
     * @param {goog.soy.InjectedDataSupplier=} opt_injectedDataSupplier A supplier
     *     that provides an injected data.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper;
     *     defaults to that provided by `goog.dom.getDomHelper()`.
     * @constructor
     */
    class Renderer {
        constructor(opt_injectedDataSupplier?: goog.soy.InjectedDataSupplier, opt_domHelper?: goog.dom.DomHelper);
        
        /**
         * Renders a Soy template into a single node or a document fragment.
         * Delegates to `goog.soy.renderAsFragment`.
         *
         * @param {?function(ARG_TYPES, Object<string, *>=):*|
         *     ?function(ARG_TYPES, null=, Object<string, *>=):*} template
         *     The Soy template defining the element's content.
         * @param {ARG_TYPES=} opt_templateData The data for the template.
         * @return {!Node} The resulting node or document fragment.
         * @template ARG_TYPES
         */
        renderAsFragment<ARG_TYPES>(template: ((arg0: ARG_TYPES, arg1?: {[index: string]: any}) => any)|((arg0: ARG_TYPES, arg1?: void, arg2?: {[index: string]: any}) => any), opt_templateData?: ARG_TYPES): Node;
        
        /**
         * Renders a Soy template into a single node. If the rendered HTML
         * string represents a single node, then that node is returned.
         * Otherwise, a DIV element is returned containing the rendered nodes.
         * Delegates to `goog.soy.renderAsElement`.
         *
         * @param {?function(ARG_TYPES, Object<string, *>=):*|
         *     ?function(ARG_TYPES, null=, Object<string, *>=):*} template
         *     The Soy template defining the element's content.
         * @param {ARG_TYPES=} opt_templateData The data for the template.
         * @return {!Element} Rendered template contents, wrapped in a parent DIV
         *     element if necessary.
         * @template ARG_TYPES
         */
        renderAsElement<ARG_TYPES>(template: ((arg0: ARG_TYPES, arg1?: {[index: string]: any}) => any)|((arg0: ARG_TYPES, arg1?: void, arg2?: {[index: string]: any}) => any), opt_templateData?: ARG_TYPES): Element;
        
        /**
         * Renders a Soy template and then set the output string as the
         * innerHTML of the given element. Delegates to `goog.soy.renderElement`.
         *
         * @param {Element} element The element whose content we are rendering.
         * @param {?function(ARG_TYPES, Object<string, *>=):*|
         *     ?function(ARG_TYPES, null=, Object<string, *>=):*} template
         *     The Soy template defining the element's content.
         * @param {ARG_TYPES=} opt_templateData The data for the template.
         * @template ARG_TYPES
         */
        renderElement<ARG_TYPES>(element: Element, template: ((arg0: ARG_TYPES, arg1?: {[index: string]: any}) => any)|((arg0: ARG_TYPES, arg1?: void, arg2?: {[index: string]: any}) => any), opt_templateData?: ARG_TYPES): void;
        
        /**
         * Renders a Soy template and returns the output string.
         * If the template is strict, it must be of kind HTML. To render strict
         * templates of other kinds, use `renderText` (for {@code kind="text"}) or
         * `renderStrictOfKind`.
         *
         * @param {?function(ARG_TYPES, Object<string, *>=):*|
         *     ?function(ARG_TYPES, null=, Object<string, *>=):*} template
         *     The Soy template to render.
         * @param {ARG_TYPES=} opt_templateData The data for the template.
         * @return {string} The return value of rendering the template directly.
         * @template ARG_TYPES
         */
        render<ARG_TYPES>(template: ((arg0: ARG_TYPES, arg1?: {[index: string]: any}) => any)|((arg0: ARG_TYPES, arg1?: void, arg2?: {[index: string]: any}) => any), opt_templateData?: ARG_TYPES): string;
        
        /**
         * Renders a strict Soy template of kind="text" and returns the output string.
         * It is an error to use renderText on non-strict templates, or strict templates
         * of kinds other than "text".
         *
         * @param {?function(ARG_TYPES, Object<string, *>=):?goog.soy.data.UnsanitizedText|
         *     ?function(ARG_TYPES, null=, Object<string, *>=):
         *     ?goog.soy.data.UnsanitizedText} template The Soy template to render.
         * @param {ARG_TYPES=} opt_templateData The data for the template.
         * @return {string} The return value of rendering the template directly.
         * @template ARG_TYPES
         */
        renderText<ARG_TYPES>(template: ((arg0: ARG_TYPES, arg1?: {[index: string]: any}) => goog.soy.data.UnsanitizedText)|((arg0: ARG_TYPES, arg1?: void, arg2?: {[index: string]: any}) => goog.soy.data.UnsanitizedText), opt_templateData?: ARG_TYPES): string;
        
        /**
         * Renders a strict Soy HTML template and returns the output SanitizedHtml
         * object.
         * @param {?function(ARG_TYPES, Object<string, *>=):!goog.soy.data.SanitizedHtml|
         *     ?function(ARG_TYPES, null=, Object<string, *>=):
         *     !goog.soy.data.SanitizedHtml} template The Soy template to render.
         * @param {ARG_TYPES=} opt_templateData The data for the template.
         * @return {!goog.soy.data.SanitizedHtml}
         * @template ARG_TYPES
         */
        renderStrict<ARG_TYPES>(template: ((arg0: ARG_TYPES, arg1?: {[index: string]: any}) => goog.soy.data.SanitizedHtml)|((arg0: ARG_TYPES, arg1?: void, arg2?: {[index: string]: any}) => goog.soy.data.SanitizedHtml), opt_templateData?: ARG_TYPES): goog.soy.data.SanitizedHtml;
        
        /**
         * Renders a strict Soy template and returns the output SanitizedUri object.
         *
         * @param {function(ARG_TYPES, ?Object<string, *>=):!goog.soy.data.SanitizedUri|
         *     function(ARG_TYPES, null=, ?Object<string, *>=):
         *     !goog.soy.data.SanitizedUri} template The Soy template to render.
         * @param {ARG_TYPES=} opt_templateData The data for the template.
         * @return {!goog.soy.data.SanitizedUri}
         * @template ARG_TYPES
         */
        renderStrictUri<ARG_TYPES>(template: ((arg0: ARG_TYPES, arg1?: {[index: string]: any}) => goog.soy.data.SanitizedUri)|((arg0: ARG_TYPES, arg1?: void, arg2?: {[index: string]: any}) => goog.soy.data.SanitizedUri), opt_templateData?: ARG_TYPES): goog.soy.data.SanitizedUri;
        
        /**
         * Renders a strict Soy template and returns the output SanitizedContent object.
         *
         * @param {?function(ARG_TYPES, ?Object<string, *>=): RETURN_TYPE|
         *     ?function(ARG_TYPES, null=, ?Object<string, *>=): RETURN_TYPE}
         *     template The Soy template to render.
         * @param {ARG_TYPES=} opt_templateData The data for the template.
         * @param {goog.soy.data.SanitizedContentKind=} opt_kind The output kind to
         *     assert. If null, the template must be of kind="html" (i.e., opt_kind
         *     defaults to goog.soy.data.SanitizedContentKind.HTML).
         * @return {RETURN_TYPE} The SanitizedContent object. This return type is
         *     generic based on the return type of the template, such as
         *     goog.soy.data.SanitizedHtml.
         * @template ARG_TYPES, RETURN_TYPE
         */
        renderStrictOfKind<ARG_TYPES, RETURN_TYPE>(template: ((arg0: ARG_TYPES, arg1?: {[index: string]: any}) => RETURN_TYPE)|((arg0: ARG_TYPES, arg1?: void, arg2?: {[index: string]: any}) => RETURN_TYPE), opt_templateData?: ARG_TYPES, opt_kind?: goog.soy.data.SanitizedContentKind): RETURN_TYPE;
        
        /**
         * Renders a strict Soy template of kind="html" and returns the result as
         * a goog.html.SafeHtml object.
         *
         * Rendering a template that is not a strict template of kind="html" results in
         * a runtime error.
         *
         * @param {?function(ARG_TYPES, Object<string, *>=): !goog.soy.data.SanitizedHtml|
         *     ?function(ARG_TYPES, null=, Object<string, *>=):
         *     !goog.soy.data.SanitizedHtml} template The Soy template to render.
         * @param {ARG_TYPES=} opt_templateData The data for the template.
         * @return {!goog.html.SafeHtml}
         * @template ARG_TYPES
         */
        renderSafeHtml<ARG_TYPES>(template: ((arg0: ARG_TYPES, arg1?: {[index: string]: any}) => goog.soy.data.SanitizedHtml)|((arg0: ARG_TYPES, arg1?: void, arg2?: {[index: string]: any}) => goog.soy.data.SanitizedHtml), opt_templateData?: ARG_TYPES): goog.html.SafeHtml;
        
        /**
         * Renders a strict Soy template of kind="css" and returns the result as
         * a goog.html.SafeStyleSheet object.
         *
         * Rendering a template that is not a strict template of kind="css" results in
         * a runtime and compile-time error.
         *
         * @param {?function(ARG_TYPES, Object<string, *>=): !goog.soy.data.SanitizedCss|
         *     ?function(ARG_TYPES, null=, Object<string, *>=):
         *     !goog.soy.data.SanitizedCss} template The Soy template to render.
         * @param {ARG_TYPES=} opt_templateData The data for the template.
         * @return {!goog.html.SafeStyleSheet}
         * @template ARG_TYPES
         */
        renderSafeStyleSheet<ARG_TYPES>(template: ((arg0: ARG_TYPES, arg1?: {[index: string]: any}) => goog.soy.data.SanitizedCss)|((arg0: ARG_TYPES, arg1?: void, arg2?: {[index: string]: any}) => goog.soy.data.SanitizedCss), opt_templateData?: ARG_TYPES): goog.html.SafeStyleSheet;
        
        /**
         * @return {!goog.dom.DomHelper}
         * @protected
         */
        getDom(): goog.dom.DomHelper;
        
        /**
         * Observes rendering of templates by this renderer.
         * @param {Node=} opt_node Relevant node, if available. The node may or may
         *     not be in the document, depending on whether Soy is creating an element
         *     or writing into an existing one.
         * @protected
         */
        handleRender(opt_node?: Node): void;
    }

    /**
     * An interface for a supplier that provides Soy injected data.
     * @interface
     */
    interface InjectedDataSupplier {
        
        /**
         * Gets the injected data. Implementation may assume that
         * `goog.soy.Renderer` will treat the returned data as
         * immutable.  The renderer will call this every time one of its
         * {@code render*} methods is called.
         * @return {?} A key-value pair representing the injected data.
         */
        getData(): any;
    }
}
