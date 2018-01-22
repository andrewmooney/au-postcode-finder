const express = require('express');
const app = express();
const PORT = 4000;
const queries = require('./database/queries');

app.get('/', (req, res) => {
    queries.getAll()
    .then(suburbData =>  {
        res.status(200).json({success: "true", count: suburbData.length, data: suburbData})
    })
    .catch(err => res.status(400).json({success: "false", error: err}));
});

app.get('/postcode/:postcode', (req, res) => {
    queries.getByPostcode(req.params.postcode)
    .then(suburbData =>  {
        res.status(200).json({success: "true", count: suburbData.length, data: suburbData})
    })
    .catch(err => res.status(400).json({success: "false", error: err}));
});

app.get('/postcoderange/:postcodestart/:postcodefinish', (req, res) => {
    queries.getByPostcodeRange(req.params.postcodestart, req.params.postcodefinish)
    .then(suburbData =>  {
        res.status(200).json({success: "true", count: suburbData.length, data: suburbData})
    })
    .catch(err => res.status(400).json({success: "false", error: err}));
});

app.get('/suburb/:suburb/:statecode?', (req, res) => {
    const suburb = req.params.suburb;
    const statecode = req.params.statecode || 0;
    queries.getBySuburb(suburb, statecode)
    .then(suburbData =>  {
        res.status(200).json({success: "true", count: suburbData.length, data: suburbData})
    })
    .catch(err => res.status(400).json({success: "false", error: err}));
});

app.get('/state/:state', (req, res) => {
    queries.getByState(req.params.state)
    .then(suburbData =>  {
        res.status(200).json({success: "true", count: suburbData.length, data: suburbData})
    })
    .catch(err => res.status(400).json({success: "false", error: err}));
});

app.get('/statecode/:statecode', (req, res) => {
    queries.getByStateCode(req.params.statecode)
    .then(suburbData =>  {
        res.status(200).json({success: "true", count: suburbData.length, data: suburbData})
    })
    .catch(err => res.status(400).json({success: "false", error: err}));
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))