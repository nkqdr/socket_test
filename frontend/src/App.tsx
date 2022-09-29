import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import useSocketContext from "./hooks/useSocketContext";

export default function App() {
  const [name, setName] = useState("");
  const socket = useSocketContext();

  const submitName = () => {
    socket.emit("set_name", { name: name });
  };

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <div className="App">
      <Stack spacing={2} padding={20}>
        <Typography variant="h2" align="center">
          Socket.IO Test
        </Typography>
        <TextField
          id="outlined-basic"
          value={name}
          onChange={handleChangeName}
          label="Name"
          variant="outlined"
        />
        <Button variant="text" onClick={submitName}>
          Submit
        </Button>
      </Stack>
    </div>
  );
}
