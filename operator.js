// Definition :- JavaScript operators are special symbols used in scripts to perform operations on operands, such as arithmetic calculations, logical comparisons, or value assignments. It plays a crucial role in controlling the flow and processing of data within the language. 
// Operators are used to perform operations on variables and values. JavaScript supports a wide range of operators, including arithmetic operators, assignment operators, comparison operators, logical operators, bitwise operators, unary operators, and more.

// There are several types of operators in JavaScript:-

// 1. Arithmetic Operators :- Arithmetic operators are used to perform arithmetic calculations on numbers. They include addition (+), subtraction (-), multiplication (*), division (/), and modulus (%).

// Example :-

let numOne = 10;
let numTwo = 5;

let sum = numOne + numTwo ; // Addition (sum = 15)

let difference = numOne - numTwo; // Subtraction (difference = 5)

let product = numOne * numTwo; // Multiplication (product = 50)

let quotient = numOne / numTwo; // Division (quotient = 2)

let remainder = numOne % numTwo; // Modulus (remainder = 0)



// 2. Assignment Operators :- Assignment operators are used to assign values to variables. They include the equal sign (=), as well as compound assignment operators such as +=, -=, *=, /=, and %=.

// Example :-

let valueOne = 10;   // assigns the value 10 to variable valueOne

let valueTwo = 5;

valueTwo += valueOne;  // equivalent to valueTwo = valueTwo + valueOne (valueTwo = 15)

valueTwo -= valueOne;  // equivalent to valueTwo = valueTwo - valueOne (valueTwo = 5)

valueTwo *= valueOne;  // equivalent to valueTwo = valueTwo * valueOne (valueTwo = 50)

valueTwo /= valueOne;  // equivalent to valueTwo = valueTwo / valueOne (valueTwo = 5)

valueTwo %= valueOne;  // equivalent to valueTwo = valueTwo % valueOne (valueTwo = 0)




// 3. Comparison Operators :- Comparison operators are used to compare two values and return a Boolean value (true or false) based on the comparison. They include the equality operator (==), strict equality operator (===), inequality operator (!=), strict inequality operator (!==), greater than operator (>), greater than or equal to operator (>=), less than operator (<), and less than or equal to operator (<=).

// Example :-

let comperasionOne = 10;
let comperasionTwo = 5;

let isEqual = comperasionOne == comperasionTwo; // Equality (isEqual = false)

let isStrictEqual = comperasionOne === comperasionTwo; // Strict Equality (isStrictEqual = false)

let isNotEqual = comperasionOne != comperasionTwo; // Inequality (isNotEqual = true)

let isStrictNotEqual = comperasionOne !== comperasionTwo; // Strict Inequality (isStrictNotEqual = true)

let isGreaterThan = comperasionOne > comperasionTwo; // Greater Than (isGreaterThan = true)

let isGreaterThanOrEqual = comperasionOne >= comperasionTwo; // Greater Than or Equal To (isGreaterThanOrEqual = true)

let isLessThan = comperasionOne < comperasionTwo; // Less Than (isLessThan = false)

let isLessThanOrEqual = comperasionOne <= comperasionTwo; // Less Than or Equal To (isLessThanOrEqual = false)



// 4. Logical Operators :- Logical operators are used to combine multiple conditions and return a single Boolean value. They include the logical AND operator (&&), logical OR operator (||), and logical NOT operator (!).

// Example :-

let boolOne = true;
let boolTwo = false;

let andResult = boolOne && boolTwo; // Logical AND (andResult = false)

let orResult = boolOne || boolTwo; // Logical OR (orResult = true)

let notResult = !boolOne; // Logical NOT (notResult = false)



// 5. Bitwise Operators :- Bitwise operators are used to perform bitwise operations on binary numbers. They include the bitwise AND operator (&), bitwise OR operator (|), bitwise XOR operator (^), bitwise NOT operator (~), left shift operator (<<), sign-propagating right shift operator (>>), and zero-fill right shift operator (>>>).

// Example :-

let firstBitNum = 5; // binary representation: 101

let secondBitNum = 3; // binary representation: 011

let bitwiseAnd = firstBitNum & secondBitNum; // Bitwise AND (bitwiseAnd = 1)

let bitwiseOr = firstBitNum | secondBitNum; // Bitwise OR (bitwiseOr = 7 that is 111)

let bitwiseXor = firstBitNum ^ secondBitNum; // Bitwise XOR (bitwiseXor = 6 that is 110)

let bitwiseNot = ~firstBitNum ; // Bitwise NOT (bitwiseNot = -6)

let leftShift = firstBitNum  << 1; // Left Shift (leftShift = 10 that is 1010)

