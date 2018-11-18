declare module goog {
    function require(name: 'goog.labs.pubsub.BroadcastPubSub'): typeof goog.labs.pubsub.BroadcastPubSub;
}

declare module goog.labs.pubsub {

    /**
     * Topic-based publish/subscribe messaging implementation that provides
     * communication between browsing contexts that share the same origin.
     *
     * Wrapper around PubSub that utilizes localStorage to broadcast publications to
     * all browser windows with the same origin as the publishing context. This
     * allows for topic-based publish/subscribe implementation of strings shared by
     * all browser contexts that share the same origin.
     *
     * Delivery is guaranteed on all browsers except IE8 where topics expire after a
     * timeout. Publishing of a topic within a callback function provides no
     * guarantee on ordering in that there is a possibility that separate origin
     * contexts may see topics in a different order.
     *
     * This class is not secure and in certain cases (e.g., a browser crash) data
     * that is published can persist in localStorage indefinitely. Do not use this
     * class to communicate private or confidential information.
     *
     * On IE8, localStorage is shared by the http and https origins. An attacker
     * could possibly leverage this to publish to the secure origin.
     *
     * goog.labs.pubsub.BroadcastPubSub wraps an instance of PubSub rather than
     * subclassing because the base PubSub class allows publishing of arbitrary
     * objects.
     *
     * Special handling is done for the IE8 browsers. See the IE8_EVENTS_KEY_
     * constant and the `publish` function for more information.
     *
     *
     * @constructor @struct @extends {goog.Disposable}
     */
    class BroadcastPubSub extends goog.Disposable {
        constructor();
        
        /**
         * Publishes a message to a topic. Remote subscriptions in other tabs/windows
         * are dispatched via local storage events. Local subscriptions are called
         * asynchronously via Timer event in order to simulate remote behavior locally.
         * @param {string} topic Topic to publish to.
         * @param {...string} var_args String arguments that are applied to each
         *     subscription function.
         */
        publish(topic: string, ...var_args: string[]): void;
        
        /**
         * Unsubscribes a function from a topic. Only deletes the first match found.
         * Returns a Boolean indicating whether a subscription was removed.
         * @param {string} topic Topic to unsubscribe from.
         * @param {Function} fn Function to unsubscribe.
         * @param {Object=} opt_context Object in whose context the function was to be
         *     called (the global scope if none).
         * @return {boolean} Whether a matching subscription was removed.
         */
        unsubscribe(topic: string, fn: Function, opt_context?: Object): boolean;
        
        /**
         * Removes a subscription based on the key returned by {@link #subscribe}. No-op
         * if no matching subscription is found. Returns a Boolean indicating whether a
         * subscription was removed.
         * @param {number} key Subscription key.
         * @return {boolean} Whether a matching subscription was removed.
         */
        unsubscribeByKey(key: number): boolean;
        
        /**
         * Subscribes a function to a topic. The function is invoked as a method on the
         * given `opt_context` object, or in the global scope if no context is
         * specified. Subscribing the same function to the same topic multiple times
         * will result in multiple function invocations while publishing. Returns a
         * subscription key that can be used to unsubscribe the function from the topic
         * via {@link #unsubscribeByKey}.
         * @param {string} topic Topic to subscribe to.
         * @param {Function} fn Function to be invoked when a message is published to
         *     the given topic.
         * @param {Object=} opt_context Object in whose context the function is to be
         *     called (the global scope if none).
         * @return {number} Subscription key.
         */
        subscribe(topic: string, fn: Function, opt_context?: Object): number;
        
        /**
         * Subscribes a single-use function to a topic. The function is invoked as a
         * method on the given `opt_context` object, or in the global scope if no
         * context is specified, and is then unsubscribed. Returns a subscription key
         * that can be used to unsubscribe the function from the topic via {@link
         * #unsubscribeByKey}.
         * @param {string} topic Topic to subscribe to.
         * @param {Function} fn Function to be invoked once and then unsubscribed when
         *     a message is published to the given topic.
         * @param {Object=} opt_context Object in whose context the function is to be
         *     called (the global scope if none).
         * @return {number} Subscription key.
         */
        subscribeOnce(topic: string, fn: Function, opt_context?: Object): number;
        
        /**
         * Returns the number of subscriptions to the given topic (or all topics if
         * unspecified). This number will not change while publishing any messages.
         * @param {string=} opt_topic The topic (all topics if unspecified).
         * @return {number} Number of subscriptions to the topic.
         */
        getCount(opt_topic?: string): number;
        
        /**
         * Clears the subscription list for a topic, or all topics if unspecified.
         * @param {string=} opt_topic Topic to clear (all topics if unspecified).
         */
        clear(opt_topic?: string): void;
    }
}

declare module goog.labs.pubsub.BroadcastPubSub {

    /**
     * All instances of this object should access elements using strings and not
     * attributes. Since we are communicating across browser tabs we could be
     * dealing with different versions of javascript and thus may have different
     * obfuscation in each tab.
     * @private @typedef {{'timestamp': number, 'args': !Array<string>}}
     */
    type Ie8Event_ = {timestamp: number; args: Array<string>};
}
