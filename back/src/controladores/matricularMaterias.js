const { asignarMateriaAEstudiante, obtenerMateriasEstudiante } = require('../baseDatos/matricularMaterias');

// Controlador para asignar una materia a un estudiante
const asignarMateriaEstudianteController = async (req, res) => {
    try {
        const { idMateria, idEstudiante } = req.body;

        const resultado = await asignarMateriaAEstudiante(idMateria, idEstudiante);

        res.status(200).json({ message: 'Materia asignada con éxito', resultado });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


module.exports = {
    asignarMateriaEstudianteController,
    
};