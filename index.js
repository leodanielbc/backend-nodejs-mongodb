const express = require('express');
const app = express();

const { config } = require('./config/index');

const moviesApi = require('./routes/movies.js'); // es una funcion

const { logErrors, errorHandler } = require('./utils/middleware/errorHandlers.js');

// middleware body parser
app.use(express.json()); // esto va a permitir que los datos de tipo json sean interpretados (POST)

moviesApi(app);

// middleware de manejo de errores
app.use(logErrors);
app.use(errorHandler);

app.listen(config.port, ()=>{
    console.log(`Listening http://localhost:${config.port}`)
});