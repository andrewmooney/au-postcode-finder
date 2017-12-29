const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let postcodeSchema = new Schema({
    'Country': String,
    'Postal Code': Number,
    'Suburb': String,
    'State Name': String,
    'State Code': String,
    'Administritave Area': String,
    'Latitude': Number,
    'Longitude': Number,
    'Accuracy': Number
});

module.exports = mongoose.model('Postcode', postcodeSchema);