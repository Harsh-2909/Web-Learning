const http = require("http");

// Default way
// const server = http.createServer((req, res) => {
//     console.log(req.url);
//     if (req.url === "/") {
//         res.end("Home Page");
//     } else if (req.url === "/about") {
//         res.end("About Page");
//     }
//     res.end(`${req.url} is not available`);
// })

// Using Event Emmiter API
const server = http.createServer();
// server emits the request event when it receives a request
// Here, the server is listening to the request event and doing something from it
server.on("request", (req, res) => {
    res.end("Welcome");
})

server.listen(3000);