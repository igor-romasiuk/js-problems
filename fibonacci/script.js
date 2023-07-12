// The Fibonacci sequence is a series of numbers in which each number is the sum of the two preceding ones. 
// It typically starts with 0 and 1.

function fibonacci(num) {
    let result = [0, 1];

    for (let i = 2; i <= num; i++) {
        const prevNum1 = result[i - 1];
        const prevNum2 = result[i - 2];

        result.push(prevNum1 + prevNum2);
    }

    return result[num];
};

console.log(fibonacci(7)); // -> 13

function fibonacci2(num) {
    if (num <= 0) {
        return [];
    } else if (num === 1) {
        return [0];
    } else if (num === 2) {
        return [0, 1];
    } else {
        const sequence = fibonacci2(num - 1);
        sequence.push(sequence[num - 2] + sequence[num - 3]);
    }

    return sequence;
}

console.log(fibonacci(7)); // -> 13
