/**
The conditions of the problem are as follows: given an array with numbers, in it all the numbers are repeated 2 times, except for one number. He must be found. 
There is one more limitation: it is necessary to solve this problem in linear time.
*/

const input = [4, 1, 2, 33, 1, 2, 4];

const singleNumber = function (nums) {
    let uniq = new Set();
    let uniqSum = 0;
    let numSum = 0;

    for (let i = 0; i < nums.length; i++) {
        const current = nums[i];

        if (!uniq.has(current)) {
            uniq.add(current);
            uniqSum += current;
        }
        numSum += current;
    }

    return uniqSum * 2 - numSum;
}

console.log(singleNumber(input));// 33

const singleNumber2 = function (nums) {
    let uniq = Array.from(new Set(nums));

    let reduceSum = (s, i) => s + i;

    let uniqSum = uniq.reduce(reduceSum);
    let numSum = nums.reduce(reduceSum);

    return uniqSum * 2 - numSum;
}

console.log(singleNumber2(input));// 33
