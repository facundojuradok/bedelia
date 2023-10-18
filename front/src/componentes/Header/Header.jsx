import React, { useEffect } from 'react';
import '../../App.css';
import Logo from './Logo'
import Menu from './Menu'

function Header() {
    useEffect(() => {
      const menuMobile = document.querySelector(".menuMobile");
      const navMenu = document.querySelector("nav .menu");
  
      menuMobile.addEventListener("click", () => {
        navMenu.classList.toggle("menu-mobile_activo");
      });
    }, []);
  
    return (
      <header className="header">
        <div className="contenedor-header">
          <div className="informacion_header clearfix">
            <p><i className="fas fa-map-marker"></i> Monseñor Tavella 1424. Concordia. CP(3200)</p>
            <p><i className="fas fa-envelope"></i> informes.fcad@uner.edu.ar</p>
          </div>
          <div className="informacion_header_derecha">
            <a href="https://www.facebook.com/Fac.Cs.Administracion" target="_blank"><i className="fab fa-facebook"></i></a>
            <a href="https://www.instagram.com/fcad.uner/" target="_blank"><i className="fab fa-instagram"></i></a>
            <a href="https://www.youtube.com/channel/UCH07uX8PpyI1-ee24xb2iJQ" target="_blank"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
        <div className="barra-navegacion">
          <div className="barra-izquierda">
            <Logo />
            <form>
              <input className="buscador" type="text" value="" placeholder=" Busca tu carrera..." />
            </form>
          </div>
          <Menu />
        </div>
      </header>
    );
  }
  
  export default Header;