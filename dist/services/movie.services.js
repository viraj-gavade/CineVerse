"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMovieDetails = exports.searchMovies = exports.OMDB_BASE_URL = exports.OMDB_API_KEY = void 0;
const axios_1 = __importDefault(require("axios"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const OMDB_API_KEY = process.env.OMDB_API_KEY || '';
exports.OMDB_API_KEY = OMDB_API_KEY;
const OMDB_BASE_URL = process.env.OMDB_BASE_URL || 'http://www.omdbapi.com/';
exports.OMDB_BASE_URL = OMDB_BASE_URL;
const searchMovies = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield axios_1.default.get(OMDB_BASE_URL, {
        params: {
            apiKey: OMDB_API_KEY,
            s: query,
        },
    });
    return response.data;
});
exports.searchMovies = searchMovies;
const getMovieDetails = (imdbID) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield axios_1.default.get(OMDB_BASE_URL, {
        params: {
            apiKey: OMDB_API_KEY,
            i: imdbID,
        },
    });
    return response.data;
});
exports.getMovieDetails = getMovieDetails;
