import { useState, useEffect } from 'react'
import './Productos.css'
import productosData from '../../data/productos.json'

const Productos = () => {
  const [productos, setProductos] = useState([])
  const [selectedImage, setSelectedImage] = useState(null)

  useEffect(() => {
    // Simular carga de datos (en el futuro vendrá del backend)
    setProductos(productosData)
  }, [])

  const handleImageClick = (producto) => {
    setSelectedImage(producto)
  }

  const closeImageModal = () => {
    setSelectedImage(null)
  }

  return (
    <div className="productos-page">
      <section className="productos-header">
        <div className="container">
          <h1 className="page-title">Nuestros Productos</h1>
          <p className="page-subtitle">
            Descubre nuestra variedad de mermeladas artesanales, cada una con un sabor único
          </p>
        </div>
      </section>

      <section className="productos-section">
        <div className="container">
          {productos.length === 0 ? (
            <div className="no-products">
              <p>Cargando productos...</p>
            </div>
          ) : (
            <div className="productos-grid">
              {productos.map((producto) => (
                <div key={producto.id} className="producto-card">
                  <div 
                    className="producto-image"
                    onClick={() => handleImageClick(producto)}
                  >
                    <div className="producto-image-placeholder">
                      {producto.emoji || '🍯'}
                    </div>
                    <div className="image-overlay">
                      <span className="zoom-icon">🔍</span>
                    </div>
                  </div>
                  <div className="producto-info">
                    <h3 className="producto-nombre">{producto.nombre}</h3>
                    <p className="producto-descripcion">{producto.descripcion}</p>
                    {producto.ingredientes && (
                      <div className="producto-ingredientes">
                        <strong>Ingredientes:</strong> {producto.ingredientes}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {selectedImage && (
        <>
          <div className="image-modal-overlay" onClick={closeImageModal}></div>
          <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="image-modal-close" onClick={closeImageModal}>×</button>
            <div className="image-modal-image">
              <div className="image-modal-placeholder">
                {selectedImage.emoji || '🍯'}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Productos

