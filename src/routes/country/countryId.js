const server = require('express').Router();
const Country = require('../../mongo/Country');

server.get('/id/:id', async function(req, res){
    const {id} = req.params; 
    let country = await Country.findById(id)
    res.send(country ? country : "No existe este usuario")
})

module.exports = server;