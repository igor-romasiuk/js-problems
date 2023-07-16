/**
Create a function that will accept a string as input. 
A string is a word whose letters are written in a different case. As an output, we get an array with indices of letters only in upper case.
*/

function capitals(word) {
    const result = [];
    const bigLetter = word.toUpperCase().split('');
    const smallLetter = word.split('');
    
    for (let i = 0; i < word.length; i++) {
        if (smallLetter[i] === bigLetter[i]) {
            result.push(i);
        }
    }
    return result;
}

console.log(capitals('CodEWaRs')); // -> [0, 3, 4, 6]
console.log(capitals('justForTest')); // -> [4, 7]

const capitals2 = (word) =>
    word.split('').reduce((result, letter, index) => {
        if (letter === letter.toUpperCase()) {
            result.push(index);
        }

        return result;
}, []);

console.log(capitals2('CodEWaRs')); // -> [0, 3, 4, 6]
console.log(capitals2('justForTest')); // -> [4, 7]
