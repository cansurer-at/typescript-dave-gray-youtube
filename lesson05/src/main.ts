// Type Assertions(asorsin) & Type Casting (same thing has 2 name)

type One = string;
type Two = string | number;
type Three = "hello";

// convert to more or less specific

let a: One = "hello";
let b = a as Two; // less specific
let c = a as Three; // more spe

let d = <One>"word";
let e = <string | number>"word";

const addOrConcat = (
  a: number,
  b: number,
  c: "add" | "concat"
): number | string => {
  if (c === "add") return a + b;
  return "" + a + b;
};

let myVal: string = addOrConcat(2, 2, "concat") as string;

// be careful! TS sees no problem- but string is returned
let nextVal: number = addOrConcat(2, 2, "concat") as number;

// the DOM 
const img = document.getElementById("img") as HTMLImageElement;
const myImg = document.getElementById("#img") as HTMLImageElement;
const nextImg = <HTMLImageElement>document.getElementById("#img");

img.src;
myImg.src;