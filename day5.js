// WPU Coding Challenge 2024
// Will you make it?
// 5/336
// https://www.codewars.com/kata/5861d28f124b35723e00005e

// code
// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//     return (distanceToPump / mpg <= fuelLeft) ? true : false
// };

// one liner

const zeroFuel = (distanceToPump, mpg, fuelLeft) =>  (distanceToPump / mpg <= fuelLeft) ? true : false


// another case
// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//     return (fuelLeft * mpg >= distanceToPump) ? true : false
// };


console.log(zeroFuel(50,25,2));