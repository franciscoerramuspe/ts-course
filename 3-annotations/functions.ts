// Function that returns a number. If the function does not return anything we would get an error

import { func } from 'prop-types';

// in the argunments we have to specify the type of the arguments and the type of the return value
const add = (a: number, b: number): number => {
  return a + b;
};

// if we want to always return a value from a function, we have to specify the return type and use everything except void
const subtract = (a: number, b: number) => {
  a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}
// annotations on anonymous functions assigned to a variable
const multiply = function (a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);
};

const throwError = (message: string): never => {
  // we never reach the end of the function
  throw new Error(message);
};

const forecast = {
  date: new Date(),
  weather: 'sunny',
};

// destructuring with annotations
const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

logWeather(forecast);
