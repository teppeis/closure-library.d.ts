declare module goog.ui {

    /**
     * Creates a new drag and drop detector.
     * @param {string=} opt_filePath The URL of the page to use for the detector.
     *     It should contain the same contents as dragdropdetector_target.html in
     *     the demos directory.
     * @constructor
     * @extends {goog.events.EventTarget}
     * @final
     */
    export class DragDropDetector extends goog.events.EventTarget {
        constructor(opt_filePath?: string);
        
        /**
         * Initial value for clientX and clientY indicating that the location has
         * never been updated.
         */
        static INIT_POSITION: any;
    }
}

declare module goog.ui.DragDropDetector {

    /**
     * Drag and drop event types.
     * @enum {string}
     */
    export interface EventType {
        IMAGE_DROPPED: string;
        LINK_DROPPED: string;
    }

    /**
     * Creates a new image drop event object.
     * @param {string} url The url of the dropped image.
     * @param {goog.math.Coordinate} position The screen position where the drop
     *     occurred.
     * @constructor
     * @extends {goog.events.Event}
     * @final
     */
    export class ImageDropEvent extends goog.events.Event {
        constructor(url: string, position: goog.math.Coordinate);
        
        /**
         * @return {string} The url of the image that was dropped.
         */
        getUrl(): string;
        
        /**
         * @return {goog.math.Coordinate} The screen position where the drop occurred.
         *     This may be have x and y of goog.ui.DragDropDetector.INIT_POSITION,
         *     indicating the drop position is unknown.
         */
        getPosition(): goog.math.Coordinate;
    }

    /**
     * Creates a new link drop event object.
     * @param {string} url The url of the dropped link.
     * @constructor
     * @extends {goog.events.Event}
     * @final
     */
    export class LinkDropEvent extends goog.events.Event {
        constructor(url: string);
        
        /**
         * @return {string} The url of the link that was dropped.
         */
        getUrl(): string;
    }
}
