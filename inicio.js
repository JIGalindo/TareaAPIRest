const express = require("express");
const rutas=  require('./canciones');
var app = express();
const bodyParser = require("body-parser");
var path = require('path');

app.listen(3000, () => console.log("App escuchando en el puerto 3000!"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api',rutas);

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname,'pagina.html'));
  //res.status(200).send('Bienvenido a Nuestra Tienda de Musica!');
});



 