import React from "react";
import { io } from "socket.io-client";

const socket = io("ws://localhost:8000");

// send a message to the server
socket.emit("hello from client");

// receive a message from the server
socket.on("hello from server", () => {
  console.log("Received Server response");
});

export const socketContext = {
  socket: socket,
};

export const SocketContext = React.createContext(socketContext);