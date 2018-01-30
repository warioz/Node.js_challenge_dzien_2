const fs = require('fs');

const filePath = process.argv.slice(2);

if(filePath.length <= 0)
    return;

console.log(filePath[0]);


fs.readFile(filePath[0], { encoding: 'UTF-8'}, (err, data) => {
    if(err !== null) {
        console.log('Error: ' + err.message);
        return;
    }

    data = data.replace(/./g, (value, index) => (index % 2 == 1)? value : value.toUpperCase());

    console.log(data);
})