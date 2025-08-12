// Reverse Array without built in functions
// Best Sol
function reverseArray(array) {
    let idx = 0;
    // let temp;
    for (let idxLast = array.length - 1; idxLast >= array.length / 2; idxLast--) {

        console.log(idxLast)
        let temp = array[idx];
        array[idx] = array[idxLast]
        array[idxLast] = temp;
        idx++
    }
    return array
}
arr = [1, 2, 3, 'hi'];
console.log(arr);
console.log(reverseArray(arr));

// function reverseArray(array) {
//     let reversedArray = new Array();
//     let idx = 0;
//     for (let i = array.length - 1; i >= 0; i--) {
//         reversedArray[idx] = array[i];
//         idx++
//     }
//     return reversedArray
// }
// arr = [1, 2, 3, 'hi'];
// console.log(arr);
// console.log(reverseArray(arr));

