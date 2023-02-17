const { readFile, writeFile } = require("fs").promises;
const util = require("util");

// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

const start = async () => {
    try {
        const first = await readFile("./folder/first.txt", "utf-8");
        const second = await readFile("./folder/second.txt", "utf-8");
        await writeFile("./folder/writeFilePromise.txt", 
        `This is the power of async await:\n${first}\n${second}`,
        {flag: "a"});
        console.log(first, second);
    } catch (error) {
        console.log(error);
    }
}
start()