import { MetadataArgsStorage } from "./metadata-builder/MetadataArgsStorage";
import { SocketControllersOptions } from "./SocketControllersOptions";
/**
 * Registers all loaded actions in your express application.
 */
export declare function useSocketServer<T>(io: T, options?: SocketControllersOptions): T;
/**
 * Registers all loaded actions in your express application.
 */
export declare function createSocketServer(port: number, options?: SocketControllersOptions): any;
/**
 * Gets the metadata arguments storage.
 */
export declare function defaultMetadataArgsStorage(): MetadataArgsStorage;
export * from "./container";
export * from "./decorators";
export * from "./SocketControllersOptions";
export * from "./MiddlewareInterface";
