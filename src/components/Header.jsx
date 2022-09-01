import React from "react";

export const Header = () => {
  return (
    <header className="header">
      <div className="barra contenedor">
        <div className="barra__logo">
          <p className="barra__nombre">Viaje</p>
        </div>
        <nav className="barra__navegacion">
          <a className="barra__link" href="#">Lugares para Hospedarte</a>
          <a className="barra__link" href="#">Experiencias</a>
          <a className="barra__link" href="#">Expreciencias en Linea</a>
        </nav>

        <nav className="barra__login">
          <a className="barra__link" href="#">Hazte Anfitrión</a>
        </nav>
      </div>

      <form className="formulario contenedor">
        <div className="formulario__campo">
          <label className="formulario__label" htmlFor="ubicacion">
            Ubicación
          </label>
          <input
            type={"text"}
            className="formulario__input"
            id="ubicacion"
            placeholder="A donde Viajas?"
          />
        </div>

        <div className="formulario__campo">
          <label className="formulario__label" htmlFor="llegada">
            Llegada
          </label>
          <input type={"date"} className="formulario__input" id="llegada" />
        </div>

        <div className="formulario__campo">
          <label className="formulario__label" htmlFor="salida">
            Salida
          </label>
          <input type={"date"} className="formulario__input" id="salida" />
        </div>

        <div className="formulario__campo">
          <label className="formulario__label" htmlFor="huespedes">
            Huéspedes
          </label>
          <input
            type={"number"}
            className="formulario__input"
            id="huespedes"
            placeholder="Cuantos?"
          />
        </div>

        <div className="formulario__campo">
          <input
            type={"submit"}
            className="formulario__submit"
            value={"Buscar"}
          />
        </div>
      </form>

      <div className="header__busqueda contenedor">
        <p className="header__busqueda-label">No sabes a donde ir?</p>
        <a href="#" className="header__busqueda-boton">Búsqueda Flexible</a>
      </div>
    </header>
  );
};
