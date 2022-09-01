import vive1 from "../assets/img/vive_1.jpg";
import vive2 from "../assets/img/vive_2.jpg";
import vive3 from "../assets/img/vive_3.jpg";
import vive4 from "../assets/img/vive_4.jpg";

export const Vive = () => {
  return (
    <section className="lugares contenedor seccion">
      <h2 className="lugares__heading">Vive en Cualquier Lugar del mundo</h2>

      <div className="lugares__grid">
        <div className="lugares">
          <img  className="lugares__imagen" src={vive1} alt="imagen vive1" />
          <p className="lugares__nombre">Escapadas al aire libre</p>
        </div>

        <div className="lugares">
          <img className="lugares__imagen" src={vive2} alt="imagen vive2" />
          <p className="lugares__nombre">Alojamientos únicos</p>
        </div>

        <div className="lugares">
          <img className="lugares__imagen" src={vive3} alt="imagen vive3" />
          <p className="lugares__nombre">Alojamientos enteros</p>
        </div>

        <div className="lugares">
          <img className="lugares__imagen" src={vive4} alt="imagen vive4" />
          <p className="lugares__nombre">Con tu mascota </p>
        </div>
      </div>
    </section>
  );
};
