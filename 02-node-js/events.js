const EventEmitter = require("events");

const event = new EventEmitter();

event.on("connected", (params) => {
  console.log("user connect", params.username);
});

event.emit("connected", {
  username: "Dollong",
});
