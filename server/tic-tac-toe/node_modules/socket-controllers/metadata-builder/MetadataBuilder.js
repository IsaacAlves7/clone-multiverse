"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../index");
var ControllerMetadata_1 = require("../metadata/ControllerMetadata");
var ActionMetadata_1 = require("../metadata/ActionMetadata");
var ParamMetadata_1 = require("../metadata/ParamMetadata");
var MiddlewareMetadata_1 = require("../metadata/MiddlewareMetadata");
var ResultMetadata_1 = require("../metadata/ResultMetadata");
/**
 * Builds metadata from the given metadata arguments.
 */
var MetadataBuilder = /** @class */ (function () {
    function MetadataBuilder() {
    }
    // -------------------------------------------------------------------------
    // Public Methods
    // -------------------------------------------------------------------------
    MetadataBuilder.prototype.buildControllerMetadata = function (classes) {
        return this.createControllers(classes);
    };
    MetadataBuilder.prototype.buildMiddlewareMetadata = function (classes) {
        return this.createMiddlewares(classes);
    };
    // -------------------------------------------------------------------------
    // Public Methods
    // -------------------------------------------------------------------------
    MetadataBuilder.prototype.createMiddlewares = function (classes) {
        var storage = index_1.defaultMetadataArgsStorage();
        var middlewares = !classes ? storage.middlewares : storage.findMiddlewareMetadatasForClasses(classes);
        return middlewares.map(function (middlewareArgs) {
            return new MiddlewareMetadata_1.MiddlewareMetadata(middlewareArgs);
        });
    };
    MetadataBuilder.prototype.createControllers = function (classes) {
        var _this = this;
        var storage = index_1.defaultMetadataArgsStorage();
        var controllers = !classes ? storage.controllers : storage.findControllerMetadatasForClasses(classes);
        return controllers.map(function (controllerArgs) {
            var controller = new ControllerMetadata_1.ControllerMetadata(controllerArgs);
            controller.actions = _this.createActions(controller);
            return controller;
        });
    };
    MetadataBuilder.prototype.createActions = function (controller) {
        var _this = this;
        return index_1.defaultMetadataArgsStorage()
            .findActionsWithTarget(controller.target)
            .map(function (actionArgs) {
            var action = new ActionMetadata_1.ActionMetadata(controller, actionArgs);
            action.params = _this.createParams(action);
            action.results = _this.createResults(action);
            return action;
        });
    };
    MetadataBuilder.prototype.createParams = function (action) {
        return index_1.defaultMetadataArgsStorage()
            .findParamsWithTargetAndMethod(action.target, action.method)
            .map(function (paramArgs) { return new ParamMetadata_1.ParamMetadata(action, paramArgs); });
    };
    MetadataBuilder.prototype.createResults = function (action) {
        return index_1.defaultMetadataArgsStorage()
            .findResutlsWithTargetAndMethod(action.target, action.method)
            .map(function (resultArgs) { return new ResultMetadata_1.ResultMetadata(action, resultArgs); });
    };
    return MetadataBuilder;
}());
exports.MetadataBuilder = MetadataBuilder;

//# sourceMappingURL=MetadataBuilder.js.map
