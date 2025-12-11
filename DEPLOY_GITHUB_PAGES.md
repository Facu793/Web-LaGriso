# Guía de Despliegue en GitHub Pages

## Pasos para Desplegar

### 1. Instalar gh-pages
```bash
npm install --save-dev gh-pages
```

### 2. Configurar el nombre del repositorio

**IMPORTANTE**: Edita `vite.config.js` y cambia la línea:
```javascript
base: '/LaGriso/', // Cambia 'LaGriso' por el nombre real de tu repositorio
```

**Ejemplos:**
- Si tu repo se llama `LaGriso` → `base: '/LaGriso/'`
- Si tu repo se llama `lagriso-mermeladas` → `base: '/lagriso-mermeladas/'`
- Si tu usuario es `tuusuario` y el repo es `LaGriso` → `base: '/LaGriso/'`

### 3. Hacer el build
```bash
npm run build
```
Esto genera la carpeta `dist/` con los archivos optimizados para producción.

### 4. Desplegar a GitHub Pages
```bash
npm run deploy
```

Este comando:
1. Ejecuta `npm run build` automáticamente
2. Sube la carpeta `dist/` a la rama `gh-pages` de tu repositorio
3. GitHub Pages se activa automáticamente

### 5. Activar GitHub Pages en GitHub

1. Ve a tu repositorio en GitHub
2. Click en **Settings** (Configuración)
3. En el menú lateral, click en **Pages**
4. En **Source**, selecciona la rama `gh-pages` y la carpeta `/ (root)`
5. Click en **Save**

### 6. Acceder a tu sitio

Tu sitio estará disponible en:
```
https://TU_USUARIO.github.io/LaGriso/
```
*(Reemplaza TU_USUARIO y LaGriso con tus datos reales)*

---

## Proceso Completo (Resumen)

```bash
# 1. Instalar dependencias (si aún no lo hiciste)
npm install

# 2. Instalar gh-pages
npm install --save-dev gh-pages

# 3. Editar vite.config.js y cambiar el base path

# 4. Hacer commit de tus cambios
git add .
git commit -m "Preparar para deploy en GitHub Pages"

# 5. Subir cambios al repositorio
git push origin main

# 6. Desplegar
npm run deploy
```

---

## Actualizar el Sitio

Cada vez que hagas cambios y quieras actualizar el sitio:

```bash
# 1. Hacer commit de tus cambios
git add .
git commit -m "Descripción de los cambios"
git push origin main

# 2. Desplegar
npm run deploy
```

---

## Solución de Problemas

### Error: "gh-pages: command not found"
```bash
npm install --save-dev gh-pages
```

### El sitio no carga o muestra 404
- Verifica que el `base` en `vite.config.js` coincida con el nombre de tu repositorio
- Asegúrate de que GitHub Pages esté activado en Settings > Pages
- Espera unos minutos después del deploy (puede tardar hasta 10 minutos)

### Las rutas no funcionan (404 en /productos, /contacto)
- Esto es normal con React Router en GitHub Pages
- Necesitas configurar un archivo `404.html` que redirija a `index.html`
- O usar HashRouter en lugar de BrowserRouter (menos recomendado)

### Verificar que el deploy funcionó
```bash
# Ver las ramas remotas
git branch -r

# Deberías ver origin/gh-pages
```

---

## Notas Importantes

1. **Base Path**: El `base` en `vite.config.js` DEBE coincidir con el nombre de tu repositorio
2. **Rama gh-pages**: Se crea automáticamente, no la edites manualmente
3. **Tiempo de espera**: Puede tardar 1-10 minutos en estar disponible después del deploy
4. **HTTPS**: GitHub Pages siempre usa HTTPS (gratis y seguro)

---

## Alternativa: Deploy Manual

Si prefieres hacerlo manualmente:

1. `npm run build`
2. Crear una rama `gh-pages`
3. Copiar el contenido de `dist/` a la raíz de `gh-pages`
4. Hacer commit y push
5. Activar GitHub Pages en Settings

Pero es más fácil usar `npm run deploy` 😊

