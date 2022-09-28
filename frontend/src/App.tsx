import React, { useContext, useState } from "react";
import CustomButton from "./components/CustomButton";
import { SocketContext } from "./shared/SocketContext";

export default function App() {
  const [show, setShow] = useState(true);
  const socketContext = useContext(SocketContext);
  console.log(socketContext.socket);

  const changeVisibility = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShow(!show);
  };

  return (
    <div className="App">
      <input type="checkbox" onChange={changeVisibility} />
      {show ? <CustomButton /> : <p>No button here</p>}
    </div>
  );
}
