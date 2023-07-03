/**
Conditions of the problem: given an array with numbers, it is necessary to find the indices of two numbers in it, 
the sum of which will be equal to the given number N.
By convention, the input array has exactly one solution, and you cannot use the same element twice.
*/

const sumOfTwo = (arr,target) => {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                result.push(i);
                result.push(j);
            }
        }
    }

    return result;
}

console.log(sumOfTwo([2, 7, 11, 15], 22));// [1, 3]
console.log(sumOfTwo([2, 7, 11, 15], 20));// []


const sumOfTwo2 = (arr, target) => {
    const numObject = {};

    for (let i = 0; i < arr.length; i++) {
        numObject[arr[i]] = i;
    }
    for (let i = 0; i < arr.length; i++) {
        const diff = target - arr[i];

        if (numObject[diff] && numObject[diff] !== i) {

            return [i, numObject[diff]];
        }
    }

    return [];
}

console.log(sumOfTwo([2, 7, 11, 15], 22));// [1, 3]
console.log(sumOfTwo([2, 7, 11, 15], 20));// []
