import { Server } from "socket.io";

const PORT_NUMBER = 8000

const io = new Server(PORT_NUMBER, {
  cors: {
    origin: "http://localhost:3000"
  }
});

console.log("Started");
console.log(`Listening on ${PORT_NUMBER}`);

io.on("connection", (socket) => {
  // send a message to the client
  socket.emit("hello from server");

  socket.on("test_button_pressed", () => {
    console.log("User pressed button!");
  })

  // receive a message from the client
  socket.on("hello from client", () => {
    console.log("Client connected");
  });
});