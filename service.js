//req.paramas example

import express from 'express';
const app = express();

app.get('/api/:category/:id', (req, res) => {
    try {
        res.send(`Category: ${req.params.category}, ID: ${req.params.id}`);
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
    
})

app.use('/', (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(4000, () => {
    console.log('Server is running on port 4000');
});