import {axiosService} from "./axios.service";
import {urls} from "../configs";


const movieService = {
    getAll: (page) => axiosService.get(urls.movies + page),
    searchMovie: (movie) => axiosService.get(urls.search+movie),
    getGenres: () => axiosService.get(urls.genres),
}

export {
    movieService
}