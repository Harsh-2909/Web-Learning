const http = require("http");

const server = http.createServer((req, res) => {
    console.log("request event");
    res.end(`Hello world`);
})

server.listen(3000, () => {
    console.log("Server listening on port 3000");
});

// Here, the server starts listening on port 3000 asynchronously, offloaded by the event loop
// Once it is successful, the callback function will be executed.
// listen function is asynchronously used because if used synchronously, then it will stop working once the task is done.
// As an async function, server will keep on listening to port 3000