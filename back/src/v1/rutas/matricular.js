const { Router } = require('express');
const { matricularControlador } = require('../../controladores/matricular');

const matricularRouter = Router();

matricularRouter.post("/", matricularControlador)

module.exports = matricularRouter
