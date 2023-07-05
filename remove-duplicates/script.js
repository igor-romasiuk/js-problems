/** 
Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. 
The relative order of the elements should be kept the same. Then return the number of unique elements in nums.
*/

const arr1 = [1, 1, 2];
const arr2 = [0, 0, 1, 1, 1, 1, 1, 1, 2, 2, 3, 3, 4];

let removeDuplicates = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i -1]) {
            nums.splice(i, 1);
            i--
        }
    }

    return nums.length;
}

console.log(removeDuplicates(arr1));// 2
console.log(arr1);// [1, 2]

console.log(removeDuplicates(arr2));// 5
console.log(arr2);// [0, 1, 2, 3, 4]

const removeDuplicates2 = function (nums) {
    const uniqueElements = [];

    for (let i = 0; i < nums.length; i++) {
        if (!uniqueElements.includes(nums[i])) {
            uniqueElements.push(nums[i]);
        }
    }

    return nums.length;
}

console.log(removeDuplicates2(arr1));// 2
console.log(arr1);// [1, 2]

console.log(removeDuplicates2(arr2));// 5
console.log(arr2);// [ 0, 1, 2, 3, 4 ]
