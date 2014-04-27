declare module goog.dom.pattern {

    /**
     * Pattern object that matches any nodes at or below the current tree depth.
     *
     * @constructor
     * @extends {goog.dom.pattern.AbstractPattern}
     */
    export class AllChildren extends goog.dom.pattern.AbstractPattern {
        constructor();
        
        /**
         * Test whether the given token is on the same level.
         *
         * @param {Node} token Token to match against.
         * @param {goog.dom.TagWalkType} type The type of token.
         * @return {goog.dom.pattern.MatchType} {@code MATCHING} if the token is on the
         *     same level or deeper and {@code BACKTRACK_MATCH} if not.
         * @override
         */
        matchToken(token: Node, type: goog.dom.TagWalkType): goog.dom.pattern.MatchType;
    }
}
