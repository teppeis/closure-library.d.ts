declare module goog.disposable {

    /**
     * Interface for a disposable object.  If a instance requires cleanup
     * (references COM objects, DOM nodes, or other disposable objects), it should
     * implement this interface (it may subclass goog.Disposable).
     * @record
     */
    function IDisposable(): void;
}
