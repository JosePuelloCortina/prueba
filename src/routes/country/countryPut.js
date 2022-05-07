const server = require("express").Router();
const Country = require('../../mongo/Country');


server.put('/update/id/:id', async function(req, res){
        if(!req.body.name || !req.body.continent || !req.body.capital || !req.body.area || !req.body.population ){
            return res.status(422).json({message: "No se enviaron todos los datos"});
        }
        Country.findById(req.params.id, function(err, country){
        
            country.name = req.body.name;
            country.continent = req.body.continent;
            country.capital = req.body.capital; 
            country.area = req.body.area;
            country.population = req.body.population;

    
            country.save(function(err) {
                if(!err) {
                    console.log('Actualizado!');
                } else {
                    console.log('ERROR: ' + err)
                }
                res.send(country);
            });
        });


})


module.exports = server;