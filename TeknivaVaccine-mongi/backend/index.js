const express = require( 'express')
require('dotenv').config()
var cors = require('cors')

const app = express()
app.use(express.json());

//cross-origin authorization
app.use(cors())
//router api
const ProviderRoutes = require('./routes/childRouter');
app.use('/api/v1/',ProviderRoutes);


//start at port_api from env
let port=process.env.port_api || 3000

//start server
app.listen(port,()=>{
    console.log(`Server live at http://localhost:${port}`);
})
//