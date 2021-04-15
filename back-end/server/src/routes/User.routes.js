const { Router } = require("express"); 
const router = Router();
const userController = require("../controllers/User.controller"); 

//prefix route: /api/offices/
router.post("/registrar/", userController.registrar); 
router.post("/login/", userController.login); 

module.exports = router;