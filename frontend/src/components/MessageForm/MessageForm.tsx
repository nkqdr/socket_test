import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import { Paper } from "@mui/material";
import useSocketContext from "../../hooks/useSocketContext";

import "./MessageForm.css";

export default function MessageForm() {
  const [message, setMessage] = useState("");
  const { socket } = useSocketContext();

  const handleChangeMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendMessage();
  };

  const sendMessage = () => {
    socket.emit("new-message", { message: message });
    console.log("Message sent!");
    setMessage("");
  };

  const SendButton = () => {
    return (
      <IconButton onClick={sendMessage} role="submit">
        <SendIcon />
      </IconButton>
    );
  };

  return (
    <form onSubmit={submitForm}>
      <Stack
        direction="row"
        justifyContent="center"
        spacing={2}
        className="message-form-stack"
      >
        <Paper className="message-form-wrapper">
          <TextField
            fullWidth
            label="Message"
            value={message}
            onChange={handleChangeMessage}
            InputProps={{ endAdornment: <SendButton /> }}
          ></TextField>
        </Paper>
      </Stack>
    </form>
  );
}
