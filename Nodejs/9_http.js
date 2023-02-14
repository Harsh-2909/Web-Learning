const http = require("http");

const server = http.createServer((req, res) => {
    console.log(req.url);
    if (req.url === "/") {
        res.end("Home Page");
    } else if (req.url === "/about") {
        res.end("About Page");
    }
    res.end(`${req.url} is not available`);
})

server.listen(3000);