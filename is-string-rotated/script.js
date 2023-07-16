// Write a function that takes 2 strings. Return true if the strings are reversed versions of each other. Otherwise return false.

function isStringRotated(source, test) {
    
    if (source.length !== test.length) {
        return false;
    }

    const concatenated = source + source;

    return concatenated.includes(test);
}

console.log(isStringRotated('javascript', 'scriptjava')) // -> true
console.log(isStringRotated('javascript', 'iptjavascr')) // -> true
console.log(isStringRotated('javascript', 'java')) // -> false
