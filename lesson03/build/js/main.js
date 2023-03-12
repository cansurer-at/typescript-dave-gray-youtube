"use strict";
let stringArr = ["one", "hey", "dave"];
let guitars = ["Strat", "Les Paul", 5150];
stringArr[0] = "John";
stringArr.push("hey");
guitars[0] = 1984;
guitars.unshift("Jim");
let test = [];
let bands = [];
bands.push("Van Halen");
//Tuple
let myTuple = ["dave", 42, true];
let mixed = ["john", 1, false];
myTuple[1] = 42;
// objects
let myObj;
myObj = [];
console.log(typeof myObj);
const exampleObj = {
    prop1: "Dave",
    prop2: true,
};
exampleObj.prop1 = "John";
let evh = {
    name: "Eddie",
    active: true,
    albums: [1948, 5150, "OU812"],
};
let jp = {
    name: "Jimmy",
    albums: ["I", "II", "IV"],
};
const greetGuitarist = (guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}!`;
    }
    return "Hello!";
};
console.log(greetGuitarist(jp));
//Enums
// 
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
