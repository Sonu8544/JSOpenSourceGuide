console.log("call-apply-bind/script.js");

// const name = {
//     firstName: "Sonu",
//     secondname: "Kumar",
//     printName: function () {
//         console.log(this.firstName + ' ' + this.secondname);
//     }
// }
// console.log(name.printName());

const name = {
    firstName: "Sonu",
    secondname: "Kumar"
}
let printName = function (homeTown="") {
    console.log(this.firstName + ' ' + this.secondname + " " + homeTown);
}

// function borrowing
printName.call(name, "Bihar");
// console.log(name.printName());


const name2 = {
    firstName: "Satyam",
    secondname: "Kumar"
}

// function borrowing
printName.call(name2);





// only one this diffrent call and apply passing argument in apply mathid pass argulemt in array format
printName.apply(name, ["Bihar", "India", "Begeusarai"]);

// bind method is same like call but its bund the function and object and return the function and invoke later it give you copy of function and invoke later 