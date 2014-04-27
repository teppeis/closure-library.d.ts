declare module goog.proto2 {

    /**
     * ObjectSerializer, a serializer which turns Messages into simplified
     * ECMAScript objects.
     *
     * @param {goog.proto2.ObjectSerializer.KeyOption=} opt_keyOption If specified,
     *     which key option to use when serializing/deserializing.
     * @constructor
     * @extends {goog.proto2.Serializer}
     */
    export class ObjectSerializer extends goog.proto2.Serializer {
        constructor(opt_keyOption?: goog.proto2.ObjectSerializer.KeyOption);
        
        /**
         * Serializes a message to an object.
         *
         * @param {goog.proto2.Message} message The message to be serialized.
         * @return {!Object} The serialized form of the message.
         * @override
         */
        serialize(message: goog.proto2.Message): Object;
        
        /**
         * Deserializes a message from an object and places the
         * data in the message.
         *
         * @param {goog.proto2.Message} message The message in which to
         *     place the information.
         * @param {*} data The data of the message.
         * @override
         */
        deserializeTo(message: goog.proto2.Message, data: any): void;
    }
}

declare module goog.proto2.ObjectSerializer {

    /**
     * An enumeration of the options for how to emit the keys in
     * the generated simplified object.
     *
     * @enum {number}
     */
    export interface KeyOption {
        TAG: number;
        NAME: number;
    }
}
