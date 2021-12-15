import { ParamMetadata } from "./ParamMetadata";
import { ActionMetadataArgs } from "./args/ActionMetadataArgs";
import { ActionType } from "./types/ActionTypes";
import { ControllerMetadata } from "./ControllerMetadata";
import { ResultMetadata } from "./ResultMetadata";
export declare class ActionMetadata {
    /**
     * Action's controller.
     */
    controllerMetadata: ControllerMetadata;
    /**
     * Action's parameters.
     */
    params: ParamMetadata[];
    /**
     * Action's result handlers.
     */
    results: ResultMetadata[];
    /**
     * Message name served by this action.
     */
    name: string;
    /**
     * Class on which's method this action is attached.
     */
    target: Function;
    /**
     * Object's method that will be executed on this action.
     */
    method: string;
    /**
     * Action type represents http method used for the registered route. Can be one of the value defined in ActionTypes
     * class.
     */
    type: ActionType;
    constructor(controllerMetadata: ControllerMetadata, args: ActionMetadataArgs);
    executeAction(params: any[]): any;
    readonly emitOnSuccess: ResultMetadata;
    readonly emitOnFail: ResultMetadata;
    readonly skipEmitOnEmptyResult: ResultMetadata;
}
