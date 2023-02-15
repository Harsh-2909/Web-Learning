// Example of event loop
// The async operation of the setTimeout() is OFFLOADED by the event loop to the system kernel.
// Once the operation is done, only then we execute the callback function inside the setTimeout()
// Eg: For something like fetch, the offloaded operation would be the API call and
// the callback fn would be the work needed to be done with that data.
// ONLY once we are done with our synchronous code, will the offloaded code will run.

console.log("Started first task");
setTimeout(() => {
    console.log("Started second task");
}, 0);
console.log("Ended first task");