declare module goog.log {

    /**
     * @constructor
     * @final
     */
    export class Logger {
        constructor();
    }

    /**
     * @constructor
     * @final
     */
    export class Level {
        constructor();
    }

    /**
     * @constructor
     * @final
     */
    export class LogRecord {
        constructor();
    }

    /**
     * Finds or creates a logger for a named subsystem. If a logger has already been
     * created with the given name it is returned. Otherwise a new logger is
     * created. If a new logger is created its log level will be configured based
     * on the goog.debug.LogManager configuration and it will configured to also
     * send logging output to its parent's handlers.
     * @see goog.debug.LogManager
     *
     * @param {string} name A name for the logger. This should be a dot-separated
     *     name and should normally be based on the package name or class name of
     *     the subsystem, such as goog.net.BrowserChannel.
     * @param {goog.log.Level=} opt_level If provided, override the
     *     default logging level with the provided level.
     * @return {goog.log.Logger} The named logger or null if logging is disabled.
     */
    export function getLogger(name: string, opt_level?: goog.log.Level): goog.log.Logger;

    /**
     * Adds a handler to the logger. This doesn't use the event system because
     * we want to be able to add logging to the event system.
     * @param {goog.log.Logger} logger
     * @param {Function} handler Handler function to add.
     */
    export function addHandler(logger: goog.log.Logger, handler: Function): void;

    /**
     * Removes a handler from the logger. This doesn't use the event system because
     * we want to be able to add logging to the event system.
     * @param {goog.log.Logger} logger
     * @param {Function} handler Handler function to remove.
     * @return {boolean} Whether the handler was removed.
     */
    export function removeHandler(logger: goog.log.Logger, handler: Function): boolean;

    /**
     * Logs a message. If the logger is currently enabled for the
     * given message level then the given message is forwarded to all the
     * registered output Handler objects.
     * @param {goog.log.Logger} logger
     * @param {goog.log.Level} level One of the level identifiers.
     * @param {goog.debug.Loggable} msg The message to log.
     * @param {Error|Object=} opt_exception An exception associated with the
     *     message.
     */
    export function log(logger: goog.log.Logger, level: goog.log.Level, msg: goog.debug.Loggable, opt_exception?: Error): void;

    /**
     * Logs a message at the Level.SEVERE level.
     * If the logger is currently enabled for the given message level then the
     * given message is forwarded to all the registered output Handler objects.
     * @param {goog.log.Logger} logger
     * @param {goog.debug.Loggable} msg The message to log.
     * @param {Error=} opt_exception An exception associated with the message.
     */
    export function error(logger: goog.log.Logger, msg: goog.debug.Loggable, opt_exception?: Error): void;

    /**
     * Logs a message at the Level.WARNING level.
     * If the logger is currently enabled for the given message level then the
     * given message is forwarded to all the registered output Handler objects.
     * @param {goog.log.Logger} logger
     * @param {goog.debug.Loggable} msg The message to log.
     * @param {Error=} opt_exception An exception associated with the message.
     */
    export function warning(logger: goog.log.Logger, msg: goog.debug.Loggable, opt_exception?: Error): void;

    /**
     * Logs a message at the Level.INFO level.
     * If the logger is currently enabled for the given message level then the
     * given message is forwarded to all the registered output Handler objects.
     * @param {goog.log.Logger} logger
     * @param {goog.debug.Loggable} msg The message to log.
     * @param {Error=} opt_exception An exception associated with the message.
     */
    export function info(logger: goog.log.Logger, msg: goog.debug.Loggable, opt_exception?: Error): void;

    /**
     * Logs a message at the Level.Fine level.
     * If the logger is currently enabled for the given message level then the
     * given message is forwarded to all the registered output Handler objects.
     * @param {goog.log.Logger} logger
     * @param {goog.debug.Loggable} msg The message to log.
     * @param {Error=} opt_exception An exception associated with the message.
     */
    export function fine(logger: goog.log.Logger, msg: goog.debug.Loggable, opt_exception?: Error): void;
}
