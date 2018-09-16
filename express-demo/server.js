const express = require('express');

const app = express();

app.listen(4000, () => {
    console.log('started server');
});

app.get('/hello.html', (req, res) => {
    res.send('hello');
});
