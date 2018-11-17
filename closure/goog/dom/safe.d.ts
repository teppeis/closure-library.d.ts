declare module goog {
    function require(name: 'goog.dom.safe'): typeof goog.dom.safe;
    function require(name: 'goog.dom.safe.InsertAdjacentHtmlPosition'): typeof goog.dom.safe.InsertAdjacentHtmlPosition;
}

declare module goog.dom.safe {

    /** @enum {string} */
    type InsertAdjacentHtmlPosition = string;
    var InsertAdjacentHtmlPosition: {
        AFTERBEGIN: InsertAdjacentHtmlPosition;
        AFTEREND: InsertAdjacentHtmlPosition;
        BEFOREBEGIN: InsertAdjacentHtmlPosition;
        BEFOREEND: InsertAdjacentHtmlPosition;
    };

    /**
     * Inserts known-safe HTML into a Node, at the specified position.
     * @param {!Node} node The node on which to call insertAdjacentHTML.
     * @param {!goog.dom.safe.InsertAdjacentHtmlPosition} position Position where
     *     to insert the HTML.
     * @param {!goog.html.SafeHtml} html The known-safe HTML to insert.
     */
    function insertAdjacentHtml(node: Node, position: goog.dom.safe.InsertAdjacentHtmlPosition, html: goog.html.SafeHtml): void;

    /**
     * Assigns HTML to an element's innerHTML property. Helper to use only here and
     * in soy.js.
     * @param {?Element} elem The element whose innerHTML is to be assigned to.
     * @param {string} html
     */
    function unsafeSetInnerHtmlDoNotUseOrElse(elem: Element, html: string): void;

    /**
     * Assigns known-safe HTML to an element's innerHTML property.
     * @param {!Element} elem The element whose innerHTML is to be assigned to.
     * @param {!goog.html.SafeHtml} html The known-safe HTML to assign.
     * @throws {Error} If called with one of these tags: math, script, style, svg,
     *     template.
     */
    function setInnerHtml(elem: Element, html: goog.html.SafeHtml): void;

    /**
     * Assigns known-safe HTML to an element's outerHTML property.
     * @param {!Element} elem The element whose outerHTML is to be assigned to.
     * @param {!goog.html.SafeHtml} html The known-safe HTML to assign.
     */
    function setOuterHtml(elem: Element, html: goog.html.SafeHtml): void;

    /**
     * Safely assigns a URL a form element's action property.
     *
     * If url is of type goog.html.SafeUrl, its value is unwrapped and assigned to
     * anchor's href property.  If url is of type string however, it is first
     * sanitized using goog.html.SafeUrl.sanitize.
     *
     * Example usage:
     *   goog.dom.safe.setFormElementAction(formEl, url);
     * which is a safe alternative to
     *   formEl.action = url;
     * The latter can result in XSS vulnerabilities if url is a
     * user-/attacker-controlled value.
     *
     * @param {!Element} form The form element whose action property
     *     is to be assigned to.
     * @param {string|!goog.html.SafeUrl} url The URL to assign.
     * @see goog.html.SafeUrl#sanitize
     */
    function setFormElementAction(form: Element, url: string|goog.html.SafeUrl): void;

    /**
     * Safely assigns a URL to a button element's formaction property.
     *
     * If url is of type goog.html.SafeUrl, its value is unwrapped and assigned to
     * anchor's href property.  If url is of type string however, it is first
     * sanitized using goog.html.SafeUrl.sanitize.
     *
     * Example usage:
     *   goog.dom.safe.setButtonFormAction(buttonEl, url);
     * which is a safe alternative to
     *   buttonEl.action = url;
     * The latter can result in XSS vulnerabilities if url is a
     * user-/attacker-controlled value.
     *
     * @param {!Element} button The button element whose action property
     *     is to be assigned to.
     * @param {string|!goog.html.SafeUrl} url The URL to assign.
     * @see goog.html.SafeUrl#sanitize
     */
    function setButtonFormAction(button: Element, url: string|goog.html.SafeUrl): void;

    /**
     * Safely assigns a URL to an input element's formaction property.
     *
     * If url is of type goog.html.SafeUrl, its value is unwrapped and assigned to
     * anchor's href property.  If url is of type string however, it is first
     * sanitized using goog.html.SafeUrl.sanitize.
     *
     * Example usage:
     *   goog.dom.safe.setInputFormAction(inputEl, url);
     * which is a safe alternative to
     *   inputEl.action = url;
     * The latter can result in XSS vulnerabilities if url is a
     * user-/attacker-controlled value.
     *
     * @param {!Element} input The input element whose action property
     *     is to be assigned to.
     * @param {string|!goog.html.SafeUrl} url The URL to assign.
     * @see goog.html.SafeUrl#sanitize
     */
    function setInputFormAction(input: Element, url: string|goog.html.SafeUrl): void;

