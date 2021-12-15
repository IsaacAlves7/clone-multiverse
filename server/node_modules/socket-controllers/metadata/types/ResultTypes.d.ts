/**
 * Action result handler type.
 */
export declare type ResultType = "emit-on-success" | "emit-on-fail" | "skip-emit-on-empty-result";
/**
 * Static access to result handler types.
 */
export declare class ResultTypes {
    static EMIT_ON_SUCCESS: ResultType;
    static EMIT_ON_FAIL: ResultType;
    static SKIP_EMIT_ON_EMPTY_RESULT: ResultType;
}
