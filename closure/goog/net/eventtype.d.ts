declare module goog.net {

    /**
     * Event names for network events
     * @enum {string}
     */
    export interface EventType {
        COMPLETE: string;
        SUCCESS: string;
        ERROR: string;
        ABORT: string;
        READY: string;
        READY_STATE_CHANGE: string;
        TIMEOUT: string;
        INCREMENTAL_DATA: string;
        PROGRESS: string;
    }
}