    /**
     * Sets the given element's style property to the contents of the provided
     * SafeStyle object.
     * @param {!Element} elem
     * @param {!goog.html.SafeStyle} style
     */
    function setStyle(elem: Element, style: goog.html.SafeStyle): void;

    /**
     * Writes known-safe HTML to a document.
     * @param {!Document} doc The document to be written to.
     * @param {!goog.html.SafeHtml} html The known-safe HTML to assign.
     */
    function documentWrite(doc: Document, html: goog.html.SafeHtml): void;

    /**
     * Safely assigns a URL to an anchor element's href property.
     *
     * If url is of type goog.html.SafeUrl, its value is unwrapped and assigned to
     * anchor's href property.  If url is of type string however, it is first
     * sanitized using goog.html.SafeUrl.sanitize.
     *
     * Example usage:
     *   goog.dom.safe.setAnchorHref(anchorEl, url);
     * which is a safe alternative to
     *   anchorEl.href = url;
     * The latter can result in XSS vulnerabilities if url is a
     * user-/attacker-controlled value.
     *
     * @param {!HTMLAnchorElement} anchor The anchor element whose href property
     *     is to be assigned to.
     * @param {string|!goog.html.SafeUrl} url The URL to assign.
     * @see goog.html.SafeUrl#sanitize
     */
    function setAnchorHref(anchor: HTMLAnchorElement, url: string|goog.html.SafeUrl): void;

    /**
     * Safely assigns a URL to an image element's src property.
     *
     * If url is of type goog.html.SafeUrl, its value is unwrapped and assigned to
     * image's src property.  If url is of type string however, it is first
     * sanitized using goog.html.SafeUrl.sanitize.
     *
     * @param {!HTMLImageElement} imageElement The image element whose src property
     *     is to be assigned to.
     * @param {string|!goog.html.SafeUrl} url The URL to assign.
     * @see goog.html.SafeUrl#sanitize
     */
    function setImageSrc(imageElement: HTMLImageElement, url: string|goog.html.SafeUrl): void;

    /**
     * Safely assigns a URL to a audio element's src property.
     *
     * If url is of type goog.html.SafeUrl, its value is unwrapped and assigned to
     * audio's src property.  If url is of type string however, it is first
     * sanitized using goog.html.SafeUrl.sanitize.
     *
     * @param {!HTMLAudioElement} audioElement The audio element whose src property
     *     is to be assigned to.
     * @param {string|!goog.html.SafeUrl} url The URL to assign.
     * @see goog.html.SafeUrl#sanitize
     */
    function setAudioSrc(audioElement: HTMLAudioElement, url: string|goog.html.SafeUrl): void;

    /**
     * Safely assigns a URL to a video element's src property.
     *
     * If url is of type goog.html.SafeUrl, its value is unwrapped and assigned to
     * video's src property.  If url is of type string however, it is first
     * sanitized using goog.html.SafeUrl.sanitize.
     *
     * @param {!HTMLVideoElement} videoElement The video element whose src property
     *     is to be assigned to.
     * @param {string|!goog.html.SafeUrl} url The URL to assign.
     * @see goog.html.SafeUrl#sanitize
     */
    function setVideoSrc(videoElement: HTMLVideoElement, url: string|goog.html.SafeUrl): void;

    /**
     * Safely assigns a URL to an embed element's src property.
     *
     * Example usage:
     *   goog.dom.safe.setEmbedSrc(embedEl, url);
     * which is a safe alternative to
     *   embedEl.src = url;
     * The latter can result in loading untrusted code unless it is ensured that
     * the URL refers to a trustworthy resource.
     *
     * @param {!HTMLEmbedElement} embed The embed element whose src property
     *     is to be assigned to.
     * @param {!goog.html.TrustedResourceUrl} url The URL to assign.
     */
    function setEmbedSrc(embed: HTMLEmbedElement, url: goog.html.TrustedResourceUrl): void;

