function carsColorSwapObj(obj) {
    let array = Object.values(obj)
    let temp;
    array.map((ele, idx) => {
        if (idx % 2 === 0 && array[idx + 1]) {
            temp = ele.color;
            ele.color = array[idx + 1].color
            array[idx + 1].color = temp
        }
    });
    return array
}
let carsObj = {
    0: { "name": "Toyota", "color": "red" },
    1: { "name": "B", "color": "blue" },
    2: { "name": "G", "color": "green" },
    3: { "name": "Y", "color": "Yellow" },
    4: { "name": "W", "color": "white" }
};
// console.log(`The array before: [${arr}]`);
console.log(carsObj);

console.log(carsColorSwapObj(carsObj));

function carsColorSwap(array) {
    let temp;
    array.map((ele, idx) => {
        if (idx % 2 === 0 && array[idx + 1]) {
            temp = ele.color;
            ele.color = array[idx + 1].color
            array[idx + 1].color = temp
        }
    });
    return array
}

let carsArray = [
    { "name": "Toyota", "color": "red" },
    { "name": "H", "color": "blue" },
    { "name": "I", "color": "green" },
    { "name": "G", "color": "Yellow" },
    { "name": "M", "color": "white" }
];
console.log(carsArray);

console.log(carsColorSwap(carsArray));

