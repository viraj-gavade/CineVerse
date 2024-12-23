// src/controllers/movieController.ts
import { Request, Response } from 'express';
import { getMovieDetails, searchMovies } from '../services/movie.services';

export const searchMovie = async (req: Request, res: Response) => {
  const query  = req.query.s as string;
  console.log(query)
  try {
    const movieData = await searchMovies(query as string);
    res.json(movieData);
  } catch (error) {
    console.log(error)
    res.status(500).json({ error:"Something went wrong!" });
  }
};

export const getMovieDetail = async (req: Request, res: Response) => {
  const { imdbID } = req.params;
  try {
    const movieDetails = await getMovieDetails(imdbID);
    res.json(movieDetails);
  } catch (error) {
    console.log(error)
    res.status(500).json({error:"Something went wrong!"  });
  }
};
