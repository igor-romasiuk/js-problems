// Implemented minMax function to find the minimum and maximum values from an array of numbers using different approaches.

function minMax(...array) {
    let minValue = Math.min(...array);
    let maxValue = Math.max(...array);

    return [minValue, maxValue];
}

console.log(minMax(1,2,3,4,5,54));// [ 1, 54 ]

function minMax2(...array) {
    let minValue = Infinity;
    let maxValue = -Infinity;

    for (let i = 0; i < array.length; i++) {
        if (array[i] < minValue) {
            minValue = array[i];
        } else if (array[i] > maxValue) {
            maxValue = array[i];
        }
    }

    return [minValue, maxValue];
}

console.log(minMax2(1,2,3,4,5,54));// [ 1, 54 ]