let rightShift = firstBitNum  >> 1; // Right Shift (rightShift = 2 that is 10)

let zeroFillRightShift = firstBitNum  >>> 1; // Zero-fill Right Shift (zeroFillRightShift = 2 that is 10)



// 6. Unary Operators :- Unary operators are used to perform operations on a single operand. They include the unary plus operator (+), unary minus operator (-), increment operator (++), decrement operator (--), logical NOT operator (!), and bitwise NOT operator (~).

// Example :-

let unaryNum = 5;

let unaryPlus = +unaryNum; // Unary Plus (unaryPlus = 5)

let unaryMinus = -unaryNum; // Unary Minus (unaryMinus = -5)

let increment = ++unaryNum; // Increment (increment = 6)

let decrement = --unaryNum; // Decrement (decrement = 5)

let logicalNot = !unaryNum; // Logical NOT (logicalNot = false)

let bitWiseNot = ~unaryNum; // Bitwise NOT (bitwiseNot = -6)



// 7. Ternary Operator :- The ternary operator is a conditional operator that evaluates a condition and returns one of two values based on whether the condition is true or false. It is written as a question mark (?) followed by two expressions separated by a colon (:).

// Example :-

let tarnaryNum = 10;

let result = tarnaryNum > 5 ? "greater than 5" : "less than or equal to 5"; // Ternary Operator (result = "greater than 5")



// 8. String Operators :- String operators are used to concatenate strings or extract substrings from strings. They include the concatenation operator (+) and the string extraction operator ([]).

// Example :-

let str1 = "Hello";
let str2 = "World";

let concat = str1 + " " + str2; // Concatenation (concat = "Hello World")

let char = str1[0]; // String Extraction (char = "H")



// 9. Type Operators :- Type operators are used to determine the type of a value or variable. They include the typeof operator and the instanceof operator.

// Example :-

let num = 10;
let arr = [1, 2, 3];

let type = typeof num; // typeof Operator (type = "number")
let typeOfArr = typeof arr; // typeof Operator (typeOfArr = object)

let isNumber = num instanceof Number; // instanceof Operator (isNumber = false)
let isArray = arr instanceof Array; // instanceof Operator (isArray = true)



// 10. Comma Operator :- The comma operator is used to evaluate multiple expressions in a single statement. It evaluates each expression from left to right and returns the value of the last expression.

// Example :-

let firstVal = 1, secondVal = 2, thirdVal = 3;

let commaResult = (firstVal += secondVal , firstVal += thirdVal); // Comma Operator (commaResult = 6)



// 11. Grouping Operator :- The grouping operator is used to group expressions and control the order of evaluation. It is represented by parentheses ().

// Example :-

let groupNumOne = 10, groupNumTwo = 5, groupNumThree = 2;

let groupResult = groupNumOne + groupNumTwo * groupNumThree; // Without Grouping (groupResult = 20)

let groupResultWithGrouping = (groupNumOne + groupNumThree) * groupNumThree; // With Grouping (groupResultWithGrouping = 30)



// 12. Spread Operator :- The spread operator is used to expand an iterable object into individual elements. It is represented by three dots (...).

// Example :-

let arr1 = [1, 2, 3];

let arr2 = [...arr1, 4, 5, 6]; // Spread Operator (arr2 = [1, 2, 3, 4, 5, 6])



// 13. Nullish Coalescing Operator :- The nullish coalescing operator is used to provide a default value for a variable if the variable is null or undefined. It is represented by two question marks (??).

// Example :-

let valOne = null;
let valTwo = 5;

let nullishCoalescing = valOne ?? valTwo; // Nullish Coalescing Operator (nullishCoalescing = 5)



// 14. Optional Chaining Operator :- The optional chaining operator is used to access nested properties of an object without causing an error if a property is null or undefined. It is represented by a question mark followed by a period (?.).

// Example :-

let obj = {
  prop1: {
    prop2: {
      prop3: 5
    }
  }
};

let optionalChaining = obj.prop1?.prop2?.prop3; // Optional Chaining Operator (optionalChaining = 5)



// 15. Delete Operator :- The delete operator is used to delete a property from an object. It is represented by the keyword delete followed by the object property.

// Example :-
let person = {
  name: "John",
  age: 30
};

delete person.age; // Delete Operator (person = { name: "John" })



// 16. in Operator :- The in operator is used to check if a property exists in an object. It returns true if the property exists and false if it does not.

// Example :-

let car = {
    make: "Toyota",
    model: "Camry"

};

let hasMake = "make" in car; // in Operator (hasMake = true)

let hasColor = "color" in car; // in Operator (hasColor = false)


