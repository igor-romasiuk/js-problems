//Функция поиска самого короткого слова

function findShort(str) {
    const wordsArr = str.split(' ');
    const sortWordsArr = wordsArr.sort((a,b) => {
        return a.length - b.length;
    })
    return sortWordsArr[0];
}

console.log(findShort('Life is too short to be small')); //is
