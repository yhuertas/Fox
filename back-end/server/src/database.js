//Database.js es donde se establecen los detalles para conectarse a la base de datos MongoDB, usando mongoose. 

const mongoose = require('mongoose'); //Permite coneccion  a Base de datos y a modelamiento de los datos
const URI = 'mongodb+srv://yamidhuertas:YamidDB1@clusteryamid.02gxx.mongodb.net/customers?retryWrites=true&w=majority'//'mongodb://localhost/meanEmployees' //Ruta de coneccion a la base de datos//yamidhuertas/YamidDB1
mongoose
    .connect(URI, {
        useUnifiedTopology: true, //Allow us to see json easily
        useNewUrlParser: true, //Use new tool to manage the url connection-> Just connect and parse it to a flag
        useCreateIndex: true, //Allows creating index as new way, instead ensureIndex
        useFindAndModify: false //to use findOneAndUpdate or findOneAndDelete
    })
    .then(db => console.log('DB is connected')) //promesa
    .catch((err) => console.error(err)); //Capturar posibles errores y mostrarlos por consola
module.exports = mongoose;