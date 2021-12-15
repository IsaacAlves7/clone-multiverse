import { SocketControllerMetadataArgs } from "../metadata/args/SocketControllerMetadataArgs";
import { ActionMetadataArgs } from "../metadata/args/ActionMetadataArgs";
import { ParamMetadataArgs } from "../metadata/args/ParamMetadataArgs";
import { MiddlewareMetadataArgs } from "../metadata/args/MiddlewareMetadataArgs";
import { ResultMetadataArgs } from "../metadata/args/ResultMetadataArgs";
/**
 * Storage all metadatas read from decorators.
 */
export declare class MetadataArgsStorage {
    controllers: SocketControllerMetadataArgs[];
    middlewares: MiddlewareMetadataArgs[];
    actions: ActionMetadataArgs[];
    results: ResultMetadataArgs[];
    params: ParamMetadataArgs[];
    findControllerMetadatasForClasses(classes: Function[]): SocketControllerMetadataArgs[];
    findMiddlewareMetadatasForClasses(classes: Function[]): MiddlewareMetadataArgs[];
    findActionsWithTarget(target: Function): ActionMetadataArgs[];
    findResutlsWithTargetAndMethod(target: Function, methodName: string): ResultMetadataArgs[];
    findParamsWithTargetAndMethod(target: Function, methodName: string): ParamMetadataArgs[];
    /**
     * Removes all saved metadata.
     */
    reset(): void;
}
