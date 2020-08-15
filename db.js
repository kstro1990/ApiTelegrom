const db = require('mongoose');

db.Promise = global.Promise;

async function connect() {
    await db.connect('mongodb+srv://db_user_lcastro:Alemania@cluster0.vsrnh.mongodb.net/cursos?retryWrites=true&w=majority',{useNewUrlParser: true, useUnifiedTopology:true})
    .then(()=>{
        console.log('[db]Conectada con exito')
    }).catch(error=> console.error(Error));  
}


module.exports = connect; 
