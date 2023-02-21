const EventEmmiter = require("events");

const customEmmiter = new EventEmmiter();

// the events will be listened and executed in order
customEmmiter.on("receive", (name, age) => {
    console.log("Event received");
    console.log(`This event was sent by ${name} ${age} years ago`);

});
customEmmiter.on("receive", () => {
    console.log("Step 2: Do something");
});

customEmmiter.emit("receive", "Harsh", "22");
// we need to listen for the event first before emitting them. Keep .emit() at the end after .on()
