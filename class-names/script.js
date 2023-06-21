let classNames = [
    'header', 'menu', 'menu-item', 'menu-item', 'footer', 'menu', 'link', 'link', 'link'
]; // ['link', 'menu-item', 'menu', 'header', 'footer'];

let classNamesCount = {};

for (let i = 0; i < classNames.length; i++) {

    if (classNamesCount[classNames]) {
        classNamesCount[classNames] += 1;
    } else {
        classNamesCount[classNames] = 1;
    };
};

let result = Object.keys(classNamesCount).sort((a,b) => classNamesCount[a] - classNamesCount[b]);
console.log(result);