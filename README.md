# La Griso - Mermeladas Artesanales

Sitio web estático desarrollado en React con Vite para la empresa La Griso, especializada en mermeladas artesanales.

## 🚀 Características

- **React 18** con **Vite** para desarrollo rápido
- **React Router** para navegación entre páginas
- Diseño **responsive** y moderno
- Estructura modular y escalable
- Preparado para integración futura con backend Java + Spring Boot y MySQL

## 📁 Estructura del Proyecto

```
lagriso-mermeladas/
├── src/
│   ├── components/          # Componentes reutilizables
│   │   └── Layout/         # Layout principal con header y footer
│   ├── pages/              # Páginas principales
│   │   ├── Home/           # Página de inicio
│   │   ├── Productos/      # Página de productos
│   │   └── Contacto/       # Página de contacto
│   ├── data/               # Datos estáticos (JSON)
│   │   └── productos.json  # Lista de productos
│   ├── styles/             # Estilos globales
│   │   └── index.css
│   ├── App.jsx             # Componente principal con rutas
│   └── main.jsx            # Punto de entrada
├── public/                 # Archivos estáticos públicos
├── index.html              # HTML principal
├── vite.config.js          # Configuración de Vite
└── package.json            # Dependencias del proyecto
```

## 🛠️ Instalación

1. Instalar dependencias:
```bash
npm install
```

2. Ejecutar en modo desarrollo:
```bash
npm run dev
```

3. Compilar para producción:
```bash
npm run build
```

4. Previsualizar build de producción:
```bash
npm run preview
```

## 📄 Páginas

### Inicio (/)
- Banner destacado
- Texto institucional sobre la empresa
- Sección de características principales

### Productos (/productos)
- Lista dinámica de productos cargada desde JSON
- Cada producto muestra:
  - Nombre
  - Descripción
  - Ingredientes
  - Imagen/emoji representativo

### Contacto (/contacto)
- Botón de contacto por WhatsApp
- Enlace a Instagram
- Información de horarios

## 🔧 Configuración

### WhatsApp
Editar el número de WhatsApp en `src/pages/Contacto/Contacto.jsx`:
```javascript
const whatsappNumber = '5491234567890' // Reemplazar con número real
```

### Instagram
Editar la URL de Instagram en `src/pages/Contacto/Contacto.jsx`:
```javascript
const instagramUrl = 'https://www.instagram.com/lagriso_mermeladas' // Reemplazar con usuario real
```

### Productos
Los productos se encuentran en `src/data/productos.json`. Puedes agregar, modificar o eliminar productos editando este archivo.

## 🔮 Preparación para Backend

La estructura está diseñada para facilitar la integración futura:

- Los productos se cargan desde JSON local, pero la estructura permite fácil migración a llamadas API
- Componentes modulares y separación de responsabilidades
- Estructura de datos consistente que puede mapearse fácilmente a entidades de base de datos

### Próximos pasos para integración:
1. Crear servicios API en `src/services/` para comunicarse con el backend
2. Reemplazar la carga de JSON por llamadas HTTP (fetch/axios)
3. Implementar manejo de estados globales si es necesario (Context API, Redux, etc.)
4. Agregar manejo de errores y estados de carga

## 🎨 Personalización

Los colores principales se pueden modificar en `src/styles/index.css` mediante variables CSS:
- `--primary-color`: Color principal (#8B4513)
- `--secondary-color`: Color secundario (#A0522D)

## 📱 Responsive

El sitio está completamente optimizado para dispositivos móviles, tablets y escritorio.

## 📝 Licencia

Este proyecto es privado y propiedad de La Griso.

