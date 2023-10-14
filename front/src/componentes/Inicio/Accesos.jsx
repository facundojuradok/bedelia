import React from 'react';
import extension from '../../img/acciones-de-extension-DDHH-800x450.jpg';
import becas from '../../img/becas-IV-nivel-800x450.jpg';

function Accesos(){
    return(
        <div className="seccion_utilidades">
        <div className="utilidades__columna-izquierda">
          <div className="utilidades__icono">
            <i className="fas fa-link"></i>
            <h3 className="utilidades__titulo">Enlaces útiles</h3>
          </div>
          <ul className="utilidades__enlaces">
            <li><a href="https://g3autogestion.uner.edu.ar/g3w3/acceso">SUI GUARANÍ</a></li>
            <li><a href="https://campus.uner.edu.ar/fcad/course/index.php">Campus Virtual</a></li>
            <li><a href="https://www.fcad.uner.edu.ar/institucional/plan-estrategico-2017-2054/">PLAN ESTRATEGICO 2017-2054</a></li>
            <li><a href="http://digesto.uner.edu.ar/">Digesto Online</a></li>
            <li><a href="http://mail.uner.edu.ar/">Correo Institucional</a></li>
            <li><a href="https://www.fcad.uner.edu.ar/biblioteca/">Biblioteca Digital</a></li>
            <li><a href="https://www.fcad.uner.edu.ar/area-educacion-a-distancia/">Area de educación a distancia</a></li>
            <li><a href="facultad.html">Conocé la facultad</a></li>
            <li><a href="https://www.fcad.uner.edu.ar/concursos-docentes/">Concursos docentes</a></li>
          </ul>
        </div>
        <div className="blog__columna">
          <h3 className="blog_columna__titulo">Novedades</h3>
          <div className="blog_container">
            <article className="blog__articulo">
              <img src={extension} alt="Acciones de Extensión" className="seccion__imagen" />
              <div className="blog__info-articulo">
                <h4 className="blog__titulo-articulo">ACCIONES DE EXTENSIÓN UNIVERSITARIA CON PERSPECTIVA DE DERECHOS HUMANOS 2023.</h4>
                <p className="blog__descripcion-articulo">Se encuentra abierta la Convocatoria a Acciones de Extensión Universitaria con perspectiva de Derechos Humanos, en el marco de la Ordenanza 447, para presentar acciones coordinadas por docentes, personal administrativo y de servicios (PAyS) y estudiantes</p>
              </div>
            </article>
            <article className="blog__articulo">
              <img src={becas} alt="Becas" className="seccion__imagen" />
              <div className="blog__info-articulo">
                <h4 className="blog__titulo-articulo">PRIMERA CONVOCATORIA 2023 PARA BECAS DE CUARTO NIVEL.</h4>
                <p className="blog__descripcion-articulo">Se encuentra abierta la primera convocatoria 2023 para Becas de Cuarto Nivel destinadas al cursado de carreras de postgrado (especialización, maestría y doctorado) acreditadas ante CONEAU y que se dicten en el país. Tienen una duración de 12 meses y pueden ser iniciales o de renovación</p>
              </div>
            </article>
            <a href="#" className="blog__enlace-blog">Visitar blog</a>
          </div>
        </div>
      </div>
    );
}

export default Accesos;