const fs = require('fs');

fs.readdir('./data/zadanie02', (err, files) => {
    if(files.length == 0)
        return;
    
    if(err !== null) {
        console.log('Error: ' + err);
        return;
    }

    files.forEach((value, index) => {
        console.log(value);
    });
});