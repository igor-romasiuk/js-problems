/**
Determine if a number is a palindrome. That is, if we invert the order of all digits, will we get the same number as it was originally. 
An additional condition for solving this problem is that it must be solved with a constant from memory (that is, the option to convert a number to a string will not work).
*/

const input1 = 121;
const input2 = -121;
const input3 = 10;
const input4 = 1221;

const isPalindromeNumber = function(num) {
    if (num < 0) return false;
    if (num < 10) return true;
    if (num % 10 === 0) return false;

    let reverce = 0;

    while (num > reverce) {
        reverce *= 10;
        reverce += num % 10;
        num = Math.trunc(num / 10)
    }

    return num === reverce || num === Math.trunc(reverce / 10);
};

console.log(isPalindromeNumber(input1)); // true
console.log(isPalindromeNumber(input2)); // false
console.log(isPalindromeNumber(input3)); // false
console.log(isPalindromeNumber(input4)); // true
