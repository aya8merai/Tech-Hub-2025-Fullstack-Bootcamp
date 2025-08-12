function characterFrequency(str) {
    let charsFreq = new Map();
    for (let character of str) {
        character = character.toLowerCase();
        charsFreq.set(character, (charsFreq.get(character) || 0) + 1);
    }
    return charsFreq;
}

let str = 'hello world';
console.log(characterFrequency(str));