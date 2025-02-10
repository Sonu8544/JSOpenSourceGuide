// Primitive Data Types
let str = "JavaScript";   // String
let num = 42;             // Number
let bigInt = 9007199254740991n; // BigInt
let bool = true;          // Boolean
let notDefined;           // Undefined
let emptyValue = null;    // Null
let uniqueId = Symbol("id"); // Symbol

// Non-Primitive Data Types
let obj = { name: "John", age: 30 }; // Object
let arr = [1, 2, 3, "JS"];          // Array
let greet = function () { return "Hello!"; }; // Function

console.log(typeof "JavaScript");  // "string"
console.log(typeof 42);            // "number"
console.log(typeof true);          // "boolean"
console.log(typeof undefined);     // "undefined"
console.log(typeof null);          // "object"  // (Special case in JavaScript)
console.log(typeof Symbol("id"));  // "symbol"
console.log(typeof { name: "John" }); // "object"
console.log(typeof [1, 2, 3]);      // "object" (Arrays are objects)
console.log(typeof function () { });  // "function"
