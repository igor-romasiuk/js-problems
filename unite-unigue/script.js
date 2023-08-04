// Function is to take multiple arrays as input and return a new array containing only the unique elements from all the input arrays.

function uniteUnique() {
    const arr = [...arguments];
    let newArr = [];
    
    for (let i = 0; i < arr.length; i++) {
        newArr.push(...arr[i]);
    }
    newArr = new Set(newArr);

    return [...newArr];
}

console.log(uniteUnique([1,2,3],[4,1,5],[6,7,5])); // -> [1, 2, 3, 4,5, 6, 7]
console.log(uniteUnique([1],[2],[3,2,2],[4,1,1,2])); // -> [ 1, 2, 3, 4 ]
