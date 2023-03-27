/**
 ** En index.js utilizamos las configuraciones del servidor
 ** que se encuentran en app.js
 */

 const app = require('./app')// Esta es la logica para ejecutar el servidor

 // Funcin asincrona para ejecutar el servidor
 async function main(){
    await app.listen(app.get('port'))
    //Mensaje por consola para indicar en donde esta corriendo nuestra aplicacion
    console.log('El servidor esta corriendo en el puerto: ',app.get('port'));
 }

// Llamamos a nuestra funcion main 
main();