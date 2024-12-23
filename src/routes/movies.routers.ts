// src/routes/movieRoutes.ts
import express from 'express';
import { searchMovie, getMovieDetail } from '../controllers/movie.controllers';

const movieRoutes = express.Router();

// Route to search movies by name
movieRoutes.get('/search', searchMovie);

// Route to get detailed information about a movie by IMDB ID
movieRoutes.get('/:imdbID', getMovieDetail);

export default movieRoutes;
