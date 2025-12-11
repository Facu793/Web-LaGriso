# Guía de Instalación Rápida

## Requisitos Previos
- Node.js (versión 16 o superior)
- npm o yarn

## Pasos de Instalación

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Ejecutar en modo desarrollo:**
   ```bash
   npm run dev
   ```
   El servidor se iniciará en `http://localhost:3000`

3. **Compilar para producción:**
   ```bash
   npm run build
   ```
   Los archivos compilados se generarán en la carpeta `dist/`

## Configuración Inicial

### WhatsApp
Editar `src/pages/Contacto/Contacto.jsx` línea 5:
```javascript
const whatsappNumber = '5491234567890' // Reemplazar con tu número real
```

### Instagram
Editar `src/pages/Contacto/Contacto.jsx` línea 9:
```javascript
const instagramUrl = 'https://www.instagram.com/lagriso_mermeladas' // Reemplazar con tu usuario real
```

### Productos
Los productos se pueden editar en `src/data/productos.json`

## Estructura de Productos en JSON

Cada producto debe tener la siguiente estructura:
```json
{
  "id": 1,
  "nombre": "Nombre del Producto",
  "descripcion": "Descripción del producto",
  "ingredientes": "Ingrediente1, Ingrediente2, Ingrediente3",
  "emoji": "🍓"
}
```

## Notas

- El banner en la página de inicio usa un gradiente de colores. Puedes reemplazarlo con una imagen real editando `src/pages/Home/Home.css`
- Los colores principales se pueden modificar en `src/styles/index.css` mediante las variables CSS
- La estructura está preparada para integrarse fácilmente con un backend futuro

