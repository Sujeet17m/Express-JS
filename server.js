// import express from 'express';

// const PORT = 3000;
// const app = express();

// app.listen(PORT, () => console.log(`app is listening on port ${PORT}`));

import express from 'express';
import {startups} from './data/data.js';

const PORT = 7000;

const app = express();

app.get('/api', (req, res)=> {
    let filteredData = startups;

    if(req.query.industry){
        filteredData = filteredData.filter(startup => 
            startup.industry.toLowerCase() === req.query.industry.toLowerCase()
        );
    }
    if(req.query.country){
        filteredData = filteredData.filter(startup => 
            startup.country.toLowerCase() === req.query.country.toLowerCase()
        );
    }
    if(req.query.continent){
        filteredData = filteredData.filter(startup => 
            startup.continent.toLowerCase() === req.query.continent.toLowerCase()
        );
    }
    if(req.query.is_seeking_funding){
        const isSeekingFunding = req.query.is_seeking_funding.toLowerCase() === 'true';
        filteredData = filteredData.filter(startup => 
            startup.is_seeking_funding === isSeekingFunding
        );
    }
    if(req.query.has_mvp){
        const hasMvp = req.query.has_mvp.toLowerCase() === 'true';
        filteredData = filteredData.filter(startup => 
            startup.has_mvp === hasMvp
        );
    }

    res.json(filteredData);
    console.log(req.query);
    
})

app.listen(PORT, () => {
  console.log(`app is listening on port ${PORT}`);
});