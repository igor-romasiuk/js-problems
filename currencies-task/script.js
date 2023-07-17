const input = [
    ['usd', 'buy', 10000],
    ['usd', 'sell', 5000],
    ['gbp', 'buy', 9000],
    ['eur', 'sell', 7000],
    ['uah', 'buy', 10000],
    ['usd', 'sell', 25000],
];

function countExchanges(array) {
    const result = {};

    array.forEach((item) => {
        const [currency, type, amount] = item;

        if (!result[currency]) {
            result[currency] = [0, 0]

            if (type === 'buy') {
                result[currency][0] += amount
            } else {
                result[currency][1] += amount
            }
        } else {
            if (type === 'buy') {
                result[currency][0] += amount
            } else {
                result[currency][1] += amount
            }
        }
    })

    return result;
}

console.log(countExchanges(input)); // ->
// const output = {
//     usd: [10000, 30000],
//     gbp: [9000, 0],
//     eur: [0, 7000],
//     uah: [10000, 0],
// };
