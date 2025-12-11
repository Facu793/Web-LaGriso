import { useState } from 'react'
import './Home.css'

const Home = () => {
  const [showMore, setShowMore] = useState(false)

  return (
    <div className="home">
      <section className="banner-section">
        <div className="banner-image">
          <div className="banner-overlay">
            <div className="banner-content">
              <h2>Sabores que Despiertan Recuerdos</h2>
              <p>Mermeladas artesanales hechas con amor y los mejores ingredientes naturales</p>
            </div>
          </div>
        </div>
      </section>

      <section className="intro-section">
        <div className="container">
          <div className="intro-content">
            <h2 className="section-title">Bienvenidos a La Griso</h2>
            <div className="intro-text">
              <p>
                Nuestra historia comienza en el año <strong>XXXX</strong>, cuando nuestro padre, con dedicación y esmero, 
                inició un proyecto que hoy se ha convertido en un verdadero legado familiar. Lo que empezó como un 
                sueño personal se transformó, con el paso del tiempo, en una tradición que sus hijos continuamos con 
                orgullo, compromiso y la misma pasión que él nos transmitió.
              </p>
              <p>
                Nuestras mermeladas se elaboran con frutas de alta calidad, siguiendo procesos cuidados y sin utilizar 
                aditivos químicos, manteniendo su esencia <strong>100% orgánica</strong>. Creemos en la pureza de los 
                ingredientes y en la importancia de ofrecer un producto natural, confiable y lleno de sabor auténtico.
              </p>
              <p>
                Cada frasco que producimos es una manera de honrar su historia y de compartir con ustedes lo que él nos 
                enseñó: que los mejores sabores nacen del tiempo, del esfuerzo y del amor por hacer las cosas bien. 
                Queremos que cada bocado sea un homenaje a la familia y una invitación a disfrutar de lo auténtico.
              </p>
            </div>
            <button 
              className="more-button"
              onClick={() => setShowMore(true)}
            >
              Más sobre nosotros
              <span className="arrow">▼</span>
            </button>
          </div>
        </div>
      </section>

      {showMore && (
        <>
          <div className="modal-overlay" onClick={() => setShowMore(false)}></div>
          <div className="modal-content">
            <button className="modal-close" onClick={() => setShowMore(false)}>×</button>
            <h2>Más sobre La Griso</h2>
            <div className="modal-text">
              <p>
                Trabajamos directamente con productores locales para asegurar la frescura 
                de nuestras materias primas. Nuestro proceso de elaboración sigue métodos 
                tradicionales que han sido perfeccionados a lo largo de los años, garantizando 
                un sabor auténtico y una textura perfecta en cada frasco.
              </p>
              <p>
                En La Griso, creemos que cada mermelada debe ser una experiencia única. 
                Por eso, nos esforzamos por crear combinaciones innovadoras que sorprendan 
                a tu paladar, mientras mantenemos la esencia de los sabores clásicos que 
                todos amamos.
              </p>
              <p>
                Nuestro compromiso con la sostenibilidad nos lleva a trabajar con envases 
                reciclables y a minimizar nuestro impacto ambiental. Cada frasco que producimos 
                es el resultado de un proceso cuidadoso que respeta tanto la naturaleza como 
                las tradiciones culinarias.
              </p>
              <p>
                La calidad es nuestra prioridad número uno. Por eso, cada lote pasa por 
                rigurosos controles de calidad para asegurar que solo los mejores productos 
                lleguen a tu mesa. Desde la selección de frutas hasta el envasado final, 
                cada paso es supervisado con atención al detalle.
              </p>
            </div>
          </div>
        </>
      )}

      <section className="features-section">
        <div className="container">
          <h2 className="section-title">¿Por qué elegirnos?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🍓</div>
              <h3>100% Natural</h3>
              <p>Ingredientes frescos sin conservantes ni aditivos artificiales</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">👨‍🍳</div>
              <h3>Artesanal</h3>
              <p>Elaboradas con técnicas tradicionales y mucho cuidado</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">❤️</div>
              <h3>Hecho con Amor</h3>
              <p>Cada frasco es preparado con dedicación y pasión</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

