declare module goog.ui.editor {

    /**
     * A type of goog.ui.editor.AbstractDialog for editing/creating a link.
     * @param {goog.dom.DomHelper} domHelper DomHelper to be used to create the
     *     dialog's dom structure.
     * @param {goog.editor.Link} link The target link.
     * @constructor
     * @extends {goog.ui.editor.AbstractDialog}
     * @final
     */
    export class LinkDialog extends goog.ui.editor.AbstractDialog {
        constructor(domHelper: goog.dom.DomHelper, link: goog.editor.Link);
        
        /**
         * Sets the warning message to show to users about including email addresses on
         * public web pages.
         * @param {string} emailWarning Warning message to show users about including
         *     email addresses on the web.
         */
        setEmailWarning(emailWarning: string): void;
        
        /**
         * Tells the dialog to show a checkbox where the user can choose to have the
         * link open in a new window.
         * @param {boolean} startChecked Whether to check the checkbox the first
         *     time the dialog is shown. Subesquent times the checkbox will remember its
         *     previous state.
         */
        showOpenLinkInNewWindow(startChecked: boolean): void;
        
        /**
         * Tells the dialog to show a checkbox where the user can choose to add
         * 'rel=nofollow' attribute to the link.
         */
        showRelNoFollow(): void;
        
        /**
         * Tells the dialog whether to show the 'text to display' div.
         * When the target element of the dialog is an image, there is no link text
         * to modify. This function can be used for this kind of situations.
         * @param {boolean} visible Whether to make 'text to display' div visible.
         */
        setTextToDisplayVisible(visible: boolean): void;
        
        /**
         * Tells the plugin whether to stop leaking the page's url via the referrer
         * header when the "test this link" link is clicked.
         * @param {boolean} stop Whether to stop leaking the referrer.
         */
        setStopReferrerLeaks(stop: boolean): void;
        
        /**
         * Tells the dialog whether the autogeneration of text to display is to be
         * enabled.
         * @param {boolean} enable Whether to enable the feature.
         */
        setAutogenFeatureEnabled(enable: boolean): void;
        
        /**
         * Checks if {@code str} contains {@code "nofollow"} as a separate word.
         * @param {string} str String to be tested.  This is usually {@code rel}
         *     attribute of an {@code HTMLAnchorElement} object.
         * @return {boolean} {@code true} if {@code str} contains {@code nofollow}.
         */
        static hasNoFollow(str: string): boolean;
        
        /**
         * Removes {@code "nofollow"} from {@code rel} if it's present as a separate
         * word.
         * @param {string} rel Input string.  This is usually {@code rel} attribute of
         *     an {@code HTMLAnchorElement} object.
         * @return {string} {@code rel} with any {@code "nofollow"} removed.
         */
        static removeNoFollow(rel: string): string;
        
        /**
         * Creates and returns the event object to be used when dispatching the OK
         * event to listeners based on which tab is currently selected and the contents
         * of the input fields of that tab.
         * @return {!goog.ui.editor.LinkDialog.OkEvent} The event object to be used when
         *     dispatching the OK event to listeners.
         * @protected
         * @override
         */
        createOkEvent(): goog.ui.editor.LinkDialog.OkEvent;
    }
}

declare module goog.ui.editor.LinkDialog {

    /**
     * Events specific to the link dialog.
     * @enum {string}
     */
    export interface EventType {
        BEFORE_TEST_LINK: string;
    }

    /**
     * IDs for relevant DOM elements.
     * @enum {string}
     * @private
     */
    export interface Id_ {
        TEXT_TO_DISPLAY: string;
        ON_WEB_TAB: string;
        ON_WEB_INPUT: string;
        EMAIL_ADDRESS_TAB: string;
        EMAIL_ADDRESS_INPUT: string;
        EMAIL_WARNING: string;
        TAB_INPUT_SUFFIX: string;
    }

    /**
     * OK event object for the link dialog.
     * @param {string} linkText Text the user chose to display for the link.
     * @param {string} linkUrl Url the user chose for the link to point to.
     * @param {boolean} openInNewWindow Whether the link should open in a new window
     *     when clicked.
     * @param {boolean} noFollow Whether the link should have 'rel=nofollow'
     *     attribute.
     * @constructor
     * @extends {goog.events.Event}
     * @final
     */
    export class OkEvent extends goog.events.Event {
        constructor(linkText: string, linkUrl: string, openInNewWindow: boolean, noFollow: boolean);
    }

    /**
     * Event fired before testing a link by opening it in another window.
     * Calling preventDefault will stop the link from being opened.
     * @param {string} url Url of the link being tested.
     * @constructor
     * @extends {goog.events.Event}
     * @final
     */
    export class BeforeTestLinkEvent extends goog.events.Event {
        constructor(url: string);
    }
}
