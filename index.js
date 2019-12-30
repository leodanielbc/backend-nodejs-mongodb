const express = require('express');
const app = express();

const { config } = require('./config/index');

const moviesApi = require('./routes/movies.js'); // es una funcion

const { logErrors, errorHandler, wrapErrors } = require('./utils/middleware/errorHandlers.js');

const notFoundHandler = require('./utils/middleware/notFoundHandler');

// middleware body parser
app.use(express.json()); // esto va a permitir que los datos de tipo json sean interpretados (POST)

// routes
moviesApi(app);

// capturar el error 404 (cuando se cambia la ruta "URL" q no esta definido en el api)
app.use(notFoundHandler);

// middleware de manejo de errores
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(config.port, ()=>{
    console.log(`Listening http://localhost:${config.port}`)
});