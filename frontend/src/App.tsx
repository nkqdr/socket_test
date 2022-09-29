import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import MessageForm from "./components/MessageForm/MessageForm";
import ChatWindow from "./components/ChatWindow/ChatWindow";

export default function App() {
  return (
    <Stack spacing={2} padding={20}>
      <Typography variant="h2" align="center">
        Socket.IO Chatroom
      </Typography>
      <ChatWindow />
      <MessageForm />
    </Stack>
  );
}
