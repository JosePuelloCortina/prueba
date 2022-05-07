const server = require('express').Router();
const { User } = require('../../db');

server.delete('/id/:id', async function(req, res){
    const { id } = req.params;
    try {
      const user = await User.findByPk(id);
      if (!user) throw Error("Id incorrecto o usuario inexistente");
      await user.destroy();
      res.status(200).send("Usuario eliminado exitosamente!");
    } catch (error) {
      res.status(404).json("ocurrio un error: " + error);
    }
})

module.exports = server;