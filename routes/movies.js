const express = require('express');
const MoviesService = require('../services/movies');

function moviesApi(app) {
    const router = express.Router();
    app.use("/api/movies", router); // "/api/movies" => es el home de la aplicacion

    // con esto accedemos a la capa de servicio
    const moviesService = new MoviesService();

    // con "/" hacemos referencia al home definido
    router.get("/", async function(req, res, next){
        const { tags } = req.query; // tipo de parametro1: (query) se pone el ? "nombredelquery" y se concatena "tags"

        try {
            const movies = await moviesService.getMovies({ tags })

            res.status(200).json({
                data: movies,
                message: 'movies listed'
            });


        } catch (error) {
            next(error);
        }
    });
    
    // METODO GET CON ID
    router.get("/:movieId", async function(req, res, next){ // tipo de parametro2: le enviamos el parametro a traves de la URL
        const { movieId } = req.params;
        try {
            const movie = await moviesService.getMovie({ movieId });

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
        const { body: movie } = req;
        try {
            const createdMovieId = await moviesService.createMovie({ movie });
            
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
        const { movieId } = req.params;
        const { body: movie } = req;
        try {
            const updateMovieId = await moviesService.updateMovie({ movieId, movie });

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
        const { movieId } = req.params;
        try {
            const deletedMovieId = await moviesService.deleteMovie({ movieId });

            res.status(200).json({
                data: deletedMovieId,
                message: 'movie deleted'
            });


        } catch (error) {
            next(error);
        }
    });

    // METODO PATCH PARA ACTUALIZAR LA PROPIEDAD DE UN ELEMENTO
    router.patch("/:movieId", async function(req, res, next){
        const { movieId } = req.params;
        const { body: movie } = req;
        try {
            const updateMovieId = await moviesService.updateMovie({ movieId, movie });

            res.status(200).json({
                data: updateMovieId,
                message: 'movie property updated'
            });


        } catch (error) {
            next(error);
        }
    });
}

module.exports = moviesApi;