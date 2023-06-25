//Напишите функцию, которая определяет уникальны ли все символы в строке. Регистр должен учитываться: ‘a’ и ‘A’ разные символы.

function isUnique(str) {
    const charSet = new Set();

    for (let i = 0; i < str.toLowerCase().length; i++) {
        
        const current = str[i];

        if (charSet.has(current)) {
            return false;
        }
        charSet.add(current);
    }

   return true;
}

console.log(isUnique('aAabcdef')); //False
