const server = require('express').Router();
const { User } = require('../../db');

server.get('/id/:id', async function(req, res){
    const {id} = req.params;
    let user = await User.findOne({
        where: { id: id }
    })
    res.send(user ? user : "No existe este usuario")
})

module.exports = server;