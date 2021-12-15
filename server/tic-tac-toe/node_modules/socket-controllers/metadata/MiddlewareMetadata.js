"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var container_1 = require("../container");
var MiddlewareMetadata = /** @class */ (function () {
    // -------------------------------------------------------------------------
    // Constructor
    // -------------------------------------------------------------------------
    function MiddlewareMetadata(args) {
        this.target = args.target;
        this.priority = args.priority;
    }
    Object.defineProperty(MiddlewareMetadata.prototype, "instance", {
        // -------------------------------------------------------------------------
        // Accessors
        // -------------------------------------------------------------------------
        get: function () {
            return container_1.getFromContainer(this.target);
        },
        enumerable: true,
        configurable: true
    });
    return MiddlewareMetadata;
}());
exports.MiddlewareMetadata = MiddlewareMetadata;

//# sourceMappingURL=MiddlewareMetadata.js.map
