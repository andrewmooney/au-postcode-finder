const express = require('express');
const app = express();
const PORT = 4000;
const queries = require('./database/queries');


app.get('/bypostcode/:postcode', (req, res) => {
    queries.getByPostcode(req.params.postcode)
    .then(suburbData =>  {
        res.status(200).json({count: suburbData.length, data: suburbData})
    })
    .catch(err => res.status(400).json({success: "false", error: err}));
});

app.get('/bysuburb/:suburb', (req, res) => {
    queries.getBySuburb(req.params.suburb)
    .then(suburbData =>  {
        res.status(200).json(suburbData)
    })
    .catch(err => res.status(400).json({success: "false", error: err}));
});

app.get('/bystate/:state', (req, res) => {
    queries.getByState(req.params.state)
    .then(suburbData =>  {
        res.status(200).json(suburbData)
    })
    .catch(err => res.status(400).json({success: "false", error: err}));
});

app.get('/bystatecode/:statecode', (req, res) => {
    queries.getByStateCode(req.params.statecode)
    .then(suburbData =>  {
        res.status(200).json(suburbData)
    })
    .catch(err => res.status(400).json({success: "false", error: err}));
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))