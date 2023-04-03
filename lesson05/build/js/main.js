"use strict";
// Type Assertions(asorsin) & Type Casting (same thing has 2 name)
// convert to more or less specific
let a = "hello";
let b = a; // less specific
let c = a; // more spe
let d = "word";
let e = "word";
const addOrConcat = (a, b, c) => {
    if (c === "add")
        return a + b;
    return "" + a + b;
};
let myVal = addOrConcat(2, 2, "concat");
// be careful! TS sees no problem- but string is returned
let nextVal = addOrConcat(2, 2, "concat");
// the DOM 
const img = document.getElementById("img");
const myImg = document.getElementById("#img");
const nextImg = document.getElementById("#img");
img.src;
myImg.src;
