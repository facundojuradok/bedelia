const conexion = require('./conexionBD');
const { buscarCarreraPorId } = require('./carrerasBD');
const {buscarMateriaPorId} = require('./materiaBD');

const obtenerMateriasCarrera = async (idCarrera) => {
    const consulta = `
    SELECT c.nombre AS nombreCarrera, m.nombre AS nombreMateria
    FROM carrera AS c
    JOIN carreramateria AS cm ON c.idCarrera = cm.idCarrera
    JOIN materia AS m ON cm.idMateria = m.idMateria
    WHERE c.idCarrera = ?
    
    `;
    const [resultados] = await conexion.query(consulta, idCarrera);

    const carreras =[]
    
    resultados.forEach(resultado => {
        const {nombreCarrera, nombreMateria} = resultado;
        const carrera = carreras.find((carrera) => carrera.nombre === nombreCarrera);

        if(!carrera) {
            carreras.push({nombre: nombreCarrera, materias: [nombreMateria]});
        }else{
            carrera.materias.push(nombreMateria);
        }
    })

    console.log(carreras);

    return carreras;
}


const asignarCarreraMateria = async (idMateria, idCarrera) => {
    const carrera = await buscarCarreraPorId(idCarrera);
    if (!carrera) throw new Error('No existe la carrera');
    const materia = await buscarMateriaPorId(idMateria);
    if(!materia) {
        throw new Error('No existe la materia');
    }
    const consulta = 'INSERT INTO carreramateria (idMateria, idCarrera) VALUES (?, ?)';
    const [resultado] = await conexion.query(consulta, [idMateria, idCarrera]);

    return resultado;
};

module.exports = {
    asignarCarreraMateria,
    obtenerMateriasCarrera
};

