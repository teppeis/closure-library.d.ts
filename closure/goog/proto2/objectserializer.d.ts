declare module goog {
    function require(name: 'goog.proto2.ObjectSerializer'): typeof goog.proto2.ObjectSerializer;
}

declare module goog.proto2 {

    /**
     * ObjectSerializer, a serializer which turns Messages into simplified
     * ECMAScript objects.
     *
     * @param {goog.proto2.ObjectSerializer.KeyOption=} opt_keyOption If specified,
     *     which key option to use when serializing/deserializing.
     * @param {boolean=} opt_serializeBooleanAsNumber If specified and true, the
     *     serializer will convert boolean values to 0/1 representation.
     * @constructor
     * @extends {goog.proto2.Serializer}
     */
    class ObjectSerializer extends goog.proto2.Serializer {
        constructor(opt_keyOption?: goog.proto2.ObjectSerializer.KeyOption, opt_serializeBooleanAsNumber?: boolean);
        
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
     * For serialization, the option specifies the keys to use in the serialized
     * object.
     *
     * For deserialization, the option specifies which keys are allowed; an object
     * serialized by TAG may be deserialized by TAG or by NAME or by
     * CAMEL_CASE_NAME, but an object serialized by NAME cannot be deserialized by
     * TAG.  An object serialized with any option can be deserialized by
     * CAMEL_CASE_NAME.
     *
     * @enum {number}
     */
    type KeyOption = number;
    var KeyOption: {
        TAG: KeyOption;
        NAME: KeyOption;
        CAMEL_CASE_NAME: KeyOption;
    };
}
