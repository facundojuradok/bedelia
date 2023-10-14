import React from "react";
import "./HeaderBd.css";
import user from "../../img/user.png";
import { Link } from "react-router-dom"; 
import { useUser } from "../../context/UserContext";

const HeaderBedelia = () => {
  const [usuario, setUsuario] = React.useState({
    nombre: "Juan Pérez",
  });

  const {user: userData, logout} = useUser();

  return (
    <div className="headerBD">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link to="/bedelia" className="navbar-brand">
            Bedelia
          </Link>
          <div className="menu-BD">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/estudiante" className="nav-link">
                  Estudiante
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/carreramateria" activeClass="active" className="nav-link">
                  Carreras - Materias
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/matricular" className="nav-link">
                  Matricular
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/filtradoestudiantes" className="nav-link">
                  Filtrar Estudiantes
                </Link>
              </li>
            </ul>
          </div>
          <div className="user-box">
            <div className="user-bedelia">
              <img src={user} alt="Usuario" />
              <span>{userData}</span>
            </div>
            <button
              onClick={logout}
              type="button"
              className="btn btn-link"
            >
              Cerrar sesión
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default HeaderBedelia;

