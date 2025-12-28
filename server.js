// // import express from 'express';

// // const PORT = 3000;
// // const app = express();

// // app.listen(PORT, () => console.log(`app is listening on port ${PORT}`));

// import express from 'express';
// import {startups} from './data/data.js';

// const PORT = 7000;

// const app = express();

// app.get('/api', (req, res)=> {
//     let filteredData = startups;

//     if(req.query.industry){
//         filteredData = filteredData.filter(startup => 
//             startup.industry.toLowerCase() === req.query.industry.toLowerCase()
//         );
//     }
//     if(req.query.country){
//         filteredData = filteredData.filter(startup => 
//             startup.country.toLowerCase() === req.query.country.toLowerCase()
//         );
//     }
//     if(req.query.continent){
//         filteredData = filteredData.filter(startup => 
//             startup.continent.toLowerCase() === req.query.continent.toLowerCase()
//         );
//     }
//     if(req.query.is_seeking_funding){
//         const isSeekingFunding = req.query.is_seeking_funding.toLowerCase() === 'true';
//         filteredData = filteredData.filter(startup => 
//             startup.is_seeking_funding === isSeekingFunding
//         );
//     }
//     if(req.query.has_mvp){
//         const hasMvp = req.query.has_mvp.toLowerCase() === 'true';
//         filteredData = filteredData.filter(startup => 
//             startup.has_mvp === hasMvp
//         );
//     }

//     res.json(filteredData);
//     console.log(req.query);
    
// });

// // app.get('/api/:field/:term', (req, res) => {
// //     const {field, term} = req.params;
// //     const filteredData = startups.filter(
// //         startups => startups[field] && startups[field].toString().toLowerCase() === term.toLowerCase()
// //     );
// //     res.json(filteredData);
// // });
// app.get('/api/:field/:term', (req, res) => {
//     const {field, term} = req.params;

//     const allowedFields = ['country', 'continent', 'industry'];

//     if(!allowedFields.includes(field.toLowerCase())) {
//         return res.status(400).json({error: 'Search field not allowed. Please use only country, continent, industry'});
//     }

//     const filteredData = startups.filter(
//         startup => startup[field] && startup[field].toString().toLowerCase() === term.toLowerCase()
//     );

//     res.json(filteredData);
// });

// app.listen(PORT, () => {
//   console.log(`app is listening on port ${PORT}`);
// });

import express from 'express';
import { apiRouter } from './routes/apiRouter.js';

const app = express();

app.use('/api', apiRouter);

app.use((req, res) => {
    res.status(404).json({error: 'Endpoint not found'});
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});