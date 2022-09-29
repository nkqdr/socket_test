import { Server, Socket } from "socket.io";
import { DefaultEventsMap } from "socket.io/dist/typed-events";

const PORT_NUMBER = 8000

const io = new Server(PORT_NUMBER, {
  cors: {
    origin: "http://localhost:3000"
  }
});

console.log("Starting...");
console.log('\x1b[36m');
console.log(`---> Listening on ${PORT_NUMBER}` ,'\x1b[0m');

var allClients: Socket<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>[] = [];

function socketSetup(socket: Socket<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>) {
  allClients.push(socket);
  socket.emit("new-user-id", {id: socket.id});
  io.emit("user-join", {name: socket.id});

  socket.on("test_button_pressed", () => {
    console.log("User pressed button!");
  });

  socket.on("set_name", ({name}) => {
    console.log(name);
  });

  socket.on("new-message", ({message}) => {
    console.log("Received: ", message);
    io.emit("new-message", {message, sender: socket.id});
  });

  // receive a message from the client
  socket.on("hello_from_client", () => {
    console.log("Client connected");
  });

  socket.on("disconnect", () => {
    var i = allClients.indexOf(socket);
    var oldSocket = allClients.splice(i, 1)[0];
    io.emit("user-leave", {name: oldSocket.id});
  });
}



io.on("connection", socketSetup);