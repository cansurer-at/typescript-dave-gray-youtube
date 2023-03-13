type stringOrNumber = string | number;
console.log("sdfasdf");

type stringOrNumberArray = (string | number)[];

type Guitarist = {
  name?: string;
  active?: boolean;
  albums: (string | number)[];
};

type userId = stringOrNumber;

//Literal types
// keeps the code dry and can be used numbers as well.
let myName: "Dave";

let userName: "Dave" | "John" | "Amy";

//functions
const add = (a: number, b: number) => {
  return a + b;
};

// If the function does not return anything should has void
const logMsg = (message: any): void => {
  console.log(message);
};

logMsg("Hello!");
logMsg(add(2, 3));

let subtract = function (c: number, d: number): number {
  return c - d;
};

type mathFunction = (a: number, b: number) => number;

//interface mathFunction {
//  (a: number, b: number): number;
// }

let multiply: mathFunction = function (c, d) {
  return c * d;
};

logMsg(multiply(2, 2));

//optional paramaters

const addAll = (a: number, b: number, c?: number): number => {
  if (typeof c !== "undefined") {
    return a + b + c;
  }
  return a + b;
};
//default param value
const sumAll = (a: number = 10, b: number, c: number = 2): number => {
  return a + b + c;
};

logMsg(addAll(2, 3, 2));

logMsg(addAll(2, 3));

logMsg(sumAll(undefined, 3));
