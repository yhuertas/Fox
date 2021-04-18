//Las rutas (URL) son los puntos de contacto con quien necesite usar el API.
const { Router } = require("express"); //Se usa acá para crear las rutas del servidor
const router = Router();
const customerControler = require("../controllers/customer.controler"); //Importando las funciones o métodos que se crearon en el controlador

//Acá vamos a crear las rutas para el CRUD para los empleados
//prefix route: /api/customers/
router.get("/", customerControler.getAllCustomer); //GET: Obtener o recuperar todos los documentos
router.get("/publish/", customerControler.getPublishMsg); //GET: Obtener o recuperar todos los documentos
router.post("/", customerControler.createCustomer); //POST: Enviar Datos (para ser guardados)
router.get("/:id", customerControler.getCustomer); //Pasando un ID como parámetro al enviar una petición de consulta para un solo documento
router.put("/:id", customerControler.editCustomer); //PUT: Actualizar Datos de un documento
router.delete("/:id", customerControler.deleteCustomer); //:DELETE: Borrar un documento

module.exports = router; //se exportan las rutas definidas