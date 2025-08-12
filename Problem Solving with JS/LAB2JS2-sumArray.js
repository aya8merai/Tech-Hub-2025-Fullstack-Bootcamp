// // Q2// Write a function called sumArray that accepts an array of numbers and returns the sum of its elements
// // Sol without using .reduce()
// function sumArray(array) {
//     let sumAll = 0;
//     for (let i = 0; i < array.length; i++) {
//         sumAll += array[i];
//     }
//     return sumAll;
// }

//  Sol using .reduce()
const sumArray = array => array.reduce((sum, ele) => sum + ele, 0)

console.log(sumArray([1, 2, 3, 4, 5])); // 15