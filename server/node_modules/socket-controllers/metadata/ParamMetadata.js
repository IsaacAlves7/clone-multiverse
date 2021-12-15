"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ParamMetadata = /** @class */ (function () {
    // -------------------------------------------------------------------------
    // Public Methods
    // -------------------------------------------------------------------------
    function ParamMetadata(actionMetadata, args) {
        this.actionMetadata = actionMetadata;
        this.target = args.target;
        this.method = args.method;
        this.reflectedType = args.reflectedType;
        this.index = args.index;
        this.type = args.type;
        this.transform = args.transform;
        this.classTransformOptions = args.classTransformOptions;
        this.value = args.value;
    }
    return ParamMetadata;
}());
exports.ParamMetadata = ParamMetadata;

//# sourceMappingURL=ParamMetadata.js.map
