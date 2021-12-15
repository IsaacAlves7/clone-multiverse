import { ActionMetadata } from "./ActionMetadata";
import { ResultType } from "./types/ResultTypes";
import { ResultMetadataArgs } from "./args/ResultMetadataArgs";
import { ClassTransformOptions } from "class-transformer";
export declare class ResultMetadata {
    /**
     */
    actionMetadata: ActionMetadata;
    /**
     */
    target: Function;
    /**
     */
    method: string;
    /**
     */
    type: ResultType;
    /**
     */
    value: any;
    classTransformOptions: ClassTransformOptions;
    constructor(action: ActionMetadata, args: ResultMetadataArgs);
}
