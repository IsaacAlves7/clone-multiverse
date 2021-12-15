import { 
    ConnectedSocket, 
    OnConnect, 
    SocketController, 
    SocketIO 
} from "socket-controllers";
import { Socket, Server } from "socket.io";

@SocketController()
class MainController {
    @OnConnect()
    public onConnection(
        @ConnectedSocket() socket: Socket, 
        @SocketIO() io: Server
    ) {
      console.log("New Socket connected: ", socket.id);
    }
}