"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var container_1 = require("../container");
var ControllerMetadata = /** @class */ (function () {
    // -------------------------------------------------------------------------
    // Constructor
    // -------------------------------------------------------------------------
    function ControllerMetadata(args) {
        this.target = args.target;
        this.namespace = args.namespace;
    }
    Object.defineProperty(ControllerMetadata.prototype, "instance", {
        // -------------------------------------------------------------------------
        // Accessors
        // -------------------------------------------------------------------------
        get: function () {
            return container_1.getFromContainer(this.target);
        },
        enumerable: true,
        configurable: true
    });
    return ControllerMetadata;
}());
exports.ControllerMetadata = ControllerMetadata;

//# sourceMappingURL=ControllerMetadata.js.map
