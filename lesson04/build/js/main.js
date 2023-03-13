"use strict";
console.log("sdfasdf");
//Literal types
// keeps the code dry and can be used numbers as well.
let myName;
let userName;
//functions
const add = (a, b) => {
    return a + b;
};
// If the function does not return anything should has void
const logMsg = (message) => {
    console.log(message);
};
logMsg("Hello!");
logMsg(add(2, 3));
let subtract = function (c, d) {
    return c - d;
};
//interface mathFunction {
//  (a: number, b: number): number;
// }
let multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(2, 2));
//optional paramaters
const addAll = (a, b, c) => {
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
};
//default param value
const sumAll = (a = 10, b, c = 2) => {
    return a + b + c;
};
logMsg(addAll(2, 3, 2));
logMsg(addAll(2, 3));
logMsg(sumAll(undefined, 3));
//Rest Parameters
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
console.log(total(10, 2, 3));
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
//custom type guard
const isNumber = (value) => {
    return typeof value === "number" ? true : false;
};
//use of never type
const numberOrString = (value) => {
    if (isNumber(value))
        return "string";
    if (isNumber(value))
        return "number";
    return createError("This should never happen!");
};
