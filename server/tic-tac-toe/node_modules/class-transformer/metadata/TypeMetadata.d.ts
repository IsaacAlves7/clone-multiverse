import { TypeOptions } from "./ExposeExcludeOptions";
export declare class TypeMetadata {
    target: Function;
    propertyName: string;
    reflectedType: any;
    typeFunction: (options?: TypeOptions) => Function;
    constructor(target: Function, propertyName: string, reflectedType: any, typeFunction: (options?: TypeOptions) => Function);
}
