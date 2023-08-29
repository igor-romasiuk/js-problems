// The task of the createPhoneNumber function is to take an input (which can be a number or a string)
// and create a formatted phone number if the input is valid.

function createPhoneNumber(num) {
    const numStr = num.toString().replace(/\D/g, '');

    if (numStr.length !== 10) return 'Phone number is wrong';

    const numArr = numStr.split('');

    numArr.splice(0,0,'(');
    numArr.splice(4,0,')');
    numArr.splice(5,0,' ');
    numArr.splice(9,0,'-');
    
    return numArr.join(''); 
}

console.log(createPhoneNumber(2343216781)); // -> (234) 321-6781
console.log(createPhoneNumber(23432)); // -> Phone number is wrong
console.log(createPhoneNumber('234a216781')); // -> Phone number is wrong
