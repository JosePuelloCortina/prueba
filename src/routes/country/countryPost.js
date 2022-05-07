const server = require("express").Router();
const Country = require('../../mongo/Country');

server.post('/create', async function(req, res){
    const { name, continent, capital, area, population } = req.body; // le paso los valores por body
    if(!name || !continent || !capital || !area || !population ){ // validacion para recibir todos los datos 
        return res.status(422).json({message: "No se enviaron todos los datos"});
    }
    var country = new Country({
        name: name,
        continent: continent,
        capital: capital,
        area: area,
        population: population,
    }) // se crea una entidad y se guarda en la base de datos 

    country.save(function(err){
        if(!err){
            console.log('Created');
        } else {
            console.log('ERROR: '+ err);
        }
    });
    //respondo con los datos creados 
    res.send(country);

})

module.exports = server;