# RESTFull_API

API RESTful desarrollada con Express.js para gestionar usuarios, libros, préstamos y reseñas.

## Tecnologías

- Node.js + Express
- MySQL + Sequelize
- dotenv

## Estructura del proyecto

/config → conexión a DB
/controllers → lógica de negocio
/models → modelos Sequelize
/routes → rutas de la API
app.js → servidor principal
.env → variables de entorno


## Endpoints

- `/usuarios`
- `/libros`
- `/prestamos`
- `/resenias`

(Soporta GET, POST, PUT, DELETE)

## Uso

1. Clonar el repo  
2. `npm install`  
3. Crear `.env` con datos de DB  
4. `node app.js`

---

Autor: **Martin Aspe**
