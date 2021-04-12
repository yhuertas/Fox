const { Router } = require("express"); 
const router = Router();
const scheduleController = require("../controllers/schedule.controller"); 

//prefix route: /api/offices/
router.get("/", scheduleController.getAllSchedules); //GET: Obtener o recuperar todos los documentos
router.post("/", scheduleController.createSchedule); //POST: Enviar Datos (para ser guardados)
router.get("/:id", scheduleController.getSchedule); //Pasando un ID como parámetro al enviar una petición de consulta para un solo documento
router.put("/:id", scheduleController.editSchedule); //PUT: Actualizar Datos de un documento
router.delete("/:id", scheduleController.deleteSchedule); //:DELETE: Borrar un documento

module.exports = router;