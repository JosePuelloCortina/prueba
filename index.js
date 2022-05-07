const server = require('./src/app');
const { conn } = require('./src/db');

conn.sync({ force: false }).then(async() => {
    try{
        server.listen(3001, () => {
        console.log('% listening at 3001');
        console.log('Database connected!!');
        });
    }catch(error){
        console.log(error)
    }
});