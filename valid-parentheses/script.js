/**
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
*/

let s1 = '()';
let s2 = '()[]{}';
let s3 = '(]';
let s4 = '{[]}';
let s5 = '([)]';
let s6 = '{[[]{}]}()()';

function isValid(str) {
    const stack = [];
    const openingBrackets = new Set(['(','{','[']);

    const closingBrackets = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let i = 0; i < str.length; i++) {
        const current = str[i];

        if (openingBrackets.has(current)) {
            stack.push(current);
        } else if (closingBrackets[current] !== stack.pop()){
            return false;
        }
    }

    return stack.length === 0;
}

console.log(s1, isValid(s1));// true
console.log(s2, isValid(s2));// true
console.log(s3, isValid(s3));// false
console.log(s4, isValid(s4));// true
console.log(s5, isValid(s5));// false
console.log(s6, isValid(s6));// true
