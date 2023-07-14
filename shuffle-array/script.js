/**
Given an integer array nums, design an algorithm to randomly shuffle the array. 
All permutations of the array should be equally likely as a result of the shuffling.
*/

let input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const shuffle = function (array) {
    for (let i = array.length -1; i > 0; i--) {
        let current = array[i];
        let random = Math.floor(Math.random() * (i + 1));

        array[i] = array[random];
        array[random] = current;
    }

    return array.join(',');
}

for (let i = 0; i < 5; i++) {
    console.log(shuffle(input));
}
