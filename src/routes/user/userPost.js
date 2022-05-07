const server = require("express").Router();
const { User } = require("../../db");

server.post('/create', async function(req, res){
    const { name, lastName, age, email, phone_number, address } = req.body;
    if(!name || !lastName || !age || !email || !phone_number || !address){
        return res.status(422).json({message: "No se enviaron todos los datos"});
    }
    User.create({
        name: name,
        lastName: lastName,
        age: age,
        email: email,
        phone_number: phone_number,
        address: address
    }).then(user =>{
        res.json(user)
    }).catch((error) =>{
        console.log(error, " Error en la ruta Post-User")
    })

})

module.exports = server;