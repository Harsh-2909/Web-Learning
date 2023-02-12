const { readFileSync, writeFileSync } = require("fs");

console.log("start");
const first = readFileSync('./folder/first.txt', "utf-8"); 
const second = readFileSync('./folder/second.txt', "utf-8"); 

// console.log(first);
// console.log(second);

writeFileSync(
    "./folder/written-file.txt",
    `\nHere is the result: ${first}, ${second}`,
    { flag: 'a' }
);
console.log("Done with the task");
console.log("Starting with the next one");
