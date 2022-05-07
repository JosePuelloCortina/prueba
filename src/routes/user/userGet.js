const server = require("express").Router();
const { User } = require("../../db");

server.get('/', async function(req, res) {
    try {
        const user = await User.findAll()
        if(user.length === 0){
            return res.status(422).json({message: "Tabla user vacia"});
        }
        res.status(200).json(user);        
    } catch (error) {
        console.log(error)        
    }
})

module.exports = server;