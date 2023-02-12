const { readFile, writeFile } = require("fs");

console.log("Starting");
// Callback Hell
readFile("./folder/first.txt", "utf8", (err, result) => {
    if (err) {
        console.log(err);
        return
    }
    // console.log(result);
    const first = result;
    readFile("./folder/second.txt", "utf8", (err, result) => {
        if (err) {
            console.log(err);
            return
        }
        // console.log(result);
        const second = result;
        writeFile("./folder/result-async.txt", `\nHere is the result: ${first}, ${second}`, (err, result) => {
            if (err) {
                console.log(err);
                return
            }
            console.log("Done with the task");
        });
    })
})
console.log("Starting next task");