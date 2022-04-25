// console.log(arguments);
// console.log(require("module").wrapper);

// module.exports
// const calc = require("./test-module-1");
// const calc = require("./test-module-1b");
// const calc1 = new calc();
// console.log(calc1.add(2, 5));
// console.log(calc1.multiply(2, 5));
// console.log(calc1.divide(2, 5));
// console.log(calc1.subtract(2, 5));

// exports
// const calc2 = require("./test-module-2");
// console.log(calc2.add(3, 7));
// console.log(calc2.multiply(3, 7));
// console.log(calc2.divide(3, 7));
// console.log(calc2.subtract(3, 7));

// destructuring
// const { add, multiply } = require("./test-module-2");
// console.log(add(3, 7));
// console.log(multiply(3, 7));

// caching
require("./test-module-3")();
require("./test-module-3")();
require("./test-module-3")();
