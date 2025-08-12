function arrayReduceSumAll(array) {
    return array.reduce((sumAll, ele) => sumAll + ele, 0)
}

arr = [1, 2, 3, 'hi'];
console.log(`The array before: [${arr}]`);
console.log(arrayReduceSumAll(arr));