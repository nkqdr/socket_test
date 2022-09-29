import { Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import React from "react";
import useSocketContext from "../../hooks/useSocketContext";
import { Message } from "../ChatWindow/ChatWindow";

import "./MessageRow.css";

interface MessageRowProps {
  key: string;
  message: Message;
}

export default function MessageRow(props: MessageRowProps) {
  const { socket, userId } = useSocketContext();

  const getMessagePosition = () => {
    switch (props.message.type) {
      case "message":
        if (props.message.senderId == userId) {
          return "flex-end";
        }
        return "flex-start";
      default:
        return "center";
    }
  };

  const getColor = () => {
    switch (props.message.type) {
      case "message":
        return undefined;
      default:
        return "gray";
    }
  };

  return (
    <Stack className="message-row-wrapper">
      <Stack direction="column" alignItems={getMessagePosition()}>
        <Typography variant="caption" className="secondary-message">
          {props.message.senderId}
        </Typography>
        <Typography color={getColor()}>{props.message.content}</Typography>
      </Stack>
    </Stack>
  );
}
