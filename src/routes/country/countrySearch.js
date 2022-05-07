const server = require('express').Router();
const Country = require('../../mongo/Country');

server.get('/search', async function(req, res){
    try {
        const { name } = req.query;
        if(name == ''){
            return res.json({message: "Busqueda vacia"})
        }
        let country = await Country.find({
            name
        })
        res.send(country.length ? country : "No existe este usuario")
    } catch (error) {
        console.log(error)
        
    }
})

module.exports = server;