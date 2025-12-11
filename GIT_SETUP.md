# Guía para Conectar el Repositorio Local con GitHub/GitLab

## Paso a Paso Completo

### Paso 1: Verificar si Git está instalado
```bash
git --version
```
Si no está instalado, descárgalo desde: https://git-scm.com/downloads

### Paso 2: Inicializar Git en tu proyecto (si aún no lo has hecho)
```bash
cd D:\Usuario\Desktop\Itec-Materias\Proyectos\LaGriso
git init
```

### Paso 3: Agregar todos los archivos al staging area
```bash
git add .
```

### Paso 4: Hacer tu primer commit
```bash
git commit -m "Initial commit: Estructura completa de La Griso - Mermeladas Artesanales"
```

### Paso 5: Crear un repositorio remoto

#### Opción A: En GitHub
1. Ve a https://github.com
2. Inicia sesión o crea una cuenta
3. Haz clic en el botón "+" (arriba a la derecha) → "New repository"
4. Nombre del repositorio: `LaGriso` (o el que prefieras)
5. Descripción: "Sitio web de mermeladas artesanales La Griso"
6. Elige si será público o privado
7. **NO** marques "Initialize this repository with a README" (ya tienes archivos locales)
8. Haz clic en "Create repository"

#### Opción B: En GitLab
1. Ve a https://gitlab.com
2. Inicia sesión o crea una cuenta
3. Haz clic en "New project" → "Create blank project"
4. Nombre del proyecto: `LaGriso`
5. Elige visibilidad (público/privado)
6. Haz clic en "Create project"

### Paso 6: Conectar tu repositorio local con el remoto

#### Si usas GitHub:
```bash
git remote add origin https://github.com/TU_USUARIO/LaGriso.git
```
*(Reemplaza `TU_USUARIO` con tu nombre de usuario de GitHub)*

#### Si usas GitLab:
```bash
git remote add origin https://gitlab.com/TU_USUARIO/LaGriso.git
```
*(Reemplaza `TU_USUARIO` con tu nombre de usuario de GitLab)*

### Paso 7: Verificar que el remote se agregó correctamente
```bash
git remote -v
```
Deberías ver algo como:
```
origin  https://github.com/TU_USUARIO/LaGriso.git (fetch)
origin  https://github.com/TU_USUARIO/LaGriso.git (push)
```

### Paso 8: Renombrar la rama principal a 'main' (si es necesario)
```bash
git branch -M main
```

### Paso 9: Subir tu código al repositorio remoto
```bash
git push -u origin main
```

Si es la primera vez, Git te pedirá autenticarte:
- **GitHub**: Usa un Personal Access Token (no tu contraseña)
  - Crea uno en: Settings → Developer settings → Personal access tokens → Tokens (classic)
  - Permisos necesarios: `repo`
- **GitLab**: Usa tu contraseña o un Personal Access Token

### Paso 10: Verificar que todo se subió correctamente
Ve a tu repositorio en GitHub/GitLab y verifica que todos los archivos estén ahí.

---

## Comandos Rápidos (Resumen)

```bash
# 1. Inicializar git
git init

# 2. Agregar archivos
git add .

# 3. Primer commit
git commit -m "Initial commit: Estructura completa de La Griso"

# 4. Agregar remote (reemplaza con tu URL)
git remote add origin https://github.com/TU_USUARIO/LaGriso.git

# 5. Renombrar rama
git branch -M main

# 6. Subir código
git push -u origin main
```

---

## Comandos Útiles para el Futuro

### Ver el estado de tus archivos
```bash
git status
```

### Agregar cambios específicos
```bash
git add nombre-del-archivo.jsx
```

### Hacer commit de cambios
```bash
git commit -m "Descripción de los cambios realizados"
```

### Subir cambios al remoto
```bash
git push
```

### Bajar cambios del remoto
```bash
git pull
```

### Ver el historial de commits
```bash
git log --oneline
```

---

## Solución de Problemas Comunes

### Error: "remote origin already exists"
Si ya existe un remote, puedes eliminarlo y agregarlo de nuevo:
```bash
git remote remove origin
git remote add origin https://github.com/TU_USUARIO/LaGriso.git
```

### Error: "failed to push some refs"
Si hay cambios en el remoto que no tienes localmente:
```bash
git pull origin main --allow-unrelated-histories
git push -u origin main
```

### Cambiar la URL del remote
```bash
git remote set-url origin https://github.com/NUEVO_USUARIO/NUEVO_REPO.git
```

---

## Autenticación con SSH (Opcional - Más Seguro)

Si prefieres usar SSH en lugar de HTTPS:

### 1. Generar clave SSH
```bash
ssh-keygen -t ed25519 -C "tu_email@ejemplo.com"
```

### 2. Copiar la clave pública
```bash
# Windows PowerShell
cat ~/.ssh/id_ed25519.pub | clip
```

### 3. Agregar la clave en GitHub/GitLab
- **GitHub**: Settings → SSH and GPG keys → New SSH key
- **GitLab**: Preferences → SSH Keys → Add SSH Key

### 4. Cambiar el remote a SSH
```bash
git remote set-url origin git@github.com:TU_USUARIO/LaGriso.git
```

---

## Notas Importantes

- El archivo `.gitignore` ya está configurado para ignorar `node_modules` y otros archivos innecesarios
- No subas archivos sensibles como `.env` con contraseñas o API keys
- Haz commits frecuentes con mensajes descriptivos
- Antes de hacer push, siempre verifica con `git status` qué archivos vas a subir

