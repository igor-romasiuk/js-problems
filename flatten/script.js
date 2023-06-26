function flatten(array) {
    const res = [];

    for (let i = 0; i < array.length; i++) {
        
        if (Array.isArray(array[i])) {
            const flat = flatten(array[i]);

            for (let j = 0; j < flat.length; j++) {
                res.push(flat[j])
            }
        } else {
            res.push(array[i])
        }
    }

    return res;
}

console.log(flatten([[1], [[2, 3]], [[[4]]]])); // -> [1, 2, 3, 4]

function flatten2(array) {
    const flattenedArray = [];

    array.forEach((element) => {
        if (Array.isArray(element)) {
            flattenedArray.push(...flatten2(element));
        } else {
            flattenedArray.push(element);
        }
    });

    return flattenedArray;
}

console.log(flatten2([[1], [[2, 3]], [[[4]]]])); // -> [1, 2, 3, 4]

