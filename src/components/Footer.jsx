import React from "react";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__grid contenedor">
        <div className="footer__widget">
          <h3 className="footer__heading"> Acerca de</h3>
          <nav className="footer__menu">
            <a href="" className="footer__enlace">
              Enlace 1
            </a>
            <a href="" className="footer__enlace">
              Enlace 2
            </a>
            <a href="" className="footer__enlace">
              Enlace 3
            </a>
            <a href="" className="footer__enlace">
              Enlace 4
            </a>
          </nav>
        </div>

        <div className="footer__widget">
          <h3 className="footer__heading"> Comunidad</h3>
          <nav className="footer__menu">
            <a href="" className="footer__enlace">
              Enlace 1
            </a>
            <a href="" className="footer__enlace">
              Enlace 2
            </a>
            <a href="" className="footer__enlace">
              Enlace 3
            </a>
            <a href="" className="footer__enlace">
              Enlace 4
            </a>
          </nav>
        </div>

        <div className="footer__widget">
          <h3 className="footer__heading"> Anfitrión</h3>
          <nav className="footer__menu">
            <a href="" className="footer__enlace">
              Enlace 1
            </a>
            <a href="" className="footer__enlace">
              Enlace 2
            </a>
            <a href="" className="footer__enlace">
              Enlace 3
            </a>
            <a href="" className="footer__enlace">
              Enlace 4
            </a>
          </nav>
        </div>

        <div className="footer__widget">
          <h3 className="footer__heading"> Asistencia</h3>
          <nav className="footer__menu">
            <a href="" className="footer__enlace">
              Enlace 1
            </a>
            <a href="" className="footer__enlace">
              Enlace 2
            </a>
            <a href="" className="footer__enlace">
              Enlace 3
            </a>
            <a href="" className="footer__enlace">
              Enlace 4
            </a>
          </nav>
        </div>
      </div>

      <div className="footer__barra contenedor">
        <nav className="footer__barranav">
          <a href="#" className="footer__enlace footer__enlace--barra">
            Enlace Nuevo
          </a>
          <a href="#" className="footer__enlace footer__enlace--barra">
          Enlace Nuevo
          </a>{" "}
          <a href="#" className="footer__enlace footer__enlace--barra">
          Enlace Nuevo
          </a>{" "}
          <a href="#" className="footer__enlace footer__enlace--barra">
          Enlace Nuevo
          </a>
        </nav>
      </div>
    </footer>
  );
};
