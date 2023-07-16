//Write a function that takes a string and returns a new one with all duplicate characters removed.

function removeDupes(str) {
    const newStr = [];

    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        if (newStr.indexOf(char) === -1) {
            newStr.push(char);
        }
    }

    return newStr.join('');
}

console.log(removeDupes('abcddbca')) // -> 'abcd'

function removeDupes2(str) {
    const uniqueChars = [...new Set(str)];

    return uniqueChars.join('');
}

console.log(removeDupes2('abcddbca')) // -> 'abcd'
