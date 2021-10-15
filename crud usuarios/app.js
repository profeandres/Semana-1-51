'use strict'

var express = require('express')
var bodyParser = require('body-parser')

var cors = require('cors');


var app = express()
app.use(cors());
//archivos de rutas

var user_routes = require('./routes/user')

//midlewares
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


//CORDS
/* app.use((req, res, next)=>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, ContentType, Accept");
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
}); */

//rutas

app.use('/', user_routes)


//exportar
module.exports = app