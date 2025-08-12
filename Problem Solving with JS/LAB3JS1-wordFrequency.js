// Write a function that count the wordFrequency of words in a string
function wordFrequency(str) {
    // let words = str.split(' '); 
    // Or
    let words = [str[0]];
    for (let i = 1; i < str.length; i++) {
        (str[i] !== ' ') ? words[words.length - 1] = words[words.length - 1] += str[i] : words[words.length] = '';
    }

    let wordMap = new Map();
    for (let word of words) {
        wordMap.set(word, (wordMap.get(word) + 1 || 1));
    }
    return Object.fromEntries(wordMap)
}
str = "the quick brown fox jumps over the lazy dog the dog braked";
console.log(wordFrequency(str));