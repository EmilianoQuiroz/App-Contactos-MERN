/**
 ** Configuraciones del servidor
 */

//*Llamamos a los modulos express y cors
const express = require('express')
const cors = require('cors')
const app = express();

//* Configuracion
// Le decimos a la constante app que nos guarde una variable
// Estea le decimos que si el servicio no tiene un puerto asignado en la variable de entorno
// entonces esta se debe ejecutar en el puerto 4000
app.set('port', process.env.PORT || 4000)

//* Exportamos app
module.exports = app;