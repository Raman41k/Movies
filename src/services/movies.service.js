import {axiosService} from "./axios.service";
import {urls} from "../configs";

const movieService = {
    getAll: (page) => axiosService.get(`${urls.movies}?page=${page}`),
    searchMovie: (movie) => axiosService.get(`${urls.search}?query=${movie}`),
    getGenres: () => axiosService.get(urls.genres),
    searchByGenre: (genre) => axiosService.get(`${urls.movies}?&with_genres=${genre}`)
}

export {
    movieService
}