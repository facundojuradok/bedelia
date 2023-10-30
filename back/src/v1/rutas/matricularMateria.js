const {Router} = require('express');

const {asignarMateriaEstudianteController} = require('../../controladores/matricularMaterias');


const router = Router();

router.post("/", asignarMateriaEstudianteController)

module.exports = router;