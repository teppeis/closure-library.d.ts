declare module goog.a11y.aria {

    /**
     * ARIA states and properties.
     * @enum {string}
     */
    type State = string;
    var State: {
        ACTIVEDESCENDANT: State;
        ATOMIC: State;
        AUTOCOMPLETE: State;
        BUSY: State;
        CHECKED: State;
        CONTROLS: State;
        DESCRIBEDBY: State;
        DISABLED: State;
        DROPEFFECT: State;
        EXPANDED: State;
        FLOWTO: State;
        GRABBED: State;
        HASPOPUP: State;
        HIDDEN: State;
        INVALID: State;
        LABEL: State;
        LABELLEDBY: State;
        LEVEL: State;
        LIVE: State;
        MULTILINE: State;
        MULTISELECTABLE: State;
        ORIENTATION: State;
        OWNS: State;
        POSINSET: State;
        PRESSED: State;
        READONLY: State;
        RELEVANT: State;
        REQUIRED: State;
        SELECTED: State;
        SETSIZE: State;
        SORT: State;
        VALUEMAX: State;
        VALUEMIN: State;
        VALUENOW: State;
        VALUETEXT: State;
    };

    /**
     * ARIA state values for AutoCompleteValues.
     * @enum {string}
     */
    type AutoCompleteValues = string;
    var AutoCompleteValues: {
        INLINE: AutoCompleteValues;
        LIST: AutoCompleteValues;
        BOTH: AutoCompleteValues;
        NONE: AutoCompleteValues;
    };

    /**
     * ARIA state values for DropEffectValues.
     * @enum {string}
     */
    type DropEffectValues = string;
    var DropEffectValues: {
        COPY: DropEffectValues;
        MOVE: DropEffectValues;
        LINK: DropEffectValues;
        EXECUTE: DropEffectValues;
        POPUP: DropEffectValues;
        NONE: DropEffectValues;
    };

    /**
     * ARIA state values for LivePriority.
     * @enum {string}
     */
    type LivePriority = string;
    var LivePriority: {
        OFF: LivePriority;
        POLITE: LivePriority;
        ASSERTIVE: LivePriority;
    };

    /**
     * ARIA state values for OrientationValues.
     * @enum {string}
     */
    type OrientationValues = string;
    var OrientationValues: {
        VERTICAL: OrientationValues;
        HORIZONTAL: OrientationValues;
    };

    /**
     * ARIA state values for RelevantValues.
     * @enum {string}
     */
    type RelevantValues = string;
    var RelevantValues: {
        ADDITIONS: RelevantValues;
        REMOVALS: RelevantValues;
        TEXT: RelevantValues;
        ALL: RelevantValues;
    };

    /**
     * ARIA state values for SortValues.
     * @enum {string}
     */
    type SortValues = string;
    var SortValues: {
        ASCENDING: SortValues;
        DESCENDING: SortValues;
        NONE: SortValues;
        OTHER: SortValues;
    };

    /**
     * ARIA state values for CheckedValues.
     * @enum {string}
     */
    type CheckedValues = string;
    var CheckedValues: {
        TRUE: CheckedValues;
        FALSE: CheckedValues;
        MIXED: CheckedValues;
        UNDEFINED: CheckedValues;
    };

    /**
     * ARIA state values for ExpandedValues.
     * @enum {string}
     */
    type ExpandedValues = string;
    var ExpandedValues: {
        TRUE: ExpandedValues;
        FALSE: ExpandedValues;
        UNDEFINED: ExpandedValues;
    };

    /**
     * ARIA state values for GrabbedValues.
     * @enum {string}
     */
    type GrabbedValues = string;
    var GrabbedValues: {
        TRUE: GrabbedValues;
        FALSE: GrabbedValues;
        UNDEFINED: GrabbedValues;
    };

    /**
     * ARIA state values for InvalidValues.
     * @enum {string}
     */
    type InvalidValues = string;
    var InvalidValues: {
        FALSE: InvalidValues;
        TRUE: InvalidValues;
        GRAMMAR: InvalidValues;
        SPELLING: InvalidValues;
    };

    /**
     * ARIA state values for PressedValues.
     * @enum {string}
     */
    type PressedValues = string;
    var PressedValues: {
        TRUE: PressedValues;
        FALSE: PressedValues;
        MIXED: PressedValues;
        UNDEFINED: PressedValues;
    };

    /**
     * ARIA state values for SelectedValues.
     * @enum {string}
     */
    type SelectedValues = string;
    var SelectedValues: {
        TRUE: SelectedValues;
        FALSE: SelectedValues;
        UNDEFINED: SelectedValues;
    };
}
