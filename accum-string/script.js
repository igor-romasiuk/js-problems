/**
The function accepts a string as input, and at the output this string is transformed into a set of duplicates of its characters, 
the number of repetitions of a certain character depends on its index in the string, and the duplicates themselves are separated by a hyphen, 
each set must begin with an uppercase letter, and all subsequent characters - with a lowercase letter letters.
*/

function accum(str) {
    const arr = str.toUpperCase().split('');
    const repeatArr = arr.map((el, i) => {
        return el += el.repeat(i).toLowerCase();
    });
    const resString = repeatArr.join('-');

    return resString;
}

console.log(accum('abcd'));// A-Bb-Ccc-Dddd

function accum2(string) {
    return string
    .toUpperCase()
    .split('')
    .map((el, i) => el + el.repeat(i).toLowerCase())
    .join('-');
}

console.log(accum2('abcd'));// A-Bb-Ccc-Dddd
