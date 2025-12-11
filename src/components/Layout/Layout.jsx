import { Link } from 'react-router-dom'
import './Layout.css'

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <header className="header">
        <div className="container">
          <Link to="/" className="logo">
            <h1>La Griso</h1>
            <p>Mermeladas Artesanales</p>
          </Link>
          <nav className="nav">
            <Link to="/" className="nav-link">Inicio</Link>
            <Link to="/productos" className="nav-link">Productos</Link>
            <Link to="/contacto" className="nav-link">Contacto</Link>
          </nav>
        </div>
      </header>
      <main className="main-content">
        {children}
      </main>
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 La Griso - Mermeladas Artesanales. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

export default Layout

