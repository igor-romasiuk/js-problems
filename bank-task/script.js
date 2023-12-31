//REQUIREMENTS:
// 1. Always deliver the lowest number of possible notes;
// 2. It's possible to get the amount requested with available notes;
// 3. The client balance is infinite;
// 4. Amount of notes is infinite;
// 5. Available notes 100, 50, 20 10

function iWantToGet(ammountRequired) {
    const availableNotes = [1000, 100, 50, 20, 10, 5, 1];
    const result = [];

    if (ammountRequired > 0) {
        for (let i = 0; i < availableNotes.length; i++) {
            const note = availableNotes[i];

            while (ammountRequired - note >= 0) {
                ammountRequired -= note;
                result.push(note);
            }
        }

    } else {
        console.log('Please enter new amount');
    }

    return result;
}

console.log(iWantToGet(153));// -> [ 100, 50, 1, 1, 1 ]
