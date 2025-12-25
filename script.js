const express = require('express');
const app = express();

app.get('/',(req, res) => {
    res.send('Hello World!');
});

app.get('/profile',(req, res) => {
    res.send('This is the profile page.');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

