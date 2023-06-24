let classNamesArr = [
    'header', 'menu', 'menu-item', 'menu-item', 'footer', 'menu', 'link', 'menu-item', 'link', 'link', 'link'
];

function classNames () {
    const classNamesCount = {};

    for (let i = 0; i < classNamesArr.length; i++) {
        const current = classNamesArr[i]

        if (classNamesCount[current]) {
            classNamesCount[current] += 1;
        } else {
            classNamesCount[current] = 1;
        }
    }

    const result = Object.keys(classNamesCount).sort((a,b) => {
        return classNamesCount[b] - classNamesCount[a];
    });
    return result;
};

const result = classNames(classNamesArr);
console.log(result);// ['link', 'menu-item', 'menu', 'header', 'footer'];