    /**
     * Safely assigns a URL to a frame element's src property.
     *
     * Example usage:
     *   goog.dom.safe.setFrameSrc(frameEl, url);
     * which is a safe alternative to
     *   frameEl.src = url;
     * The latter can result in loading untrusted code unless it is ensured that
     * the URL refers to a trustworthy resource.
     *
     * @param {!HTMLFrameElement} frame The frame element whose src property
     *     is to be assigned to.
     * @param {!goog.html.TrustedResourceUrl} url The URL to assign.
     */
    function setFrameSrc(frame: HTMLFrameElement, url: goog.html.TrustedResourceUrl): void;

    /**
     * Safely assigns a URL to an iframe element's src property.
     *
     * Example usage:
     *   goog.dom.safe.setIframeSrc(iframeEl, url);
     * which is a safe alternative to
     *   iframeEl.src = url;
     * The latter can result in loading untrusted code unless it is ensured that
     * the URL refers to a trustworthy resource.
     *
     * @param {!HTMLIFrameElement} iframe The iframe element whose src property
     *     is to be assigned to.
     * @param {!goog.html.TrustedResourceUrl} url The URL to assign.
     */
    function setIframeSrc(iframe: HTMLIFrameElement, url: goog.html.TrustedResourceUrl): void;

    /**
     * Safely assigns HTML to an iframe element's srcdoc property.
     *
     * Example usage:
     *   goog.dom.safe.setIframeSrcdoc(iframeEl, safeHtml);
     * which is a safe alternative to
     *   iframeEl.srcdoc = html;
     * The latter can result in loading untrusted code.
     *
     * @param {!HTMLIFrameElement} iframe The iframe element whose srcdoc property
     *     is to be assigned to.
     * @param {!goog.html.SafeHtml} html The HTML to assign.
     */
    function setIframeSrcdoc(iframe: HTMLIFrameElement, html: goog.html.SafeHtml): void;

    /**
     * Safely sets a link element's href and rel properties. Whether or not
     * the URL assigned to href has to be a goog.html.TrustedResourceUrl
     * depends on the value of the rel property. If rel contains "stylesheet"
     * then a TrustedResourceUrl is required.
     *
     * Example usage:
     *   goog.dom.safe.setLinkHrefAndRel(linkEl, url, 'stylesheet');
     * which is a safe alternative to
     *   linkEl.rel = 'stylesheet';
     *   linkEl.href = url;
     * The latter can result in loading untrusted code unless it is ensured that
     * the URL refers to a trustworthy resource.
     *
     * @param {!HTMLLinkElement} link The link element whose href property
     *     is to be assigned to.
     * @param {string|!goog.html.SafeUrl|!goog.html.TrustedResourceUrl} url The URL
     *     to assign to the href property. Must be a TrustedResourceUrl if the
     *     value assigned to rel contains "stylesheet". A string value is
     *     sanitized with goog.html.SafeUrl.sanitize.
     * @param {string} rel The value to assign to the rel property.
     * @throws {Error} if rel contains "stylesheet" and url is not a
     *     TrustedResourceUrl
     * @see goog.html.SafeUrl#sanitize
     */
    function setLinkHrefAndRel(link: HTMLLinkElement, url: string|goog.html.SafeUrl|goog.html.TrustedResourceUrl, rel: string): void;

    /**
     * Safely assigns a URL to an object element's data property.
     *
     * Example usage:
     *   goog.dom.safe.setObjectData(objectEl, url);
     * which is a safe alternative to
     *   objectEl.data = url;
     * The latter can result in loading untrusted code unless setit is ensured that
     * the URL refers to a trustworthy resource.
     *
     * @param {!HTMLObjectElement} object The object element whose data property
     *     is to be assigned to.
     * @param {!goog.html.TrustedResourceUrl} url The URL to assign.
     */
    function setObjectData(object: HTMLObjectElement, url: goog.html.TrustedResourceUrl): void;

    /**
     * Safely assigns a URL to a script element's src property.
     *
     * Example usage:
     *   goog.dom.safe.setScriptSrc(scriptEl, url);
     * which is a safe alternative to
     *   scriptEl.src = url;
     * The latter can result in loading untrusted code unless it is ensured that
     * the URL refers to a trustworthy resource.
     *
     * @param {!HTMLScriptElement} script The script element whose src property
     *     is to be assigned to.
     * @param {!goog.html.TrustedResourceUrl} url The URL to assign.
     */
    function setScriptSrc(script: HTMLScriptElement, url: goog.html.TrustedResourceUrl): void;

