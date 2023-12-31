const {Router} = require('express');

const { buscarPorId, buscarTodos, eliminar, crear, actualizar } = require('../../controladores/estudiante');

// const { actualizar } = require('../../baseDatos/estudianteBD');

const {obtenerCarrerasEstudianteController, obtenerMateriasEstudianteController} = require('../../controladores/estudiante');

const { autenticar } = require('../../middleware/autenticar');




const router = Router();


//agregar
router.post('/estudiantes', autenticar, crear);

// //eliminar
router.delete('/estudiantes/:idEstudiante', autenticar, eliminar);

// //actualizar
router.put('/estudiantes/:idEstudiante', autenticar, actualizar);

// //buscar
router.get('/estudiantes', autenticar, buscarTodos);

//buscarPorID
router.get('/estudiantes/:idEstudiante', autenticar, buscarPorId);

// Get Carreras que cursa un estudiante
router.get('/:idEstudiante/carreras', obtenerCarrerasEstudianteController)

// Get Materias que cursa un estudiante
router.get('/:idEstudiante/materias', obtenerMateriasEstudianteController)

module.exports = router;