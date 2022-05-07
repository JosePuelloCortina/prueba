const server = require('express').Router();
const { User, Op } = require('../../db');

server.get('/search', async function(req, res){
    try {
        const { name } = req.query;
        if(name == ''){
            return res.json({message: "Busqueda vacia"})
        }
        let user = await User.findAll({
            where: {
                name:{
                    [Op.iLike]: `%${name}%`
                }
            }
        })
        res.send(user.length ? user : "No existe este usuario")
    } catch (error) {
        console.log(error)
        
    }
})

module.exports = server;