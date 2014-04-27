declare module goog.a11y.aria {

    /**
     * ARIA states and properties.
     * @enum {string}
     */
    export interface State {
        ACTIVEDESCENDANT: string;
        ATOMIC: string;
        AUTOCOMPLETE: string;
        BUSY: string;
        CHECKED: string;
        CONTROLS: string;
        DESCRIBEDBY: string;
        DISABLED: string;
        DROPEFFECT: string;
        EXPANDED: string;
        FLOWTO: string;
        GRABBED: string;
        HASPOPUP: string;
        HIDDEN: string;
        INVALID: string;
        LABEL: string;
        LABELLEDBY: string;
        LEVEL: string;
        LIVE: string;
        MULTILINE: string;
        MULTISELECTABLE: string;
        ORIENTATION: string;
        OWNS: string;
        POSINSET: string;
        PRESSED: string;
        READONLY: string;
        RELEVANT: string;
        REQUIRED: string;
        SELECTED: string;
        SETSIZE: string;
        SORT: string;
        VALUEMAX: string;
        VALUEMIN: string;
        VALUENOW: string;
        VALUETEXT: string;
    }

    /**
     * ARIA state values for AutoCompleteValues.
     * @enum {string}
     */
    export interface AutoCompleteValues {
        INLINE: string;
        LIST: string;
        BOTH: string;
        NONE: string;
    }

    /**
     * ARIA state values for DropEffectValues.
     * @enum {string}
     */
    export interface DropEffectValues {
        COPY: string;
        MOVE: string;
        LINK: string;
        EXECUTE: string;
        POPUP: string;
        NONE: string;
    }

    /**
     * ARIA state values for LivePriority.
     * @enum {string}
     */
    export interface LivePriority {
        OFF: string;
        POLITE: string;
        ASSERTIVE: string;
    }

    /**
     * ARIA state values for OrientationValues.
     * @enum {string}
     */
    export interface OrientationValues {
        VERTICAL: string;
        HORIZONTAL: string;
    }

    /**
     * ARIA state values for RelevantValues.
     * @enum {string}
     */
    export interface RelevantValues {
        ADDITIONS: string;
        REMOVALS: string;
        TEXT: string;
        ALL: string;
    }

    /**
     * ARIA state values for SortValues.
     * @enum {string}
     */
    export interface SortValues {
        ASCENDING: string;
        DESCENDING: string;
        NONE: string;
        OTHER: string;
    }

    /**
     * ARIA state values for CheckedValues.
     * @enum {string}
     */
    export interface CheckedValues {
        TRUE: string;
        FALSE: string;
        MIXED: string;
        UNDEFINED: string;
    }

    /**
     * ARIA state values for ExpandedValues.
     * @enum {string}
     */
    export interface ExpandedValues {
        TRUE: string;
        FALSE: string;
        UNDEFINED: string;
    }

    /**
     * ARIA state values for GrabbedValues.
     * @enum {string}
     */
    export interface GrabbedValues {
        TRUE: string;
        FALSE: string;
        UNDEFINED: string;
    }

    /**
     * ARIA state values for InvalidValues.
     * @enum {string}
     */
    export interface InvalidValues {
        FALSE: string;
        TRUE: string;
        GRAMMAR: string;
        SPELLING: string;
    }

    /**
     * ARIA state values for PressedValues.
     * @enum {string}
     */
    export interface PressedValues {
        TRUE: string;
        FALSE: string;
        MIXED: string;
        UNDEFINED: string;
    }

    /**
     * ARIA state values for SelectedValues.
     * @enum {string}
     */
    export interface SelectedValues {
        TRUE: string;
        FALSE: string;
        UNDEFINED: string;
    }
}
