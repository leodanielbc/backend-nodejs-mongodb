const express = require('express');
const { moviesMock } = require('../utils/mocks/movies.js'); //los mocks son archivos falsos de datos falsos (como ejemplo), also help test

function moviesApi(app) {
    const router = express.Router();
    app.use("/api/movies", router); // "/api/movies" => es el home de la aplicacion

    router.get("/", async function(req, res, next){
        try {
            const movies = await Promise.resolve(moviesMock);

            res.status(200).json({
                data: movies,
                message: 'movies listed'
            });


        } catch (error) {
            next(error);
        }
    }); // con "/" hacemos referencia al home definido
}

module.exports = moviesApi;