const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const router = require('./network/routers');
//TODO: colocar la url en una variable de entorno 
db();
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// app.use(router);
router(app);


app.listen(3000);
console.log('La aplicación esta escuchando en http://localhost:3000')

