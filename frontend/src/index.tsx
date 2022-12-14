import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { socketContext, SocketContext } from "./shared/SocketContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <SocketContext.Provider value={socketContext}>
      <App />
    </SocketContext.Provider>
  </React.StrictMode>
);
