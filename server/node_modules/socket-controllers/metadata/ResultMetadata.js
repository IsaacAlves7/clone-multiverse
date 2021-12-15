"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ResultMetadata = /** @class */ (function () {
    // -------------------------------------------------------------------------
    // Public Methods
    // -------------------------------------------------------------------------
    function ResultMetadata(action, args) {
        this.actionMetadata = action;
        this.target = args.target;
        this.method = args.method;
        this.type = args.type;
        this.value = args.value;
        this.classTransformOptions = args.classTransformOptions;
    }
    return ResultMetadata;
}());
exports.ResultMetadata = ResultMetadata;

//# sourceMappingURL=ResultMetadata.js.map
