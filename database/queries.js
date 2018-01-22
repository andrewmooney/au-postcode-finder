const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';

module.exports = {
    getAll: () => {
            return new Promise((resolve, reject) => {
                dbConnection(url)
                .then(collection => {
                    collection.find({}).toArray((err, result) => {
                        if (err) throw err;
                        return resolve(result);
                    });
            })
            .catch(err => reject(err));
        })
    },
    getByPostcode: (postcode) => {
            return new Promise((resolve, reject) => {
                dbConnection(url)
                .then(collection => {
                    collection.find({postcode: parseInt(postcode)}).toArray((err, result) => {
                        if (err) throw err;
                        return resolve(result);
                    });
            })
            .catch(err => reject(err));
        })
    },
    getByPostcodeRange: (postcodeStart, postcodeFinish) => {
        console.log(postcodeFinish)
            return new Promise((resolve, reject) => {
                dbConnection(url)
                .then(collection => {
                    collection.find({postcode: {$gte: parseInt(postcodeStart), $lte: parseInt(postcodeFinish)}}).toArray((err, result) => {
                        console.log(result)
                        if (err) throw err;
                        return resolve(result);
                    });
            })
            .catch(err => reject(err));
        })
    },
    getBySuburb: function(suburb, statecode) {
            return new Promise((resolve, reject) => {
                const query = statecode === 0 ? { suburb: suburb } : { suburb: suburb, stateCode: statecode }
                dbConnection(url)
                .then(collection => {
                    collection.find(query, { 'collation': { 'locale':'en', 'strength': 2 } }).toArray((err, result) => {
                        if (err) throw err;
                        return resolve(result);
                    });
            })
            .catch(err => reject(err));
        })
    },
    getByState: function(state) {
            return new Promise((resolve, reject) => {
                dbConnection(url)
                .then(collection => {
                    collection.find({ state: state }, { 'collation': { 'locale':'en', 'strength': 2 } }).toArray((err, result) => {
                        if (err) throw err;
                        return resolve(result);
                    });
            })
            .catch(err => reject(err));
        })
    },
    getByStateCode: function(statecode) {
            return new Promise((resolve, reject) => {
                dbConnection(url)
                .then(collection => {
                    collection.find({ stateCode: statecode }, { 'collation': { 'locale':'en', 'strength': 2 } }).toArray((err, result) => {
                        if (err) throw err;
                        return resolve(result);
                    });
            })
            .catch(err => reject(err));
        })
    }
}

const dbConnection = (url) => {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, function(err, client) {
            const collection = client.db("AU").collection("postcodes");
            if (err) reject(err);
            resolve(collection);
        });
    });
}