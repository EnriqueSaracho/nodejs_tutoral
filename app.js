// console.log("Hello World from Node.js")

const tutorial = require("./tutorial");
// console.log(tutorial);

// console.log(sum(1, 1)); the function was imported as "tutorial" instead of sum, so this wouldn't work
// console.log(tutorial(1, 1));

// After multiple module.exports
console.log(tutorial.sum(2, 3));
console.log(tutorial.PI);
console.log(new tutorial.SomeMathObject());
