/*задачa про палиндром,слово или фразa, которая читается в обе стороны одинаково */

/*
function palindrome(str) {
    str = str.toLowerCase().replace(/\s/g, '');
    return str === str.split('').reverse().join('');
}

console.log(palindrome('Race car')); 
console.log(palindrome('table'));
*/


function palindrome2(str) {
    str = str.toLowerCase().replace(/\s/g, '');
    const len = Math.floor(str.length / 2);
    for (i = 0; i < len; i++) {
        if (str[i] !== str[str.length - i - 1]) {
            return false;
        }
    } 

    return true;
}

console.log(palindrome2('Racecar')); 
console.log(palindrome2('table'));
console.log(palindrome2('Fuck #3# kcuf'));
