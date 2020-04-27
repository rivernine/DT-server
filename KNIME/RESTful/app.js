const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

let users = [
    {
        id: 1,
        name: 'alice'
    },
    {
        id: 2,
        name: 'bek'
    },
    {
        id: 3,
        name: 'chris'
    }
]

app.get('/', (req, res) => {
    res.send("Hello World!\n");
});

app.get('/users', (req, res) => {
    return res.json(users)
});

app.post('/users', (req, res) => {
    const name = req.body.name || '';
    const newUser = {
        id: 4,
        name: name
    };

    users.push(newUser);
    return res.status(201).json(newUser);
})

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});

