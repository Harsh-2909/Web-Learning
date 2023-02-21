const { createReadStream } = require("fs");

const stream = createReadStream("./folder/bigfile.txt");
// default is 64kb
// highWaterMark - used to change the data chunk size which is 64kb by default
// encoding - to define the encoding
// start, end - for reading a range of bytes, both values are inclusive
// {start:0, end:999, encoding: "utf8", highWaterMark: 90000}

stream.on("data", (data) => {
    console.log(data);
})
stream.on("error", (error) => {
    console.log(error);
})