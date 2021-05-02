const event = require("event");

const myEvent = new event();

myEvent.on("someEvent", () => {
  console.log("hello event");
});

myEvent.emmit("someEvent");
