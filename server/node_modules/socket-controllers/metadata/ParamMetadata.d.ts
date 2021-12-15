import { ActionMetadata } from "./ActionMetadata";
import { ParamMetadataArgs } from "./args/ParamMetadataArgs";
import { ParamTypes } from "./types/ParamTypes";
import { ClassTransformOptions } from "class-transformer";
export declare class ParamMetadata {
    /**
     * Parameter's action.
     */
    actionMetadata: ActionMetadata;
    /**
     * Parameter target.
     */
    target: Function;
    /**
     * Method on which's parameter is attached.
     */
    method: string;
    /**
     * Index (# number) of the parameter in the method signature.
     */
    index: number;
    /**
     * Parameter type.
     */
    type: ParamTypes;
    /**
     * Extra parameter value.
     */
    value: any;
    /**
     * Reflected type of the parameter.
     */
    reflectedType: any;
    /**
     * Transforms the value.
     */
    transform: (value: any, socket: any) => Promise<any> | any;
    /**
     * Class transform options used to perform plainToClass operation.
     */
    classTransformOptions: ClassTransformOptions;
    constructor(actionMetadata: ActionMetadata, args: ParamMetadataArgs);
}
