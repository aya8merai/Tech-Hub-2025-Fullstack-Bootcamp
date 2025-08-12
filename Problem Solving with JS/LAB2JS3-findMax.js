// Q3// Write a function called findMax that accepts an array of numbers and returns the max from it
const findMax = (array) => {
    let maxNum = array[0];
    for (let i = 1; i < array.length; i++) {
        if (maxNum < array[i]) {
            maxNum = array[i];
        };
    }
    return maxNum;
}
console.log(findMax([1, 3, 9, 2]));