    /**
     * Safely assigns a value to a script element's content.
     *
     * Example usage:
     *   goog.dom.safe.setScriptContent(scriptEl, content);
     * which is a safe alternative to
     *   scriptEl.text = content;
     * The latter can result in executing untrusted code unless it is ensured that
     * the code is loaded from a trustworthy resource.
     *
     * @param {!HTMLScriptElement} script The script element whose content is being
     *     set.
     * @param {!goog.html.SafeScript} content The content to assign.
     */
    function setScriptContent(script: HTMLScriptElement, content: goog.html.SafeScript): void;

    /**
     * Safely assigns a URL to a Location object's href property.
     *
     * If url is of type goog.html.SafeUrl, its value is unwrapped and assigned to
     * loc's href property.  If url is of type string however, it is first sanitized
     * using goog.html.SafeUrl.sanitize.
     *
     * Example usage:
     *   goog.dom.safe.setLocationHref(document.location, redirectUrl);
     * which is a safe alternative to
     *   document.location.href = redirectUrl;
     * The latter can result in XSS vulnerabilities if redirectUrl is a
     * user-/attacker-controlled value.
     *
     * @param {!Location} loc The Location object whose href property is to be
     *     assigned to.
     * @param {string|!goog.html.SafeUrl} url The URL to assign.
     * @see goog.html.SafeUrl#sanitize
     */
    function setLocationHref(loc: Location, url: string|goog.html.SafeUrl): void;

    /**
     * Safely assigns the URL of a Location object.
     *
     * If url is of type goog.html.SafeUrl, its value is unwrapped and
     * passed to Location#assign. If url is of type string however, it is
     * first sanitized using goog.html.SafeUrl.sanitize.
     *
     * Example usage:
     *   goog.dom.safe.assignHref(document.location, newUrl);
     * which is a safe alternative to
     *   document.location.assign(newUrl);
     * The latter can result in XSS vulnerabilities if newUrl is a
     * user-/attacker-controlled value.
     *
     * This has the same behaviour as setLocationHref, however some test
     * mock Location.assign instead of a property assignment.
     *
     * @param {!Location} loc The Location object which is to be assigned.
     * @param {string|!goog.html.SafeUrl} url The URL to assign.
     * @see goog.html.SafeUrl#sanitize
     */
    function assignLocation(loc: Location, url: string|goog.html.SafeUrl): void;

    /**
     * Safely replaces the URL of a Location object.
     *
     * If url is of type goog.html.SafeUrl, its value is unwrapped and
     * passed to Location#replace. If url is of type string however, it is
     * first sanitized using goog.html.SafeUrl.sanitize.
     *
     * Example usage:
     *   goog.dom.safe.replaceLocation(document.location, newUrl);
     * which is a safe alternative to
     *   document.location.replace(newUrl);
     * The latter can result in XSS vulnerabilities if newUrl is a
     * user-/attacker-controlled value.
     *
     * @param {!Location} loc The Location object which is to be replaced.
     * @param {string|!goog.html.SafeUrl} url The URL to assign.
     * @see goog.html.SafeUrl#sanitize
     */
    function replaceLocation(loc: Location, url: string|goog.html.SafeUrl): void;

    /**
     * Safely opens a URL in a new window (via window.open).
     *
     * If url is of type goog.html.SafeUrl, its value is unwrapped and passed in to
     * window.open.  If url is of type string however, it is first sanitized
     * using goog.html.SafeUrl.sanitize.
     *
     * Note that this function does not prevent leakages via the referer that is
     * sent by window.open. It is advised to only use this to open 1st party URLs.
     *
     * Example usage:
     *   goog.dom.safe.openInWindow(url);
     * which is a safe alternative to
     *   window.open(url);
     * The latter can result in XSS vulnerabilities if redirectUrl is a
     * user-/attacker-controlled value.
     *
     * @param {string|!goog.html.SafeUrl} url The URL to open.
     * @param {Window=} opt_openerWin Window of which to call the .open() method.
     *     Defaults to the global window.
     * @param {!goog.string.Const=} opt_name Name of the window to open in. Can be
     *     _top, etc as allowed by window.open().
     * @param {string=} opt_specs Comma-separated list of specifications, same as
     *     in window.open().
     * @param {boolean=} opt_replace Whether to replace the current entry in browser
     *     history, same as in window.open().
     * @return {Window} Window the url was opened in.
     */
    function openInWindow(url: string|goog.html.SafeUrl, opt_openerWin?: Window, opt_name?: goog.string$.Const, opt_specs?: string, opt_replace?: boolean): Window;
}
