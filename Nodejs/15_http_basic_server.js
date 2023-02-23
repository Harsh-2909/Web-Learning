const http = require("http");
const PORT = 3000;

const server = http.createServer((req, res) => {
    const method = req.method;
    const url = req.url.split("?")[0];

    console.log(`${method} ${url}`);
    // console.log(`Headers: ${JSON.stringify(req.headers)}`);

    if (url === "/") {
        res.writeHead(200, { "content-type": "text/html" });
        res.write("<h1>Home Page</h1>");
    }
    else if (url === "/about") {
        res.writeHead(200, { "content-type": "text/html" });
        res.write("<h1>About Page</h1>");
    }
    else {
        res.writeHead(404, { "content-type": "text/html" });
        res.write("<h1>404 Page Not Found</h1>");
    }

    res.end();
})

server.listen(PORT);

server.on('error', (e) => {
    if (e.code === 'EADDRINUSE') {
        console.log('Address already in use, retrying...');
        setTimeout(() => {
            server.close();
            server.listen(PORT);
        }, 1000);
    } else {
        console.error(e);
    }
});