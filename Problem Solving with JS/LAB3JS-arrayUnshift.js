// A function for Adding an element in the head of the Array
function arrayUnshift(array, elemet) {
    return [elemet, ...array]
}
arr = [1, 2, 3, 'hi'];
console.log(arr);
console.log(arrayUnshift(arr, [0, '1']));