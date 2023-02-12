// NodeJS uses CommonJS library under the hood, so every file is a mnodule by default
// Modules -- Encapsulated Code, only share minimum

const sayHi = (name) => {
    console.log(`Hello ${name}`);
}

module.exports = {
    hello: sayHi
}