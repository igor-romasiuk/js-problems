function anagram(strA, strB) {
    strA = strA.toLowerCase().replace(/\s/g, '');
    strB = strB.toLowerCase().replace(/\s/g, '');

    if (strA.length !== strB.length) {
        return `It isn't an anagram. Length isn't the same`;
    };

    for (let i = 0; i < strA.length; i++) {
        const charA = strA[i];
        const charIndexB = strB.indexOf(charA);
        const isCharAPresentInStrB = charIndexB >= 0;

        if (isCharAPresentInStrB) {
            strB = strB.replace(charA, '');
        } else {
            return `It isn't an anagram. Second word doesn't have ${charA}`;
        }
    };

    return `It is an anagram`
};


console.log(anagram('friend', 'Finder'));
console.log(anagram('hello', 'bye'));

// const anagram2 = (a,b) => [...a.toLowerCase()].sort().toString() === [...b.toLowerCase()].sort().toString();

// console.log(anagram2('friend', 'Finder'));
// console.log(anagram2('hello', 'bye'));
