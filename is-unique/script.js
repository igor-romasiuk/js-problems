// Write a function that determines if all characters in a string are unique. Case must be respected: "a" and "A" are different characters.

function isUnique2(str) {
    for (let i = 0; i < str.length; i++) {
        if (str.indexOf(str[i]) !== i) {
            return false;
        }
    }

    return true;
}

console.log(isUnique2('aAbcdefa')); //False
console.log(isUnique2('aAbcdef')); //True

function isUnique(str) {
    const charSet = new Set();

    for (let i = 0; i < str.length; i++) {
        const current = str[i];

        if (charSet.has(current)) {
            return false;
        }
        charSet.add(current);
    }

   return true;
   
}

console.log(isUnique('aAbcdefa')); //False
console.log(isUnique('aAbcdef')); //True
