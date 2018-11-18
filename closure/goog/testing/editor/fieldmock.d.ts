declare module goog {
    function require(name: 'goog.testing.editor.FieldMock'): typeof goog.testing.editor.FieldMock;
}

declare module goog.testing.editor {

    /**
     * Mock of goog.editor.Field.
     * @param {Window=} opt_window Window the field would edit.  Defaults to
     *     `window`.
     * @param {Window=} opt_appWindow "AppWindow" of the field, which can be
     *     different from `opt_window` when mocking a field that uses an
     *     iframe. Defaults to `opt_window`.
     * @param {goog.dom.AbstractRange=} opt_range An object (mock or real) to be
     *     returned by getRange(). If omitted, a new goog.dom.Range is created
     *     from the window every time getRange() is called.
     * @constructor
     * @extends {goog.testing.LooseMock}
     * @suppress {missingProperties} Mocks do not fit in the type system well.
     * @final
     */
    class FieldMock extends goog.testing.LooseMock {
        constructor(opt_window?: Window, opt_appWindow?: Window, opt_range?: goog.dom.AbstractRange);
    }
}
