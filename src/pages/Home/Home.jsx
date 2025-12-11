import './Home.css'

const Home = () => {
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
                En <strong>La Griso</strong>, nos dedicamos a crear mermeladas artesanales que 
                capturan la esencia de las frutas más frescas y naturales. Cada frasco es el 
                resultado de un proceso cuidadoso y tradicional, donde combinamos recetas 
                familiares con ingredientes de primera calidad.
              </p>
              <p>
                Nuestra pasión por la calidad se refleja en cada bocado. Utilizamos frutas 
                seleccionadas a mano, sin conservantes artificiales ni colorantes, para 
                ofrecerte un producto auténtico y delicioso que puedes disfrutar en cualquier 
                momento del día.
              </p>
              <p>
                Desde nuestros inicios, hemos mantenido el compromiso de elaborar mermeladas 
                que no solo endulzan tu paladar, sino que también despiertan emociones y 
                recuerdos especiales. Cada sabor cuenta una historia única, hecha con 
                dedicación y cariño.
              </p>
            </div>
          </div>
        </div>
      </section>

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

