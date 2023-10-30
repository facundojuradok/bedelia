const {Router} = require('express');


const {matricularCarreraController } = require('../../controladores/matricularCarreras');

const router = Router();

router.post("/", matricularCarreraController)

module.exports = router;