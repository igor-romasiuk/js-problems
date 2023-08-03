/*Необходимо написать функцию, которая принимает строку в качестве аргумента и выводит количество гласных в этой строке. */

function findVowels(str) {
   const vowels = ['a','u','i','o','e'];
   let count = 0;

   for (let char of str) {
        if (vowels.includes(char)) {
            count += 1;
        }
   }

   return count;
}

console.log(findVowels('Hello')); // -> 2
console.log(findVowels('why')); // -> 0

function findVowels2(str) {
    const matched = str.match(/[aeiou]/gi);

    return matched ? matched.length : 0;
}

console.log(findVowels2('hello')); // -> 2
console.log(findVowels2('why')); // -> 0
