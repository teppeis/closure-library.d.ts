declare module goog {
    function require(name: 'goog.labs.net.webChannel.Channel'): typeof goog.labs.net.webChannel.Channel;
}

declare module goog.labs.net.webChannel {

    /**
     * Shared interface between Channel and TestChannel to support callbacks
     * between WebChannelBase and BaseTestChannel and between Channel and
     * ChannelRequest.
     *
     * @interface
     */
    interface Channel {
    }
}
