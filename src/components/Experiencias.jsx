import experiencia1 from '../assets/img/experiencia_1.jpg'
import experiencia2 from '../assets/img/experiencia_2.jpg'
import experiencia3 from '../assets/img/experiencia_3.jpg'


export const Experiencias = () => {
  return (
    <main className='experiencias contenedor seccion '>
        <h2 className='experiencias__heading'>Descubre Expreriencias </h2>
        <p className="experiencias__descripcion"> Actividades únicas con expertis locales, en perdona o en línea.</p>

        <div className='experiencias__listado'>
            <div className="experiencia">
                <img className='experiencia_imagen ' src={experiencia1} alt="experiencia1" />
                <p className='experiencia__titulo'>Experiencias</p>
                <p className="experiencia__descripcion">Actividades locales estés donde estés.</p>
            </div>

            <div className="experiencia">
                <img className='experiencia_imagen ' src={experiencia2} alt="experiencia2" />
                <p className='experiencia__titulo'>Experiencias</p>
                <p className="experiencia__descripcion">Visita una ciudad y vive en ella </p>
            </div>

            <div className="experiencia">
                <img className='experiencia_imagen ' src={experiencia3} alt="experiencia3" />
                <p className='experiencia__titulo'>Experiencias en línea</p>
                <p className="experiencia__descripcion">Actividades interactivas en vivo</p>
            </div>
        </div>
    </main>
  )
}
