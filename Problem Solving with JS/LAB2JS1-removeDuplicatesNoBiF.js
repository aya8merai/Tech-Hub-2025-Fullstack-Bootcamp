//  Sol without Split or any built in function
function removeDuplicates(array) {
    let newArray = new Array();
    let j = 0;
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] === array[j]) {
                array[j] = null;
            }
        }
        if (array[i] !== null) {
            newArray[j] = array[i];
            j++;
        }
    }
    return newArray;
}

const fruits = ['apple', 'apple', 'banana', 'orange', 'apple', 'mango', 'banana'];
console.log(removeDuplicates(fruits));
