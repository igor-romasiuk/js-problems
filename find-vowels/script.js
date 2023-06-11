/*Необходимо написать функцию, которая принимает строку в качестве аргумента и выводит количество гласных в этой строке. */


function findVowels(str) {
    let count = 0;
    const vowels = ['a','e','i','o','u'];

    for (let char of str.toLowerCase()) {
        if (vowels.includes(char)){
            count += 1
        };
    };
    return count;
}

console.log(findVowels('hello'));
console.log(findVowels('why'));


function findVowels2(str) {
    const matched = str.match(/[aeiou]/gi);
    return matched ? matched.length : 0;   
}

console.log(findVowels2('hello'));
console.log(findVowels2('why'));