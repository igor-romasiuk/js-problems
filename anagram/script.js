

function buildCharObject(str) {
    const charObj = {};
    str = str.toLowerCase().replace(/[^\w]/g);
    for (let char of str) {
        charObj[char] = charObj[char] + 1 || 1;
    };
    return charObj;
};

function anagram(strA, strB) {
    const aCharObj = buildCharObject(strA);
    const bCharObj = buildCharObject(strB);

    if (Object.keys(aCharObj).length !== Object.keys(bCharObj).length) {
        return false;
    };

    for (let char in aCharObj) {
        if (aCharObj[char] !== bCharObj[char]) {
            return false;
        };
    };
    return true;
};

console.log(anagram('friend', 'Finder'));
console.log(anagram('hello', 'bye'));

const anagram2 = (a,b) => [...a.toLowerCase()].sort().toString() === [...b.toLowerCase()].sort().toString();

console.log(anagram2('friend', 'Finder'));
console.log(anagram2('hello', 'bye'));
