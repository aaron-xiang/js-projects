const fs = require('fs');

function callback(err, data) {
    if (!err) {
        console.log("get data");
        console.log(data);
    }
}

fs.readFile('index.html', callback);

console.log("end");
