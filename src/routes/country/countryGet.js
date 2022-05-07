const server = require("express").Router();
const Country = require("../../mongo/Country");

server.get('/', async function(req, res) {
    try {
        const country = await Country.find()
        if(country.length === 0){
            return res.status(422).json({message: "Tabla contry vacia"});
        }
        res.status(200).json(country);        
    } catch (error) {
        console.log(error)        
    }
})

module.exports = server;