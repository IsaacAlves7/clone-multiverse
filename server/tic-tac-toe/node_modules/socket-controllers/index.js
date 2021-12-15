"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var MetadataArgsStorage_1 = require("./metadata-builder/MetadataArgsStorage");
var DirectoryExportedClassesLoader_1 = require("./util/DirectoryExportedClassesLoader");
var SocketControllerExecutor_1 = require("./SocketControllerExecutor");
// -------------------------------------------------------------------------
// Main Functions
// -------------------------------------------------------------------------
/**
 * Registers all loaded actions in your express application.
 */
function useSocketServer(io, options) {
    createExecutor(io, options || {});
    return io;
}
exports.useSocketServer = useSocketServer;
/**
 * Registers all loaded actions in your express application.
 */
function createSocketServer(port, options) {
    var io = require("socket.io")(port);
    createExecutor(io, options || {});
    return io;
}
exports.createSocketServer = createSocketServer;
/**
 * Registers all loaded actions in your express application.
 */
function createExecutor(io, options) {
    var executor = new SocketControllerExecutor_1.SocketControllerExecutor(io);
    // second import all controllers and middlewares and error handlers
    var controllerClasses;
    if (options && options.controllers && options.controllers.length)
        controllerClasses = options.controllers.filter(function (controller) { return controller instanceof Function; });
    var controllerDirs = options.controllers.filter(function (controller) { return typeof controller === "string"; });
    controllerClasses.push.apply(controllerClasses, DirectoryExportedClassesLoader_1.importClassesFromDirectories(controllerDirs));
    var middlewareClasses;
    if (options && options.middlewares && options.middlewares.length) {
        middlewareClasses = options.middlewares.filter(function (controller) { return controller instanceof Function; });
        var middlewareDirs = options.middlewares.filter(function (controller) { return typeof controller === "string"; });
        middlewareClasses.push.apply(middlewareClasses, DirectoryExportedClassesLoader_1.importClassesFromDirectories(middlewareDirs));
    }
    if (options.useClassTransformer !== undefined) {
        executor.useClassTransformer = options.useClassTransformer;
    }
    else {
        executor.useClassTransformer = true;
    }
    executor.classToPlainTransformOptions = options.classToPlainTransformOptions;
    executor.plainToClassTransformOptions = options.plainToClassTransformOptions;
    // run socket controller register and other operations
    executor.execute(controllerClasses, middlewareClasses);
}
// -------------------------------------------------------------------------
// Global Metadata Storage
// -------------------------------------------------------------------------
/**
 * Gets the metadata arguments storage.
 */
function defaultMetadataArgsStorage() {
    if (!global.socketControllersMetadataArgsStorage)
        global.socketControllersMetadataArgsStorage = new MetadataArgsStorage_1.MetadataArgsStorage();
    return global.socketControllersMetadataArgsStorage;
}
exports.defaultMetadataArgsStorage = defaultMetadataArgsStorage;
// -------------------------------------------------------------------------
// Commonly Used exports
// -------------------------------------------------------------------------
__export(require("./container"));
__export(require("./decorators"));

//# sourceMappingURL=index.js.map
