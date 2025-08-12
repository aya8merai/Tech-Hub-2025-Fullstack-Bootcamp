// Write a function to delete all array's elements using the function filter()
function arrayDeleteAll(array) {
    return array.filter((ele) => !ele)
}

arr = [1, 2, 3, 'hi'];
console.log(`The array before delete: [${arr}]`);
console.log(arrayDeleteAll(arr));