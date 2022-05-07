const server = require('express').Router();
const Country = require('../../mongo/Country');

server.delete('/id/:id', async function(req, res){
    const { id } = req.params;
    try {
      const country = await Country.findById(id);
      if (!country) throw Error("Id incorrecto o country inexistente");
      await country.remove();
      res.status(200).send("Country eliminado exitosamente!");
    } catch (error) {
      res.status(404).json("ocurrio un error: " + error);
    }
})

module.exports = server;