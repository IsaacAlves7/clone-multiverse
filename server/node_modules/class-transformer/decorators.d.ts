import { ExposeOptions, ExcludeOptions, TypeOptions, TransformOptions } from "./metadata/ExposeExcludeOptions";
import { ClassTransformOptions } from "./ClassTransformOptions";
import { TransformationType } from "./TransformOperationExecutor";
/**
 * Defines a custom logic for value transformation.
 */
export declare function Transform(transformFn: (value: any, obj: any, transformationType: TransformationType) => any, options?: TransformOptions): (target: any, key: string) => void;
/**
 * Specifies a type of the property.
 */
export declare function Type(typeFunction?: (type?: TypeOptions) => Function): (target: any, key: string) => void;
/**
 * Marks property as included in the process of transformation. By default it includes the property for both
 * constructorToPlain and plainToConstructor transformations, however you can specify on which of transformation types
 * you want to skip this property.
 */
export declare function Expose(options?: ExposeOptions): (object: Object | Function, propertyName?: string) => void;
/**
 * Marks property as excluded from the process of transformation. By default it excludes the property for both
 * constructorToPlain and plainToConstructor transformations, however you can specify on which of transformation types
 * you want to skip this property.
 */
export declare function Exclude(options?: ExcludeOptions): (object: Object | Function, propertyName?: string) => void;
/**
 * Transform the object from class to plain object and return only with the exposed properties.
 */
export declare function TransformClassToPlain(params?: ClassTransformOptions): Function;
/**
 * Return the class instance only with the exposed properties.
 */
export declare function TransformClassToClass(params?: ClassTransformOptions): Function;
