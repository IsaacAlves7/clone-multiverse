"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Storage all metadatas read from decorators.
 */
var MetadataArgsStorage = /** @class */ (function () {
    function MetadataArgsStorage() {
        // -------------------------------------------------------------------------
        // Properties
        // -------------------------------------------------------------------------
        this.controllers = [];
        this.middlewares = [];
        this.actions = [];
        this.results = [];
        this.params = [];
    }
    // -------------------------------------------------------------------------
    // Public Methods
    // -------------------------------------------------------------------------
    MetadataArgsStorage.prototype.findControllerMetadatasForClasses = function (classes) {
        return this.controllers.filter(function (ctrl) {
            return classes.filter(function (cls) { return ctrl.target === cls; }).length > 0;
        });
    };
    MetadataArgsStorage.prototype.findMiddlewareMetadatasForClasses = function (classes) {
        return this.middlewares.filter(function (middleware) {
            return classes.filter(function (cls) { return middleware.target === cls; }).length > 0;
        });
    };
    MetadataArgsStorage.prototype.findActionsWithTarget = function (target) {
        return this.actions.filter(function (action) { return action.target === target; });
    };
    MetadataArgsStorage.prototype.findResutlsWithTargetAndMethod = function (target, methodName) {
        return this.results.filter(function (result) {
            return result.target === target && result.method === methodName;
        });
    };
    MetadataArgsStorage.prototype.findParamsWithTargetAndMethod = function (target, methodName) {
        return this.params.filter(function (param) {
            return param.target === target && param.method === methodName;
        });
    };
    /**
     * Removes all saved metadata.
     */
    MetadataArgsStorage.prototype.reset = function () {
        this.controllers = [];
        this.middlewares = [];
        this.actions = [];
        this.params = [];
    };
    return MetadataArgsStorage;
}());
exports.MetadataArgsStorage = MetadataArgsStorage;

//# sourceMappingURL=MetadataArgsStorage.js.map
