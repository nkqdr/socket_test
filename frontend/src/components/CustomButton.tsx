import React from "react";
import useSocketContext from "../hooks/useSocketContext";

export default function CustomButton() {
  const socket = useSocketContext();

  const clickButton = () => {
    console.log("Test");
    socket.emit("test_button_pressed");
  };

  return <button onClick={clickButton}>Click me!</button>;
}
