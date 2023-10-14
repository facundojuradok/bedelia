import React from 'react';
import { Routes, Route, BrowserRouter, useLocation } from 'react-router-dom';
import UserProvider from './context/UserContext';

import Header from './componentes/Header/Header';
import Footer from './componentes/Footer/Footer';
import Inicio from './componentes/Inicio/Inicio';
import Institucional from './componentes/Institucional/Institucional';
import Noticias from './componentes/Noticias/Noticias';
import Contacto from './componentes/Contacto/Contacto';
import Carreras from './componentes/Carreras/Carreras';
import Login from './componentes/Login/Login'
import Registro from './componentes/Registro/Registro';
import Estudiante from './componentes/Estudiantes/Estudiante';
import CarreraMateria from './componentes/CarrerasMaterias/CarrerasMaterias';
import Matricular from './componentes/Matricular/Matricular';
import FiltradoEstudiantes from './componentes/inscriptos/filtrado-estudiantes';
import Bedelia from './componentes/Bedelia/Bedelia';
import RutaPrivada from './componentes/RutaPrivada/RutaPrivada';

import './App.css';


function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/institucional" element={<Institucional />} />
          <Route path="/carreras" element={<Carreras />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          <Route element={<RutaPrivada />}>
              <Route path="/estudiante" element={<Estudiante />} />
              <Route path="/carreramateria" element={<CarreraMateria />} />
              <Route path="/matricular" element={<Matricular />} />
              <Route path="/filtradoestudiantes" element={<FiltradoEstudiantes />} />
              <Route path="/bedelia" element={<Bedelia />} />
              </Route>
        </Routes>
        <Footer />
        <ChangeTitleOnRouteChange />
      </UserProvider>
    </BrowserRouter>
  );
}

function ChangeTitleOnRouteChange() {
  const location = useLocation();

  React.useEffect(() => {
    const titleMappings = {
      '/': 'Inicio',
      '/institucional': 'Institucional',
      '/carreras': 'Carreras',
      '/noticias': 'Noticias',
      '/contacto': 'Contacto',
      '/estudiante': 'Estudiante',
      '/carreramateria': 'CarreraMateria',
      '/inscripcionestudiantes': 'InscripcioneEstudiantes',
      '/filtradoestudiantes': 'FiltradoEstudiantes',
    };

    const pageTitle = titleMappings[location.pathname] || 'React App';
    document.title = pageTitle;
  }, [location]);

  return null;
}

export default App;
