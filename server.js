// import express from 'express';

// const PORT = 3000;
// const app = express();

// app.listen(PORT, () => console.log(`app is listening on port ${PORT}`));

import express from 'express';
import {startups} from './data/data.js';

const PORT = 7000;

const app = express();

app.get('/api', (req, res)=> {
    res.json(startups);
    console.log(req.query);
    
})

app.listen(PORT, () => {
  console.log(`app is listening on port ${PORT}`);
});