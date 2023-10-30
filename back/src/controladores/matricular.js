const matricular = require('../baseDatos/matricular');

const matricularControlador = async (req, res) => {
    try {
        const {estudiante, carrera, materias} = req.body;
        const resultado = await matricularEstudiante(estudiante, carrera, materias);
        res.json(resultado);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    matricularControlador,
};