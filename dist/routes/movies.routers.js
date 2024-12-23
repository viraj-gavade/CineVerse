"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/movieRoutes.ts
const express_1 = __importDefault(require("express"));
const movie_controllers_1 = require("../controllers/movie.controllers");
const movieRoutes = express_1.default.Router();
// Route to search movies by name
movieRoutes.get('/search', movie_controllers_1.searchMovie);
// Route to get detailed information about a movie by IMDB ID
movieRoutes.get('/:imdbID', movie_controllers_1.getMovieDetail);
exports.default = movieRoutes;
