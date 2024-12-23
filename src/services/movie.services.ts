// src/services/omdbService.ts
import axios from 'axios';
// import { OMDB_API_KEY, OMDB_API_URL } from "../config/config";

export const searchMovies = async (query: string) => {
  const response = await axios.get('http://www.omdbapi.com/', {
    params: {
      apiKey: '6e4bddbf',
      s: query,
    },
  });
  return response.data;
};

export const getMovieDetails = async (imdbID: string) => {
  const response = await axios.get('http://www.omdbapi.com/', {
    params: {
      apiKey: '6e4bddbf',
      i: imdbID,
    },
  });
  return response.data;
};
