import { MiddlewareMetadataArgs } from "./args/MiddlewareMetadataArgs";
import { MiddlewareInterface } from "../MiddlewareInterface";
export declare class MiddlewareMetadata {
    target: Function;
    priority: number;
    constructor(args: MiddlewareMetadataArgs);
    readonly instance: MiddlewareInterface;
}
