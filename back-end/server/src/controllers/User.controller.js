var User = require('../models/User'); 
var bcrypt = require('bcrypt'); 
var jwt = require('../helpers/jwt') 
var path = require('path'); 
const { param } = require('../routes/User.routes');
const userController = {};

userController.registrar= async(req, res) =>{
    console.log(req.body)
    var params = req.body; 
    var user = new User(); 
    user.nombre = params.nombre;
    user.email = params.email;
    user.password=params.password;
    user.estado = false;
    
    //Si hay una contraseña en el envio de la peticion
    if (params.password) { //la vamos a encriptar
        var salt =  await bcrypt.genSalt(10);
        bcrypt.hash(params.password, salt,null, async (err, hash) =>{
            user.password = hash; 

            await User.findOne({ email: params.email }, async (err, user_data) => {
                if (!user_data) { 
                     await user.save((err, user) => {
                        if (user) { 
                            res.status(200).send({ user: user })
                        } else { 
                            res.status(404).send({ message: err })
                        }
                    })
                } else { 
                    res.status(404).send({ message: "El correo ya esta registrado" })
                }
            })
        });
    } else { 
        res.status(500).send({ message: 'Ingrese su contraseña' })
    }
}

userController.login= async(req, res)=> {
    var data = req.body; 
    await User.findOne({ email: data.email }, (err, user_data) => {
        if (err) {
            res.status(500).send({ message: "Error en el servidor" });
        } else {
            if (!user_data) { 
                res.status(404).send({ message: "El correo no esta registrado" })
            } else { 
                bcrypt.compare(data.password, user_data.password, function (err, check) {
                    if (check) { 
                        if (data.gettoken) {
                            res.status(200).send({
                                jwt: jwt.createToken(user_data), 
                                user: user_data, 
                                message: 'Este usuario ya tiene un token'
                            });
                        } else {
                            res.status(200).send({
                                jwt: jwt.createToken(user_data),
                                user: user_data, 
                                message: 'Este usuario aún no tiene un token'
                            });
                        }
                    }

                })

            }
        }

    })
}

userController.activar_estado = async(req,res)=>{
    var id = req.params['id'];

    await User.findByIdAndUpdate(id,{estado:true},(err,user_update) =>{
        if (err) {
            res.status(500).send({message:"Error en el servidor"});
        } else {
            if(user_update){
                res.status(200).send({user: user_update});
            }else{
                res.status(500).send({message:"Usuario no encontrado"});
            }
        }

    })
}

userController.desactivar_estado= async(req,res)=>{
    var id = req.params['id'];

    await User.findByIdAndUpdate(id,{estado:false},(err,user_update) =>{
        if (err) {
            res.status(500).send({message:"Error en el servidor"});
        } else {
            if (user_update) {
                res.status(200).send({user: user_update}); 
            } else {
                res.status(500).send({message:"Usuario no encontrado"});
            }
        }

    })
}

module.exports = userController;