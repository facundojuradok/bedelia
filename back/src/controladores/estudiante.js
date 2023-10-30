const estudianteBD = require('../baseDatos/estudianteBD');

buscarPorId = async(req, res) => {
    try{
        const idEstudiante = req.params.idEstudiante;   
        
        if(!idEstudiante) {
            res.status(404).json({estado:'FALLO', msj:'Falta el id'});
        }

        const estudiante = await estudianteBD.buscarPorId(idEstudiante);

        res.json({estado:'OK', dato:estudiante});

    }catch (exec){
        throw exec;
    }
}

buscarTodos = async(req, res) => {
    try{
        
        const estudiantes = await estudianteBD.buscarTodos();

        res.json({estado:'OK', dato:estudiantes});

    }catch (exec){
        throw exec;
    }
}

eliminar = async (req, res) => {
    try{
        const idEstudiante = req.params.idEstudiante;   
        
        if(!idEstudiante) {
            res.status(404).json({estado:'FALLO', msj:'Especifica el ID del estudiante que queres eliminar'});
        }else{
            try{
                await estudianteBD.eliminar(idEstudiante);
                res.json({estado:'OK', msj:'Estudiante eliminado'});
            }catch(error){
                console.log(error)
            }
        }

    }catch (exec){
        throw exec;
    }
}

crear = async (req, res) => {

    const {dni, nombre, apellido, fechaNacimiento, nacionalidad, correoElectronico, celular, foto} = req.body;
    console.log('Datos recibidos en req.body:', req.body);

    if(!dni || !nombre || !apellido || !nacionalidad || !correoElectronico){
        res.status(404).json({estado:'FALLA', msj:'Faltan datos obligatorios'});
    }else{
        const estudiante = {
            dni: dni, 
            nombre: nombre, 
            apellido: apellido, 
            fechaNacimiento: fechaNacimiento, 
            nacionalidad: nacionalidad, 
            correoElectronico: correoElectronico, 
            celular: celular, 
            foto: foto
        }; 


        try{
            const estudianteNuevo = await estudianteBD.nuevo(estudiante);
            res.status(201).json({estado:'ok', msj:'Estudiante creado', dato:estudianteNuevo});
        }catch(exec){
            throw exec;
        }
    }
};


actualizar = async (req, res) => {
    try {
        const idEstudiante = req.params.idEstudiante;
        const { dni, nombre, apellido, fechaNacimiento, nacionalidad, correoElectronico, celular, foto } = req.body;

        console.log("ID del estudiante:", idEstudiante);
        console.log("Datos recibidos:", req.body);

        if (!idEstudiante) {
            res.status(404).json({ estado: 'FALLO', msj: 'Falta el id del estudiante que quieres actualizar' });
        } else if (!dni || !nombre || !apellido || !nacionalidad || !correoElectronico || !celular) {
            res.status(400).json({ estado: 'FALLO', msj: 'Falta algun dato necesario para actualizar' });
        } else {
            const estudianteActualizado = {
                dni: dni,
                nombre: nombre,
                apellido: apellido,
                fechaNacimiento: fechaNacimiento,
                nacionalidad: nacionalidad,
                correoElectronico: correoElectronico,
                celular: celular,
                foto: foto
            };

            try {
                await estudianteBD.actualizar(idEstudiante, estudianteActualizado);
                res.json({ estado: 'OK', msj: 'Estudiante actualizado exitosamente', dato: estudianteActualizado });
            } catch (error) {
                console.error(error);
                res.status(500).json({ estado: 'FALLO', msj: 'Error al intentar actualizar el estudiante' });
            }
        }

    } catch (exec) {
        console.error(exec);
        res.status(500).json({ estado: 'FALLO', msj: 'Error interno del servidor' });
    }
};

const obtenerCarrerasEstudianteController = async (req, res) => {
    try {
        const idEstudiante = req.params.idEstudiante;

        const carreras = await obtenerCarrerasEstudiante(idEstudiante);

        res.status(200).json({ carreras });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


// Controlador para obtener las materias de un estudiante
const obtenerMateriasEstudianteController = async (req, res) => {
    try {
        const idEstudiante = req.params.idEstudiante;

        const materias = await obtenerMateriasEstudiante(idEstudiante);

        res.status(200).json({ materias });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


module.exports = {
    buscarPorId,
    buscarTodos,
    eliminar,
    crear,
    actualizar,
    obtenerCarrerasEstudianteController,
    obtenerMateriasEstudianteController,
}