// // .length
const cars = ["Ford", "Honda", "Nissan", "Mazda"];
console.log(cars.length);

// // .concat()
const moreCars = ["Chevrolet", "Tesla", "Subaru", "Honda"];
let totalCars = cars.concat(moreCars);
console.log(totalCars);

// // .indexOf() and .lastIndexOf()
console.log(moreCars.indexOf("Honda"));
console.log(cars.lastIndexOf("Ford"));

// // .join()
const stringOfCars = totalCars.join();
console.log(stringOfCars);

// // .split()
totalCars = stringOfCars.split(",");
console.log(totalCars);

// // .reverse()
const carsInReverse = totalCars.reverse();
console.log(carsInReverse);

// // .sort()
console.log(carsInReverse.sort());
//alert(carsInReverse.indexOf('Chevrolet'));

// // .slice()
const removedCars = carsInReverse.slice(1, 4);
console.log(removedCars);

// // .splice()
const newRemoved = carsInReverse.splice(1, 2, "honda", "ford");
console.log(newRemoved);

// // .push()
carsInReverse.push(newRemoved)
console.log(carsInReverse);

// // .pop()
console.log(carsInReverse.pop());

// // .shift()
console.log(carsInReverse.shift());

// // .unshift()
carsInReverse.unshift("Acura");
console.log(carsInReverse);

// .forEach()
let numbers = [23, 45, 0, 2];
numbers.forEach(number => console.log(number +2));
// const addTwo = (number) => {
//   console.log(number + 2);
// }

// numbers.forEach(addTwo);