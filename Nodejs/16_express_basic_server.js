const express = require('express');
const PORT = 3000;
const app = express();

const logData = (req, res, next) => {
    const method = req.method;
    const url = req.url.split('?')[0];

    console.log(`\n${method} ${url}`);
    next();
};

app.use(logData);

app.get('/', (req, res) => {
    res.send('Home Page');
});

app.get('/about', (req, res) => {
    res.send('About Page');
});

app.all('*', (req, res) => {
    res.status(404).send("404 Not Found");
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
