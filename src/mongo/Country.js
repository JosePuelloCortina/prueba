var mongoose = require('mongoose');
    Schema = mongoose.Schema;

var countrySchema = new Schema({
    name:       {type: String},
    continent:  {type: String},
    capital:    {type: String},
    area:       {type: String},
    population: {type: String}
});

const Country = mongoose.model('Country', countrySchema)

module.exports = Country;