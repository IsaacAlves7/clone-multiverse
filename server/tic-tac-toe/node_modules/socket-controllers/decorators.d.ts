import { ClassTransformOptions } from "class-transformer";
/**
 * Registers a class to be a socket controller that can listen to websocket events and respond to them.
 *
 * @param namespace Namespace in which this controller's events will be registered.
 */
export declare function SocketController(namespace?: string | RegExp): (object: Function) => void;
/**
 * Registers controller's action to be executed when socket receives message with given name.
 */
export declare function OnMessage(name?: string): Function;
/**
 * Registers controller's action to be executed when client connects to the socket.
 */
export declare function OnConnect(): Function;
/**
 * Registers controller's action to be executed when client disconnects from the socket.
 */
export declare function OnDisconnect(): Function;
/**
 * Injects connected client's socket object to the controller action.
 */
export declare function ConnectedSocket(): (object: Object, methodName: string, index: number) => void;
/**
 * Injects socket.io object that initialized a connection.
 */
export declare function SocketIO(): (object: Object, methodName: string, index: number) => void;
/**
 * Injects received message body.
 */
export declare function MessageBody(options?: {
    classTransformOptions?: ClassTransformOptions;
}): (object: Object, methodName: string, index: number) => void;
/**
 * Injects query parameter from the received socket request.
 */
export declare function SocketQueryParam(name?: string): (object: Object, methodName: string, index: number) => void;
/**
 * Injects socket id from the received request.
 */
export declare function SocketId(): (object: Object, methodName: string, index: number) => void;
/**
 * Injects request object received by socket.
 */
export declare function SocketRequest(): (object: Object, methodName: string, index: number) => void;
/**
 * Injects parameters of the connected socket namespace.
 */
export declare function NspParams(): (object: Object, methodName: string, index: number) => void;
/**
 * Injects named param from the connected socket namespace.
 */
export declare function NspParam(name: string): (object: Object, methodName: string, index: number) => void;
/**
 * Injects rooms of the connected socket client.
 */
export declare function SocketRooms(): (object: Object, methodName: string, index: number) => void;
/**
 * Registers a new middleware to be registered in the socket.io.
 */
export declare function Middleware(options?: {
    priority?: number;
}): Function;
/**
 * If this decorator is set then after controller action will emit message with the given name after action execution.
 * It will emit message only if controller succeed without errors.
 * If result is a Promise then it will wait until promise is resolved and emit a message.
 */
export declare function EmitOnSuccess(messageName: string, options?: {
    classTransformOptions?: ClassTransformOptions;
}): Function;
/**
 * If this decorator is set then after controller action will emit message with the given name after action execution.
 * It will emit message only if controller throw an exception.
 * If result is a Promise then it will wait until promise throw an error and emit a message.
 */
export declare function EmitOnFail(messageName: string, options?: {
    classTransformOptions?: ClassTransformOptions;
}): Function;
/**
 * Used in conjunction with @EmitOnSuccess and @EmitOnFail decorators.
 * If result returned by controller action is null or undefined then messages will not be emitted by @EmitOnSuccess
 * or @EmitOnFail decorators.
 */
export declare function SkipEmitOnEmptyResult(): Function;
