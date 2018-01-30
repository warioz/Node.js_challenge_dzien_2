const fs = require('fs');

fs.readFile('./data/zadanie01/input.json', (err, data) => {
    if(err !== null || data === null) {
        console.log('Error: ' + err.message);
        return;
    }

    const dataJson = JSON.parse(data);
    let sum = 0;

    dataJson.forEach(elem => {
        sum += elem;
    });

    fs.writeFile('./data/zadanie01/sum.txt', sum, err => err !== null ? console.log('Error: '+ err.message) : console.log('done'));
});