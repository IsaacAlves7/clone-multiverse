/**
 * Controller action's parameter type.
 */
export declare type ParamType = "custom" | "connected-socket" | "socket-body" | "socket-query-param" | "socket-io" | "socket-id" | "socket-request" | "socket-rooms" | "namespace-params" | "namespace-param";
/**
 * Controller action's parameter type.
 */
export declare class ParamTypes {
    static CUSTOM: ParamType;
    static CONNECTED_SOCKET: ParamType;
    static SOCKET_BODY: ParamType;
    static SOCKET_QUERY_PARAM: ParamType;
    static SOCKET_IO: ParamType;
    static SOCKET_ID: ParamType;
    static SOCKET_REQUEST: ParamType;
    static SOCKET_ROOMS: ParamType;
    static NAMESPACE_PARAMS: ParamType;
    static NAMESPACE_PARAM: ParamType;
}
