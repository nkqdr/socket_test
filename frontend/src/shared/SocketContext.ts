import React from "react";
import { io } from "socket.io-client";

const socket = io("ws://localhost:8000");

// send a message to the server
socket.emit("hello_from_client");

export const socketContext = {
  socket: socket,
  userId: "",
};

// receive a message from the server
socket.on("new-user-id", ({id}) => {
  console.log("Received Server response");
  socketContext.userId = id;
});

export const SocketContext = React.createContext(socketContext);