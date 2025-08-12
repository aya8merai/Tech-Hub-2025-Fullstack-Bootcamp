// // Write a function to group users by thier age range as an object and names are array
arr = [
    { name: "Alice", age: 15 },
    { name: "Bob", age: 23 },
    { name: "Ahmed", age: 35 },
    { name: "Wafaa", age: 42 },
    { name: "John", age: 19 },
];
// Expected output:
// {
// '0-17': ['Alice'],
// '18-25': ['Bob', 'John'],
// '26-40': ['Ahmed'],
// '+41': ['Wafaa']
// }
console.log(groupByAgeRange(arr));

// Sol using normal object
function groupByAgeRange(users) {
    let groups = {
        '0-17': [],
        '18-25': [],
        '26-40': [],
        '+41': [],
    };

    for (let userObj of users) {
        if (userObj.age >= 0 && userObj.age <= 17)
            groups['0-17'].push(userObj.name);
        else if (userObj.age >= 18 && userObj.age <= 25)
            groups['18-25'].push(userObj.name);
        else if (userObj.age >= 26 && userObj.age <= 40)
            groups['26-40'].push(userObj.name);
        else
            groups['+41'].push(userObj.name);
    }
    return groups
}

// // // =============================

// // Sol using Map()
// function groupByAgeRange(array) {
//     let groupsMap = new Map();

//     for (let obj of array) {
//         if (obj.age >= 0 && obj.age <= 17) {
//             groupsMap.set('0-17', (groupsMap.has('0-17') ? groupsMap.get('0-17').push(obj.name) : [obj.name]));
//         } else if (obj.age >= 18 && obj.age <= 25) {
//             groupsMap.set('18-25', (groupsMap.has('18-25') ? groupsMap.get('18-25').push(obj.name) : [obj.name]));
//         } else if (obj.age >= 26 && obj.age <= 40) {
//             groupsMap.set('26-40', (groupsMap.has('26-40') ? [...groupsMap.get('26-40'), obj.name] : [obj.name]));
//         } else {
//             groupsMap.set('+41', (groupsMap.has('+41') ? [...groupsMap.get('+41'), obj.name] : [obj.name]));
//         }

//     }
//     console.log(groupsMap.get("18-25"))
//     return groupsMap
// }

// // // =============================

// // // Teaditional Solution with Map()
// // function groupByAgeRange(array) {
// //     let groupsMap = new Map();
// //     groupsMap.set('0-17', nameByAgeRange(array, 0, 17));
// //     groupsMap.set('18-25', nameByAgeRange(array, 18, 25));
// //     groupsMap.set('26-40', nameByAgeRange(array, 26, 40));
// //     groupsMap.set('+41', nameByAgeRange(array, 41));
// //     return Object.fromEntries(groupsMap)
// // }

// // function nameByAgeRange(arrayOfObj, rangeStart, rangeEnd = 1000) {
// //     return arrayOfObj.filter((obj) => obj.age >= rangeStart && obj.age <= rangeEnd).map((obj) => obj.name)
// // }
