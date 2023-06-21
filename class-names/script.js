let classNames = [
    'header', 'menu', 'menu-item', 'menu-item', 'footer', 'menu', 'link', 'menu-item', 'link', 'link', 'link'
]; // ['link', 'menu-item', 'menu', 'header', 'footer'];

let classNamesCount = {};

for (let i = 0; i < classNames.length; i++) {
    let current = classNames[i];
    
    if (classNamesCount[current]) {
        classNamesCount[current] += 1;
    } else {
        classNamesCount[current] = 1;
    };
};

let result = Object.keys(classNamesCount).sort((a,b) => classNamesCount[b] - classNamesCount[a]);
console.log(result);