let stringArr = ["one", "hey", "dave"];

let guitars = ["Strat", "Les Paul", 5150];

stringArr[0] = "John";
stringArr.push("hey");

guitars[0] = 1984;
guitars.unshift("Jim");

let test = [];
let bands: string[] = [];
bands.push("Van Halen");

//Tuple

let myTuple: [string, number, boolean] = ["dave", 42, true];

let mixed = ["john", 1, false];

myTuple[1] = 42;

// objects

let myObj: object;
myObj = [];
console.log(typeof myObj);

const exampleObj = {
  prop1: "Dave",
  prop2: true,
};

exampleObj.prop1 = "John";

type Guitarist = {
  name?: string;
  active?: boolean;
  albums: (string | number)[];
};

let evh: Guitarist = {
  name: "Eddie",
  active: true,
  albums: [1948, 5150, "OU812"],
};

let jp: Guitarist = {
  name: "Jimmy",
  albums: ["I", "II", "IV"],
};

const greetGuitarist = (guitarist: Guitarist) => {
  if ( guitarist.name) {
  return `Hello ${guitarist.name.toUpperCase()}!`;
  }
  return "Hello!";
}

console.log(greetGuitarist(jp));

//Enums
// 

enum Grade {
  U = 1,
  D,
  C,
  B,
  A,
}

console.log(Grade.U);