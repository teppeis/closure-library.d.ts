declare module goog.webgl {

    /**
     * @const
     * @type {number}
     */
    export var DEPTH_BUFFER_BIT: number;

    /**
     * @const
     * @type {number}
     */
    export var STENCIL_BUFFER_BIT: number;

    /**
     * @const
     * @type {number}
     */
    export var COLOR_BUFFER_BIT: number;

    /**
     * @const
     * @type {number}
     */
    export var POINTS: number;

    /**
     * @const
     * @type {number}
     */
    export var LINES: number;

    /**
     * @const
     * @type {number}
     */
    export var LINE_LOOP: number;

    /**
     * @const
     * @type {number}
     */
    export var LINE_STRIP: number;

    /**
     * @const
     * @type {number}
     */
    export var TRIANGLES: number;

    /**
     * @const
     * @type {number}
     */
    export var TRIANGLE_STRIP: number;

    /**
     * @const
     * @type {number}
     */
    export var TRIANGLE_FAN: number;

    /**
     * @const
     * @type {number}
     */
    export var ZERO: number;

    /**
     * @const
     * @type {number}
     */
    export var ONE: number;

    /**
     * @const
     * @type {number}
     */
    export var SRC_COLOR: number;

    /**
     * @const
     * @type {number}
     */
    export var ONE_MINUS_SRC_COLOR: number;

    /**
     * @const
     * @type {number}
     */
    export var SRC_ALPHA: number;

    /**
     * @const
     * @type {number}
     */
    export var ONE_MINUS_SRC_ALPHA: number;

    /**
     * @const
     * @type {number}
     */
    export var DST_ALPHA: number;

    /**
     * @const
     * @type {number}
     */
    export var ONE_MINUS_DST_ALPHA: number;

    /**
     * @const
     * @type {number}
     */
    export var DST_COLOR: number;

    /**
     * @const
     * @type {number}
     */
    export var ONE_MINUS_DST_COLOR: number;

    /**
     * @const
     * @type {number}
     */
    export var SRC_ALPHA_SATURATE: number;

    /**
     * @const
     * @type {number}
     */
    export var FUNC_ADD: number;

    /**
     * @const
     * @type {number}
     */
    export var BLEND_EQUATION: number;

    /**
     * Same as BLEND_EQUATION
     * @const
     * @type {number}
     */
    export var BLEND_EQUATION_RGB: number;

    /**
     * @const
     * @type {number}
     */
    export var BLEND_EQUATION_ALPHA: number;

    /**
     * @const
     * @type {number}
     */
    export var FUNC_SUBTRACT: number;

    /**
     * @const
     * @type {number}
     */
    export var FUNC_REVERSE_SUBTRACT: number;

    /**
     * @const
     * @type {number}
     */
    export var BLEND_DST_RGB: number;

    /**
     * @const
     * @type {number}
     */
    export var BLEND_SRC_RGB: number;

    /**
     * @const
     * @type {number}
     */
    export var BLEND_DST_ALPHA: number;

    /**
     * @const
     * @type {number}
     */
    export var BLEND_SRC_ALPHA: number;

    /**
     * @const
     * @type {number}
     */
    export var CONSTANT_COLOR: number;

    /**
     * @const
     * @type {number}
     */
    export var ONE_MINUS_CONSTANT_COLOR: number;

    /**
     * @const
     * @type {number}
     */
    export var CONSTANT_ALPHA: number;

    /**
     * @const
     * @type {number}
     */
    export var ONE_MINUS_CONSTANT_ALPHA: number;

    /**
     * @const
     * @type {number}
     */
    export var BLEND_COLOR: number;

    /**
     * @const
     * @type {number}
     */
    export var ARRAY_BUFFER: number;

    /**
     * @const
     * @type {number}
     */
    export var ELEMENT_ARRAY_BUFFER: number;

    /**
     * @const
     * @type {number}
     */
    export var ARRAY_BUFFER_BINDING: number;

    /**
     * @const
     * @type {number}
     */
    export var ELEMENT_ARRAY_BUFFER_BINDING: number;

    /**
     * @const
     * @type {number}
     */
    export var STREAM_DRAW: number;

    /**
     * @const
     * @type {number}
     */
    export var STATIC_DRAW: number;

    /**
     * @const
     * @type {number}
     */
    export var DYNAMIC_DRAW: number;

    /**
     * @const
     * @type {number}
     */
    export var BUFFER_SIZE: number;

    /**
     * @const
     * @type {number}
     */
    export var BUFFER_USAGE: number;

    /**
     * @const
     * @type {number}
     */
    export var CURRENT_VERTEX_ATTRIB: number;

    /**
     * @const
     * @type {number}
     */
    export var FRONT: number;

    /**
     * @const
     * @type {number}
     */
    export var BACK: number;

    /**
     * @const
     * @type {number}
     */
    export var FRONT_AND_BACK: number;

    /**
     * @const
     * @type {number}
     */
    export var CULL_FACE: number;

    /**
     * @const
     * @type {number}
     */
    export var BLEND: number;

    /**
     * @const
     * @type {number}
     */
    export var DITHER: number;

    /**
     * @const
     * @type {number}
     */
    export var STENCIL_TEST: number;

    /**
     * @const
     * @type {number}
     */
    export var DEPTH_TEST: number;

    /**
     * @const
     * @type {number}
     */
    export var SCISSOR_TEST: number;

    /**
     * @const
     * @type {number}
     */
    export var POLYGON_OFFSET_FILL: number;

    /**
     * @const
     * @type {number}
     */
    export var SAMPLE_ALPHA_TO_COVERAGE: number;

    /**
     * @const
     * @type {number}
     */
    export var SAMPLE_COVERAGE: number;

    /**
     * @const
     * @type {number}
     */
    export var NO_ERROR: number;

    /**
     * @const
     * @type {number}
     */
    export var INVALID_ENUM: number;

    /**
     * @const
     * @type {number}
     */
    export var INVALID_VALUE: number;

    /**
     * @const
     * @type {number}
     */
    export var INVALID_OPERATION: number;

    /**
     * @const
     * @type {number}
     */
    export var OUT_OF_MEMORY: number;

    /**
     * @const
     * @type {number}
     */
    export var CW: number;

    /**
     * @const
     * @type {number}
     */
    export var CCW: number;

    /**
     * @const
     * @type {number}
     */
    export var LINE_WIDTH: number;

    /**
     * @const
     * @type {number}
     */
    export var ALIASED_POINT_SIZE_RANGE: number;

    /**
     * @const
     * @type {number}
     */
    export var ALIASED_LINE_WIDTH_RANGE: number;

    /**
     * @const
     * @type {number}
     */
    export var CULL_FACE_MODE: number;

    /**
     * @const
     * @type {number}
     */
    export var FRONT_FACE: number;

    /**
     * @const
     * @type {number}
     */
    export var DEPTH_RANGE: number;

    /**
     * @const
     * @type {number}
     */
    export var DEPTH_WRITEMASK: number;

    /**
     * @const
     * @type {number}
     */
    export var DEPTH_CLEAR_VALUE: number;

    /**
     * @const
     * @type {number}
     */
    export var DEPTH_FUNC: number;

    /**
     * @const
     * @type {number}
     */
    export var STENCIL_CLEAR_VALUE: number;

    /**
     * @const
     * @type {number}
     */
    export var STENCIL_FUNC: number;

    /**
     * @const
     * @type {number}
     */
    export var STENCIL_FAIL: number;

    /**
     * @const
     * @type {number}
     */
    export var STENCIL_PASS_DEPTH_FAIL: number;

    /**
     * @const
     * @type {number}
     */
    export var STENCIL_PASS_DEPTH_PASS: number;

    /**
     * @const
     * @type {number}
     */
    export var STENCIL_REF: number;

    /**
     * @const
     * @type {number}
     */
    export var STENCIL_VALUE_MASK: number;

    /**
     * @const
     * @type {number}
     */
    export var STENCIL_WRITEMASK: number;

    /**
     * @const
     * @type {number}
     */
    export var STENCIL_BACK_FUNC: number;

    /**
     * @const
     * @type {number}
     */
    export var STENCIL_BACK_FAIL: number;

    /**
     * @const
     * @type {number}
     */
    export var STENCIL_BACK_PASS_DEPTH_FAIL: number;

    /**
     * @const
     * @type {number}
     */
    export var STENCIL_BACK_PASS_DEPTH_PASS: number;

    /**
     * @const
     * @type {number}
     */
    export var STENCIL_BACK_REF: number;

    /**
     * @const
     * @type {number}
     */
    export var STENCIL_BACK_VALUE_MASK: number;

    /**
     * @const
     * @type {number}
     */
    export var STENCIL_BACK_WRITEMASK: number;

    /**
     * @const
     * @type {number}
     */
    export var VIEWPORT: number;

    /**
     * @const
     * @type {number}
     */
    export var SCISSOR_BOX: number;

    /**
     * @const
     * @type {number}
     */
    export var COLOR_CLEAR_VALUE: number;

    /**
     * @const
     * @type {number}
     */
    export var COLOR_WRITEMASK: number;

    /**
     * @const
     * @type {number}
     */
    export var UNPACK_ALIGNMENT: number;

    /**
     * @const
     * @type {number}
     */
    export var PACK_ALIGNMENT: number;

    /**
     * @const
     * @type {number}
     */
    export var MAX_TEXTURE_SIZE: number;

    /**
     * @const
     * @type {number}
     */
    export var MAX_VIEWPORT_DIMS: number;

    /**
     * @const
     * @type {number}
     */
    export var SUBPIXEL_BITS: number;

    /**
     * @const
     * @type {number}
     */
    export var RED_BITS: number;

    /**
     * @const
     * @type {number}
     */
    export var GREEN_BITS: number;

    /**
     * @const
     * @type {number}
     */
    export var BLUE_BITS: number;

    /**
     * @const
     * @type {number}
     */
    export var ALPHA_BITS: number;

    /**
     * @const
     * @type {number}
     */
    export var DEPTH_BITS: number;

    /**
     * @const
     * @type {number}
     */
    export var STENCIL_BITS: number;

    /**
     * @const
     * @type {number}
     */
    export var POLYGON_OFFSET_UNITS: number;

    /**
     * @const
     * @type {number}
     */
    export var POLYGON_OFFSET_FACTOR: number;

    /**
     * @const
     * @type {number}
     */
    export var TEXTURE_BINDING_2D: number;

    /**
     * @const
     * @type {number}
     */
    export var SAMPLE_BUFFERS: number;

    /**
     * @const
     * @type {number}
     */
    export var SAMPLES: number;

    /**
     * @const
     * @type {number}
     */
    export var SAMPLE_COVERAGE_VALUE: number;

    /**
     * @const
     * @type {number}
     */
    export var SAMPLE_COVERAGE_INVERT: number;

    /**
     * @const
     * @type {number}
     */
    export var COMPRESSED_TEXTURE_FORMATS: number;

    /**
     * @const
     * @type {number}
     */
    export var DONT_CARE: number;

    /**
     * @const
     * @type {number}
     */
    export var FASTEST: number;

    /**
     * @const
     * @type {number}
     */
    export var NICEST: number;

    /**
     * @const
     * @type {number}
     */
    export var GENERATE_MIPMAP_HINT: number;

    /**
     * @const
     * @type {number}
     */
    export var BYTE: number;

    /**
     * @const
     * @type {number}
     */
    export var UNSIGNED_BYTE: number;

    /**
     * @const
     * @type {number}
     */
    export var SHORT: number;

    /**
     * @const
     * @type {number}
     */
    export var UNSIGNED_SHORT: number;

    /**
     * @const
     * @type {number}
     */
    export var INT: number;

    /**
     * @const
     * @type {number}
     */
    export var UNSIGNED_INT: number;

    /**
     * @const
     * @type {number}
     */
    export var FLOAT: number;

    /**
     * @const
     * @type {number}
     */
    export var DEPTH_COMPONENT: number;

    /**
     * @const
     * @type {number}
     */
    export var ALPHA: number;

    /**
     * @const
     * @type {number}
     */
    export var RGB: number;

    /**
     * @const
     * @type {number}
     */
    export var RGBA: number;

    /**
     * @const
     * @type {number}
     */
    export var LUMINANCE: number;

    /**
     * @const
     * @type {number}
     */
    export var LUMINANCE_ALPHA: number;

    /**
     * @const
     * @type {number}
     */
    export var UNSIGNED_SHORT_4_4_4_4: number;

    /**
     * @const
     * @type {number}
     */
    export var UNSIGNED_SHORT_5_5_5_1: number;

    /**
     * @const
     * @type {number}
     */
    export var UNSIGNED_SHORT_5_6_5: number;

    /**
     * @const
     * @type {number}
     */
    export var FRAGMENT_SHADER: number;

    /**
     * @const
     * @type {number}
     */
    export var VERTEX_SHADER: number;

    /**
     * @const
     * @type {number}
     */
    export var MAX_VERTEX_ATTRIBS: number;

    /**
     * @const
     * @type {number}
     */
    export var MAX_VERTEX_UNIFORM_VECTORS: number;

    /**
     * @const
     * @type {number}
     */
    export var MAX_VARYING_VECTORS: number;

    /**
     * @const
     * @type {number}
     */
    export var MAX_COMBINED_TEXTURE_IMAGE_UNITS: number;

    /**
     * @const
     * @type {number}
     */
    export var MAX_VERTEX_TEXTURE_IMAGE_UNITS: number;

    /**
     * @const
     * @type {number}
     */
    export var MAX_TEXTURE_IMAGE_UNITS: number;

    /**
     * @const
     * @type {number}
     */
    export var MAX_FRAGMENT_UNIFORM_VECTORS: number;

    /**
     * @const
     * @type {number}
     */
    export var SHADER_TYPE: number;

    /**
     * @const
     * @type {number}
     */
    export var DELETE_STATUS: number;

    /**
     * @const
     * @type {number}
     */
    export var LINK_STATUS: number;

    /**
     * @const
     * @type {number}
     */
    export var VALIDATE_STATUS: number;

    /**
     * @const
     * @type {number}
     */
    export var ATTACHED_SHADERS: number;

    /**
     * @const
     * @type {number}
     */
    export var ACTIVE_UNIFORMS: number;

    /**
     * @const
     * @type {number}
     */
    export var ACTIVE_ATTRIBUTES: number;

    /**
     * @const
     * @type {number}
     */
    export var SHADING_LANGUAGE_VERSION: number;

    /**
     * @const
     * @type {number}
     */
    export var CURRENT_PROGRAM: number;

    /**
     * @const
     * @type {number}
     */
    export var NEVER: number;

    /**
     * @const
     * @type {number}
     */
    export var LESS: number;

    /**
     * @const
     * @type {number}
     */
    export var EQUAL: number;

    /**
     * @const
     * @type {number}
     */
    export var LEQUAL: number;

    /**
     * @const
     * @type {number}
     */
    export var GREATER: number;

    /**
     * @const
     * @type {number}
     */
    export var NOTEQUAL: number;

    /**
     * @const
     * @type {number}
     */
    export var GEQUAL: number;

    /**
     * @const
     * @type {number}
     */
    export var ALWAYS: number;

    /**
     * @const
     * @type {number}
     */
    export var KEEP: number;

    /**
     * @const
     * @type {number}
     */
    export var REPLACE: number;

    /**
     * @const
     * @type {number}
     */
    export var INCR: number;

    /**
     * @const
     * @type {number}
     */
    export var DECR: number;

    /**
     * @const
     * @type {number}
     */
    export var INVERT: number;

    /**
     * @const
     * @type {number}
     */
    export var INCR_WRAP: number;

    /**
     * @const
     * @type {number}
     */
    export var DECR_WRAP: number;

    /**
     * @const
     * @type {number}
     */
    export var VENDOR: number;

    /**
     * @const
     * @type {number}
     */
    export var RENDERER: number;

    /**
     * @const
     * @type {number}
     */
    export var VERSION: number;

    /**
     * @const
     * @type {number}
     */
    export var NEAREST: number;

    /**
     * @const
     * @type {number}
     */
    export var LINEAR: number;

    /**
     * @const
     * @type {number}
     */
    export var NEAREST_MIPMAP_NEAREST: number;

    /**
     * @const
     * @type {number}
     */
    export var LINEAR_MIPMAP_NEAREST: number;

    /**
     * @const
     * @type {number}
     */
    export var NEAREST_MIPMAP_LINEAR: number;

    /**
     * @const
     * @type {number}
     */
    export var LINEAR_MIPMAP_LINEAR: number;

    /**
     * @const
     * @type {number}
     */
    export var TEXTURE_MAG_FILTER: number;

    /**
     * @const
     * @type {number}
     */
    export var TEXTURE_MIN_FILTER: number;

    /**
     * @const
     * @type {number}
     */
    export var TEXTURE_WRAP_S: number;

    /**
     * @const
     * @type {number}
     */
    export var TEXTURE_WRAP_T: number;

    /**
     * @const
     * @type {number}
     */
    export var TEXTURE_2D: number;

    /**
     * @const
     * @type {number}
     */
    export var TEXTURE: number;

    /**
     * @const
     * @type {number}
     */
    export var TEXTURE_CUBE_MAP: number;

    /**
     * @const
     * @type {number}
     */
    export var TEXTURE_BINDING_CUBE_MAP: number;

    /**
     * @const
     * @type {number}
     */
    export var TEXTURE_CUBE_MAP_POSITIVE_X: number;

    /**
     * @const
     * @type {number}
     */
    export var TEXTURE_CUBE_MAP_NEGATIVE_X: number;

    /**
     * @const
     * @type {number}
     */
    export var TEXTURE_CUBE_MAP_POSITIVE_Y: number;

    /**
     * @const
     * @type {number}
     */
    export var TEXTURE_CUBE_MAP_NEGATIVE_Y: number;

    /**
     * @const
     * @type {number}
     */
    export var TEXTURE_CUBE_MAP_POSITIVE_Z: number;

    /**
     * @const
     * @type {number}
     */
    export var TEXTURE_CUBE_MAP_NEGATIVE_Z: number;

    /**
     * @const
     * @type {number}
     */
    export var MAX_CUBE_MAP_TEXTURE_SIZE: number;

    /**
     * @const
     * @type {number}
     */
    export var TEXTURE0: number;

    /**
     * @const
     * @type {number}
     */
    export var TEXTURE1: number;

    /**
     * @const
     * @type {number}
     */
    export var TEXTURE2: number;

    /**
     * @const
     * @type {number}
     */
    export var TEXTURE3: number;

    /**
     * @const
     * @type {number}
     */
    export var TEXTURE4: number;

    /**
     * @const
     * @type {number}
     */
    export var TEXTURE5: number;

    /**
     * @const
     * @type {number}
     */
    export var TEXTURE6: number;

    /**
     * @const
     * @type {number}
     */
    export var TEXTURE7: number;

    /**
     * @const
     * @type {number}
     */
    export var TEXTURE8: number;

    /**
     * @const
     * @type {number}
     */
    export var TEXTURE9: number;

    /**
     * @const
     * @type {number}
     */
    export var TEXTURE10: number;

    /**
     * @const
     * @type {number}
     */
    export var TEXTURE11: number;

    /**
     * @const
     * @type {number}
     */
    export var TEXTURE12: number;

    /**
     * @const
     * @type {number}
     */
    export var TEXTURE13: number;

    /**
     * @const
     * @type {number}
     */
    export var TEXTURE14: number;

    /**
     * @const
     * @type {number}
     */
    export var TEXTURE15: number;

    /**
     * @const
     * @type {number}
     */
    export var TEXTURE16: number;

    /**
     * @const
     * @type {number}
     */
    export var TEXTURE17: number;

    /**
     * @const
     * @type {number}
     */
    export var TEXTURE18: number;

    /**
     * @const
     * @type {number}
     */
    export var TEXTURE19: number;

    /**
     * @const
     * @type {number}
     */
    export var TEXTURE20: number;

    /**
     * @const
     * @type {number}
     */
    export var TEXTURE21: number;

    /**
     * @const
     * @type {number}
     */
    export var TEXTURE22: number;

    /**
     * @const
     * @type {number}
     */
    export var TEXTURE23: number;

    /**
     * @const
     * @type {number}
     */
    export var TEXTURE24: number;

    /**
     * @const
     * @type {number}
     */
    export var TEXTURE25: number;

    /**
     * @const
     * @type {number}
     */
    export var TEXTURE26: number;

    /**
     * @const
     * @type {number}
     */
    export var TEXTURE27: number;

    /**
     * @const
     * @type {number}
     */
    export var TEXTURE28: number;

    /**
     * @const
     * @type {number}
     */
    export var TEXTURE29: number;

    /**
     * @const
     * @type {number}
     */
    export var TEXTURE30: number;

    /**
     * @const
     * @type {number}
     */
    export var TEXTURE31: number;

    /**
     * @const
     * @type {number}
     */
    export var ACTIVE_TEXTURE: number;

    /**
     * @const
     * @type {number}
     */
    export var REPEAT: number;

    /**
     * @const
     * @type {number}
     */
    export var CLAMP_TO_EDGE: number;

    /**
     * @const
     * @type {number}
     */
    export var MIRRORED_REPEAT: number;

    /**
     * @const
     * @type {number}
     */
    export var FLOAT_VEC2: number;

    /**
     * @const
     * @type {number}
     */
    export var FLOAT_VEC3: number;

    /**
     * @const
     * @type {number}
     */
    export var FLOAT_VEC4: number;

    /**
     * @const
     * @type {number}
     */
    export var INT_VEC2: number;

    /**
     * @const
     * @type {number}
     */
    export var INT_VEC3: number;

    /**
     * @const
     * @type {number}
     */
    export var INT_VEC4: number;

    /**
     * @const
     * @type {number}
     */
    export var BOOL: number;

    /**
     * @const
     * @type {number}
     */
    export var BOOL_VEC2: number;

    /**
     * @const
     * @type {number}
     */
    export var BOOL_VEC3: number;

    /**
     * @const
     * @type {number}
     */
    export var BOOL_VEC4: number;

    /**
     * @const
     * @type {number}
     */
    export var FLOAT_MAT2: number;

    /**
     * @const
     * @type {number}
     */
    export var FLOAT_MAT3: number;

    /**
     * @const
     * @type {number}
     */
    export var FLOAT_MAT4: number;

    /**
     * @const
     * @type {number}
     */
    export var SAMPLER_2D: number;

    /**
     * @const
     * @type {number}
     */
    export var SAMPLER_CUBE: number;

    /**
     * @const
     * @type {number}
     */
    export var VERTEX_ATTRIB_ARRAY_ENABLED: number;

    /**
     * @const
     * @type {number}
     */
    export var VERTEX_ATTRIB_ARRAY_SIZE: number;

    /**
     * @const
     * @type {number}
     */
    export var VERTEX_ATTRIB_ARRAY_STRIDE: number;

    /**
     * @const
     * @type {number}
     */
    export var VERTEX_ATTRIB_ARRAY_TYPE: number;

    /**
     * @const
     * @type {number}
     */
    export var VERTEX_ATTRIB_ARRAY_NORMALIZED: number;

    /**
     * @const
     * @type {number}
     */
    export var VERTEX_ATTRIB_ARRAY_POINTER: number;

    /**
     * @const
     * @type {number}
     */
    export var VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: number;

    /**
     * @const
     * @type {number}
     */
    export var COMPILE_STATUS: number;

    /**
     * @const
     * @type {number}
     */
    export var LOW_FLOAT: number;

    /**
     * @const
     * @type {number}
     */
    export var MEDIUM_FLOAT: number;

    /**
     * @const
     * @type {number}
     */
    export var HIGH_FLOAT: number;

    /**
     * @const
     * @type {number}
     */
    export var LOW_INT: number;

    /**
     * @const
     * @type {number}
     */
    export var MEDIUM_INT: number;

    /**
     * @const
     * @type {number}
     */
    export var HIGH_INT: number;

    /**
     * @const
     * @type {number}
     */
    export var FRAMEBUFFER: number;

    /**
     * @const
     * @type {number}
     */
    export var RENDERBUFFER: number;

    /**
     * @const
     * @type {number}
     */
    export var RGBA4: number;

    /**
     * @const
     * @type {number}
     */
    export var RGB5_A1: number;

    /**
     * @const
     * @type {number}
     */
    export var RGB565: number;

    /**
     * @const
     * @type {number}
     */
    export var DEPTH_COMPONENT16: number;

    /**
     * @const
     * @type {number}
     */
    export var STENCIL_INDEX: number;

    /**
     * @const
     * @type {number}
     */
    export var STENCIL_INDEX8: number;

    /**
     * @const
     * @type {number}
     */
    export var DEPTH_STENCIL: number;

    /**
     * @const
     * @type {number}
     */
    export var RENDERBUFFER_WIDTH: number;

    /**
     * @const
     * @type {number}
     */
    export var RENDERBUFFER_HEIGHT: number;

    /**
     * @const
     * @type {number}
     */
    export var RENDERBUFFER_INTERNAL_FORMAT: number;

    /**
     * @const
     * @type {number}
     */
    export var RENDERBUFFER_RED_SIZE: number;

    /**
     * @const
     * @type {number}
     */
    export var RENDERBUFFER_GREEN_SIZE: number;

    /**
     * @const
     * @type {number}
     */
    export var RENDERBUFFER_BLUE_SIZE: number;

    /**
     * @const
     * @type {number}
     */
    export var RENDERBUFFER_ALPHA_SIZE: number;

    /**
     * @const
     * @type {number}
     */
    export var RENDERBUFFER_DEPTH_SIZE: number;

    /**
     * @const
     * @type {number}
     */
    export var RENDERBUFFER_STENCIL_SIZE: number;

    /**
     * @const
     * @type {number}
     */
    export var FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: number;

    /**
     * @const
     * @type {number}
     */
    export var FRAMEBUFFER_ATTACHMENT_OBJECT_NAME: number;

    /**
     * @const
     * @type {number}
     */
    export var FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL: number;

    /**
     * @const
     * @type {number}
     */
    export var FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE: number;

    /**
     * @const
     * @type {number}
     */
    export var COLOR_ATTACHMENT0: number;

    /**
     * @const
     * @type {number}
     */
    export var DEPTH_ATTACHMENT: number;

    /**
     * @const
     * @type {number}
     */
    export var STENCIL_ATTACHMENT: number;

    /**
     * @const
     * @type {number}
     */
    export var DEPTH_STENCIL_ATTACHMENT: number;

    /**
     * @const
     * @type {number}
     */
    export var NONE: number;

    /**
     * @const
     * @type {number}
     */
    export var FRAMEBUFFER_COMPLETE: number;

    /**
     * @const
     * @type {number}
     */
    export var FRAMEBUFFER_INCOMPLETE_ATTACHMENT: number;

    /**
     * @const
     * @type {number}
     */
    export var FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT: number;

    /**
     * @const
     * @type {number}
     */
    export var FRAMEBUFFER_INCOMPLETE_DIMENSIONS: number;

    /**
     * @const
     * @type {number}
     */
    export var FRAMEBUFFER_UNSUPPORTED: number;

    /**
     * @const
     * @type {number}
     */
    export var FRAMEBUFFER_BINDING: number;

    /**
     * @const
     * @type {number}
     */
    export var RENDERBUFFER_BINDING: number;

    /**
     * @const
     * @type {number}
     */
    export var MAX_RENDERBUFFER_SIZE: number;

    /**
     * @const
     * @type {number}
     */
    export var INVALID_FRAMEBUFFER_OPERATION: number;

    /**
     * @const
     * @type {number}
     */
    export var UNPACK_FLIP_Y_WEBGL: number;

    /**
     * @const
     * @type {number}
     */
    export var UNPACK_PREMULTIPLY_ALPHA_WEBGL: number;

    /**
     * @const
     * @type {number}
     */
    export var CONTEXT_LOST_WEBGL: number;

    /**
     * @const
     * @type {number}
     */
    export var UNPACK_COLORSPACE_CONVERSION_WEBGL: number;

    /**
     * @const
     * @type {number}
     */
    export var BROWSER_DEFAULT_WEBGL: number;

    /**
     * From the OES_texture_half_float extension.
     * http://www.khronos.org/registry/webgl/extensions/OES_texture_half_float/
     * @const
     * @type {number}
     */
    export var HALF_FLOAT_OES: number;

    /**
     * From the OES_standard_derivatives extension.
     * http://www.khronos.org/registry/webgl/extensions/OES_standard_derivatives/
     * @const
     * @type {number}
     */
    export var FRAGMENT_SHADER_DERIVATIVE_HINT_OES: number;

    /**
     * From the OES_vertex_array_object extension.
     * http://www.khronos.org/registry/webgl/extensions/OES_vertex_array_object/
     * @const
     * @type {number}
     */
    export var VERTEX_ARRAY_BINDING_OES: number;

    /**
     * From the WEBGL_debug_renderer_info extension.
     * http://www.khronos.org/registry/webgl/extensions/WEBGL_debug_renderer_info/
     * @const
     * @type {number}
     */
    export var UNMASKED_VENDOR_WEBGL: number;

    /**
     * From the WEBGL_debug_renderer_info extension.
     * http://www.khronos.org/registry/webgl/extensions/WEBGL_debug_renderer_info/
     * @const
     * @type {number}
     */
    export var UNMASKED_RENDERER_WEBGL: number;

    /**
     * From the WEBGL_compressed_texture_s3tc extension.
     * http://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_s3tc/
     * @const
     * @type {number}
     */
    export var COMPRESSED_RGB_S3TC_DXT1_EXT: number;

    /**
     * From the WEBGL_compressed_texture_s3tc extension.
     * http://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_s3tc/
     * @const
     * @type {number}
     */
    export var COMPRESSED_RGBA_S3TC_DXT1_EXT: number;

    /**
     * From the WEBGL_compressed_texture_s3tc extension.
     * http://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_s3tc/
     * @const
     * @type {number}
     */
    export var COMPRESSED_RGBA_S3TC_DXT3_EXT: number;

    /**
     * From the WEBGL_compressed_texture_s3tc extension.
     * http://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_s3tc/
     * @const
     * @type {number}
     */
    export var COMPRESSED_RGBA_S3TC_DXT5_EXT: number;

    /**
     * From the EXT_texture_filter_anisotropic extension.
     * http://www.khronos.org/registry/webgl/extensions/EXT_texture_filter_anisotropic/
     * @const
     * @type {number}
     */
    export var TEXTURE_MAX_ANISOTROPY_EXT: number;

    /**
     * From the EXT_texture_filter_anisotropic extension.
     * http://www.khronos.org/registry/webgl/extensions/EXT_texture_filter_anisotropic/
     * @const
     * @type {number}
     */
    export var MAX_TEXTURE_MAX_ANISOTROPY_EXT: number;
}
