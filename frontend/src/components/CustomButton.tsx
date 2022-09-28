import React, { useContext } from "react";
import { SocketContext } from "../shared/SocketContext";

export default function CustomButton() {
  const socketContext = useContext(SocketContext);

  const clickButton = () => {
    console.log("Test");
    socketContext.socket.emit("test_button_pressed");
  };

  return <button onClick={clickButton}>Click me!</button>;
}
