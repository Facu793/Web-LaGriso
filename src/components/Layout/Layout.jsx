import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Layout.css'

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <div className="layout">
      <header className="header">
        <div className="container">
          <Link to="/" className="logo" onClick={closeMenu}>
            <h1>La Griso</h1>
            <p className="logo-subtitle">Mermeladas de alta calidad</p>
          </Link>
          <button 
            className="menu-toggle"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className={menuOpen ? 'hamburger open' : 'hamburger'}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
          {menuOpen && (
            <div className="menu-overlay" onClick={closeMenu}></div>
          )}
          <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
            <Link to="/" className="nav-link" onClick={closeMenu}>Inicio</Link>
            <Link to="/productos" className="nav-link" onClick={closeMenu}>Productos</Link>
            <Link to="/contacto" className="nav-link" onClick={closeMenu}>Contacto</Link>
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

