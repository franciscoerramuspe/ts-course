// I can reasssign apples to a number, but I can't reassign it to a string
let apples: number = 5;

// ts can also infer the type of a variable
let oranges = 5; // infered as number

let speed: string = 'fast';

let hasName: boolean = true;

let now: Date = new Date();

// arrays
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3, 4, 5];
let truths: boolean[] = [true, false, true];
let mixed: (string | number | boolean)[] = ['hi', 1, true];
let anything: any[] = [1, 'hi', true, {}, [], null, undefined];

// classes
class Car {}
let car: Car = new Car();

// object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// functions
// the annotation is the part after the colon
// evrything before void (including it) is the annotations
// void is the return type
// the part after the equal sign is the implementation (parameters)
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// WHEN TO USE ANNOTATIONS

// 1) Function that returns the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates = JSON.parse(json); // JSON.parse always returns with any type
// if we want to use coordinates.x we have to annotate it
const coordinatesWithAnnotation: { x: number; y: number } = JSON.parse(json);

// 2) When we declare a variable on one line and initialize it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean; // we can also use let foundWord = false;
for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

// 3) When we have a variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false; // we can assign two potential types to the variable
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
