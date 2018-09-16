import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use('/', express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

app.get('/hello.html', (req, res) => {
    res.send('hello' + new Date());
});

app.get('/form_submit', (req, res) => {
    console.log(req.query);
    res.send('hi');
});

app.post('/form_submit', (req, res) => {
    const { username, password } = req.body;
    res.send(`Your input is username: ${username} and password: ${password}`);
});

app.listen(4000, () => {
    console.log('started server');
});


// http://localhost:4000/user.html

