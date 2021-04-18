//El controlador es la parte que permite administrar (CRUD) los modelos
//Acá se definen los métodos del API que serán usados en las rutas.
const ecustomerController = {} //un objeto que contendrá un listado de métodos
const Customer = require('../models/Customer'); //Importamos el modelo de datos para los empleados

/*
Existen tres formas de esperar respuestas a peticiones de forma asíncrona para no depender de la respuesta, así continúa la ejecución del programa:
    - CallBack a través de funcion(res,error){} : Requiere codigo anidado genera Pyramid of Doom, o Callback hell.
    - Promesas a través de .then() y .catch() : Retorna como resultado "provisional" una Promise, que es un objeto que contendrá en el futuro el resultado, eventualmente tambièn tendrà comportaiento similar a Callback
    - Async / Await : simula ser una estructura sincrona pero con las bondades de la asincronicidad.
*/

//Get all Customers
ecustomerController.getAllCustomer = async(req, res) => {
        const customers = await Customer.aggregate([    //.find() //Trae todos los objetos de la coleccion Customer             
            {"$project": {
                  "_id": 1,
                  "firstName":1,
                  "lastName":1,
                  "birthDate": {
                     "$dateToString": {
                        "format": "%Y-%m-%d",
                        "date": "$birthDate"
                     }
                  },
                 "phone":1,
                 "email":1,
                 "message":1,
                 "createdAt":1,
                 "isShown":1
               }
            }
         ]).sort( { "createdAt": -1 } )
        res.json(customers)
        console.log("All ciustomer retrieved")
    }


//Search pubilsh messages
ecustomerController.getPublishMsg= async(req, res) => {
    const customers = await Customer.aggregate([ 
        {$match :{"isShown":true}},
        {"$project": {
              "_id": 1,
              "firstName":1,
              "lastName":1,
             "message":1,
             "createdAt":1,
             "isShown":1
           }
        }
     ]).sort( { "createdAt": -1 } )
    res.json(customers)
    console.log("All ciustomer retrieved")
}

//Add a new customer
ecustomerController.createCustomer= async(req, res) => {
        const newCustomer = new Customer(req.body) //Crea un objeto del tipo Customer basado en el json que se recibe
        console.log(newCustomer)
        await newCustomer.save() //Almacena el empleado nuevo en la base de datos
        var id = newCustomer._id;
        res.send({ message: "New customer created",id:id })
    }
//Get just one customer
ecustomerController.getCustomer = async(req, res) => {
        console.log(req.params)
        const result = await Customer.findOne({ _id: req.params.id }) //Customer.findById(req.params.id)//otra forma
        res.send(result) //devuelve el empleado encontrado
    }
//Update (edit) an Customer
ecustomerController.editCustomer= async(req, res) => {
    await Customer.findByIdAndUpdate(req.params.id, req.body); //Actualizar el id
    res.json({ status: "Customer updated" })
}

//Delete customer by Id
ecustomerController.deleteCustomer = async(req, res) => {
    await Customer.findByIdAndDelete(req.params.id)
    res.json({ status: "Customer Deleted" })
}

module.exports = ecustomerController; //Se exporta el objeto que contine todos los métodos