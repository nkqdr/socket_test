import { useContext } from "react";
import { SocketContext } from "../shared/SocketContext";

export default function useSocketContext() {
    const socketContext = useContext(SocketContext);
    return {socket: socketContext.socket, userId: socketContext.userId };
}