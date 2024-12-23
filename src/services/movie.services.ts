
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const OMDB_API_KEY = process.env.OMDB_API_KEY || '';
const OMDB_BASE_URL = process.env.OMDB_BASE_URL || 'http://www.omdbapi.com/';

export { OMDB_API_KEY, OMDB_BASE_URL };

export const searchMovies = async (query: string) => {
  const response = await axios.get(OMDB_BASE_URL, {
    params: {
      apiKey: OMDB_API_KEY,
      s: query,
    },
  });
  return response.data;
};

export const getMovieDetails = async (imdbID: string) => {
  const response = await axios.get(OMDB_BASE_URL, {
    params: {
      apiKey: OMDB_API_KEY,
      i: imdbID,
    },
  });
  return response.data;
};
