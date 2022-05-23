const mysql = require('mysql')
//Création of connection to database
const db = mysql.createConnection(
    {
        host:process.env.host,
        user:process.env.user,
        password:process.env.password,
        port:process.env.port_db,
        database:process.env.database
    }
);
//Create connection
db.connect(function(err, result) {
    if(err) throw(err); 
    else{
        console.log(`database connected`)
    }
});
//export db module
module.exports=db;