import { ControllerMetadata } from "../metadata/ControllerMetadata";
import { MiddlewareMetadata } from "../metadata/MiddlewareMetadata";
/**
 * Builds metadata from the given metadata arguments.
 */
export declare class MetadataBuilder {
    buildControllerMetadata(classes?: Function[]): ControllerMetadata[];
    buildMiddlewareMetadata(classes?: Function[]): MiddlewareMetadata[];
    private createMiddlewares;
    private createControllers;
    private createActions;
    private createParams;
    private createResults;
}
