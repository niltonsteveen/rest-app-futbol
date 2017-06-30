'use strict'
//libreria para tratar los datos que vienen através de una petición http
var bodyParser = require('body-parser');

//importo la libreria de express
var express=require("express");

//importo el odm para utilizar mongodb
var mongoose=require("mongoose");

var app = express();
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.set('port', (process.env.PORT || 3000));

mongoose.connect('mongodb://localhost:27017/app-futbol', (err, res)=>{
  if (err) {
    return console.log(`Error al conectarse a la base de datos: ${err}`);
  }
  console.log('Conexión a la base de datos establecida');
  app.listen(app.get('port'), ()=> {
  	console.log('port ' + app.get('port') + ' listening');
  });
})
