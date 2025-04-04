:: Crear estructura de directorios
mkdir proyectos_pia
mkdir proyectos_pia\server
mkdir proyectos_pia\server\config
mkdir proyectos_pia\server\models
mkdir proyectos_pia\server\repositories
mkdir proyectos_pia\server\routes
mkdir proyectos_pia\server\migrations
mkdir proyectos_pia\client
mkdir proyectos_pia\client\css
mkdir proyectos_pia\client\js

:: Crear archivos
type nul > proyectos_pia\server\config\database.js
type nul > proyectos_pia\server\models\Tipo-proyecto.js
type nul > proyectos_pia\server\repositories\tipo-proyecto.js
type nul > proyectos_pia\server\routes\tipo-proyecto.js
type nul > proyectos_pia\server\server.js
type nul > proyectos_pia\server\migrations\001-create-tipo-proyecto.sql
type nul > proyectos_pia\client\index.html
type nul > proyectos_pia\client\css\styles.css
type nul > proyectos_pia\client\js\app.js
type nul > proyectos_pia\client\package.json