const server = require("express").Router();
const { User } = require('../../db');


server.put('/update/id/:id', async function(req, res){
    const { id } = req.params;
    const { name, lastName, age, email, phone_number, address } = req.body;
    if(!name || !lastName || !age || !email || !phone_number || !address){
        return res.status(422).json({message: "No se enviaron todos los datos"});
    }
    User.findByPk(id)
    .then((user) => {
        res.send(user.update({
            name: name,
            lastName: lastName,
            age: age,
            email: email,
            phone_number: phone_number,
            address: address
        }))
    }).catch((error) =>{
        console.log(error, "Error en la ruta Put-User")
    })

})


module.exports = server;