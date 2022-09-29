import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";

import "./ChatWindow.css";
import useSocketContext from "../../hooks/useSocketContext";
import MessageRow from "../MessageRow/MessageRow";
import { Message } from "../../shared/types";

export default function ChatWindow() {
  const [messages, setMessages] = useState<Message[]>([
    { content: "Chat initialized!", type: "admin" },
  ]);
  const { socket } = useSocketContext();

  socket.on("new-message", ({ message, sender }) => {
    setMessages([
      ...messages,
      { content: message, type: "message", senderId: sender },
    ]);
  });

  socket.on("user-join", ({ name }) => {
    setMessages([
      ...messages,
      { content: `${name} joined the room!`, type: "join" },
    ]);
  });

  socket.on("user-leave", ({ name }) => {
    setMessages([
      ...messages,
      { content: `${name} left the room!`, type: "leave" },
    ]);
  });

  return (
    <Paper>
      <Stack direction="column" alignItems="center" padding={2}>
        {messages.map((v, i) => {
          return <MessageRow key={`message-${i}`} message={v} />;
        })}
      </Stack>
    </Paper>
  );
}
