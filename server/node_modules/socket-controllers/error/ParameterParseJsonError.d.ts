/**
 * Caused when user parameter is given, but is invalid and cannot be parsed.
 */
export declare class ParameterParseJsonError extends Error {
    name: string;
    constructor(value: any);
}
