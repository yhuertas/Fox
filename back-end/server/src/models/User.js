var mongoose= require('mongoose'); 
var Schema= mongoose.Schema; 

var userSchema= Schema({
    nombre: String,
    email: String,
    password: String,
    estado: Boolean 
});
module.exports= mongoose.model('user', userSchema)