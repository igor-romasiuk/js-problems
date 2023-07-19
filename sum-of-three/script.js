/**
Problem conditions: given an array with arbitrary numbers. 
It is necessary to find all unique triples of numbers from this array, which together will be equal to 0.
*/

const array = [-1, 0, 1, 2, -1, -4];

const threeSum = function(nums, target = 0) {
    const result = [];

    if (nums.length < 3) {
        return result;
    }

    nums = nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] > target) {
            break;
        }
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        let j = i + 1;
        let k = nums.length - 1;

        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k];

            if (sum === target) {
                result.push([nums[i], nums[j], nums[k]]);
                j++;
                k--;
            } else if (sum < target) {
                j++;
            } else if (sum > target) {
                k--;
            }
        }
    }

    return result;
}

console.log(threeSum(array));// [[-1, -1, 2], [-1, 0, 1]]
