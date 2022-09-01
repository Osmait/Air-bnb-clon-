import React from "react";
import destino1 from "../assets/img/icono_destino_1.png";
import destino2 from "../assets/img/icono_destino_2.png";
import destino3 from "../assets/img/icono_destino_3.png";
import destino4 from "../assets/img/icono_destino_4.png";
import destino5 from "../assets/img/icono_destino_5.png";
import destino6 from "../assets/img/icono_destino_6.png";
import destino7 from "../assets/img/icono_destino_7.png";
import destino8 from "../assets/img/icono_destino_8.png";

export const Descubre = () => {
  return (
    <section className="destinos contenedor seccion">
      <h2 className="destinos__heading">Descubre alojamientos Populares</h2>

      <ul className="destinos__grid">
        <li className="destino">
          <div className="destino__imagen">
            <img src={destino1} alt="destino1" />
          </div>
          <div className="destino__informacion">
                <h3 className="destino__nombre">New York</h3>
                <p className="destino__distancia">4 horas en avión</p>
          </div>
        </li>
        <li className="destino">
          <div className="destino__imagen">
            <img src={destino2} alt="destino2" />
          </div>
          <div className="destino__informacion">
                <h3 className="destino__nombre">Paris</h3>
                <p className="destino__distancia">4 horas en avión</p>
          </div>
        </li>
        <li className="destino">
          <div className="destino__imagen">
            <img src={destino3} alt="destino3" />
          </div>
          <div className="destino__informacion">
                <h3 className="destino__nombre">San Francisco</h3>
                <p className="destino__distancia">4 horas en avión</p>
          </div>
        </li>
        <li className="destino">
          <div className="destino__imagen">
            <img src={destino4} alt="destino4" />
          </div>
          <div className="destino__informacion">
                <h3 className="destino__nombre">Egipto</h3>
                <p className="destino__distancia">4 horas en avión</p>
          </div>
        </li>
        <li className="destino">
          <div className="destino__imagen">
            <img src={destino5} alt="destino5" />
          </div>
          <div className="destino__informacion">
                <h3 className="destino__nombre">Londres</h3>
                <p className="destino__distancia">4 horas en avión</p>
          </div>
        </li>
        <li className="destino">
          <div className="destino__imagen">
            <img src={destino6} alt="destino6" />
          </div>
          <div className="destino__informacion">
                <h3 className="destino__nombre">Italia</h3>
                <p className="destino__distancia">4 horas en avión</p>
          </div>
        </li>
        <li className="destino">
          <div className="destino__imagen">
            <img src={destino7} alt="destino7" />
          </div>
          <div className="destino__informacion">
                <h3 className="destino__nombre">India</h3>
                <p className="destino__distancia">4 horas en avión</p>
          </div>
        </li>
        <li className="destino">
          <div className="destino__imagen">
            <img src={destino8} alt="destino8" />
          </div>
          <div className="destino__informacion">
                <h3 className="destino__nombre">Grecia</h3>
                <p className="destino__distancia">4 horas en avión</p>
          </div>
        </li>
      </ul>
    </section>
  );
};
