// // Sol using Map()  => O(n)
// function removeDuplicates(fruits) {
//     let mp = new Map();
//     for (let fruit of fruits) {
//         fruit = fruit.toLowerCase();
//         if (!mp.has(fruit)) {
//             mp.set(fruit, true);
//         }
//     }
//     return mp.keys();
// }
// const fruits = ['apple', 'apple', 'banana', 'orange', 'apple', 'mango', 'banana'];
// console.log(removeDuplicates(fruits));
// // ===================================

// Sol Using 2 for loops  => O(n^2)
function removeDuplicates(array) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] === array[j]) {
                array.splice(j, 1);
            }
        }
    }
    return array;
}

const fruits = ['apple', 'apple', 'banana', 'orange', 'apple', 'mango', 'banana'];
console.log(removeDuplicates(fruits));