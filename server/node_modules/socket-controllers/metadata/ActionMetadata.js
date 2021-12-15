"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ResultTypes_1 = require("./types/ResultTypes");
var ActionMetadata = /** @class */ (function () {
    // -------------------------------------------------------------------------
    // Public Methods
    // -------------------------------------------------------------------------
    function ActionMetadata(controllerMetadata, args) {
        this.controllerMetadata = controllerMetadata;
        this.name = args.name;
        this.target = args.target;
        this.method = args.method;
        this.type = args.type;
    }
    // -------------------------------------------------------------------------
    // Public Methods
    // -------------------------------------------------------------------------
    ActionMetadata.prototype.executeAction = function (params) {
        return this.controllerMetadata.instance[this.method].apply(this.controllerMetadata.instance, params);
    };
    Object.defineProperty(ActionMetadata.prototype, "emitOnSuccess", {
        // -------------------------------------------------------------------------
        // Accessors
        // -------------------------------------------------------------------------
        get: function () {
            return this.results.find(function (resultHandler) { return resultHandler.type === ResultTypes_1.ResultTypes.EMIT_ON_SUCCESS; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActionMetadata.prototype, "emitOnFail", {
        get: function () {
            return this.results.find(function (resultHandler) { return resultHandler.type === ResultTypes_1.ResultTypes.EMIT_ON_FAIL; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActionMetadata.prototype, "skipEmitOnEmptyResult", {
        get: function () {
            return this.results.find(function (resultHandler) { return resultHandler.type === ResultTypes_1.ResultTypes.SKIP_EMIT_ON_EMPTY_RESULT; });
        },
        enumerable: true,
        configurable: true
    });
    return ActionMetadata;
}());
exports.ActionMetadata = ActionMetadata;

//# sourceMappingURL=ActionMetadata.js.map
