import { Server, Socket } from "socket.io";
import { DefaultEventsMap } from "socket.io/dist/typed-events";

const PORT_NUMBER = 8000

const io = new Server(PORT_NUMBER, {
  cors: {
    origin: "http://localhost:3000"
  }
});

console.log("Starting...");
console.log('\x1b[36m', `---> Listening on ${PORT_NUMBER}` ,'\x1b[0m');


function socketSetup(socket: Socket<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>) {
  // send a message to the client
  socket.emit("hello_from_server");

  socket.on("test_button_pressed", () => {
    console.log("User pressed button!");
  })

  socket.on("set_name", ({name}) => {
    console.log(name);
  })

  // receive a message from the client
  socket.on("hello_from_client", () => {
    console.log("Client connected");
  });
}



io.on("connection", socketSetup);