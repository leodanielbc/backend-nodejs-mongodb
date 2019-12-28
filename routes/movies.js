const express = require('express');
const { moviesMock } = require('../utils/mocks/movies.js'); //los mocks son archivos falsos de datos falsos (como ejemplo), also help test

function moviesApi(app) {
    const router = express.Router();
    app.use("/api/movies", router); // "/api/movies" => es el home de la aplicacion

    // con "/" hacemos referencia al home definido
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
    });
    
    // METODO GET CON ID
    router.get("/:movieId", async function(req, res, next){
        try {
            const movie = await Promise.resolve(moviesMock[req.params.movieId]);

            res.status(200).json({
                data: movie,
                message: 'movie retrieved'
            });


        } catch (error) {
            next(error);
        }
    }); 

    // METODO POST PARA CREAR UN ELEMENTO
    router.post("/", async function(req, res, next){
        try {
            const createdMovieId = await Promise.resolve(moviesMock[0].id);

            res.status(201).json({
                data: createdMovieId,
                message: 'movie created'
            });


        } catch (error) {
            next(error);
        }
    }); 

    // METODO PUT PARA ACTUALIZAR UN ELEMENTO
    router.put("/:movieId", async function(req, res, next){
        try {
            const updateMovieId = await Promise.resolve(moviesMock[0].id);

            res.status(200).json({
                data: updateMovieId,
                message: 'movie updated'
            });


        } catch (error) {
            next(error);
        }
    }); 

    // METODO DELETE PARA ELIMINAR UN ELEMENTO
    router.delete("/:movieId", async function(req, res, next){
        try {
            const deletedMovieId = await Promise.resolve(moviesMock[0].id);

            res.status(200).json({
                data: deletedMovieId,
                message: 'movie deleted'
            });


        } catch (error) {
            next(error);
        }
    }); 
}

module.exports = moviesApi;