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
exports.getMovieDetails = exports.searchMovies = void 0;
// src/services/omdbService.ts
const axios_1 = __importDefault(require("axios"));
// import { OMDB_API_KEY, OMDB_API_URL } from "../config/config";
const searchMovies = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield axios_1.default.get('http://www.omdbapi.com/', {
        params: {
            apiKey: '6e4bddbf',
            s: query,
        },
    });
    return response.data;
});
exports.searchMovies = searchMovies;
const getMovieDetails = (imdbID) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield axios_1.default.get('http://www.omdbapi.com/', {
        params: {
            apiKey: '6e4bddbf',
            i: imdbID,
        },
    });
    return response.data;
});
exports.getMovieDetails = getMovieDetails;
