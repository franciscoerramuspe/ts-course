const carMakers = ['toyota', 'chevrolet', 'chevy']; //infering type str

const dates = [new Date(), new Date()]; //infering type Date

const carsByMake = [['corolla'], ['tiguan'], ['passat']]; //infering 2d str array

//inference str
const car = carMakers[0];
const myCar = carMakers.pop();

//prevent incompatible values
carMakers.push(100);

//help with map
carMakers.map((car: string): string => {
  return car.toUpperCase(); //knowing that we receive a str and return a str, ts loads for us the str methods
});

//flexible type
const importantDates: (Date | string)[] = [new Date(), '2030-10-10'];
