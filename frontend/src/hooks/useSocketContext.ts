import { useContext } from "react";
import { SocketContext } from "../shared/SocketContext";

export default function useSocketContext() {
    const socketContext = useContext(SocketContext);
    return socketContext.socket;
}