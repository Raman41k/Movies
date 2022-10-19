const baseURL = 'https://api.themoviedb.org/3';
const photosImages = 'https://image.tmdb.org/t/p/w500'

const urls = {
    movies: '/discover/movie?page=',
    search: '/search/movie?query=',
    genres: '/genre/movie/list',
}

export {
    baseURL,
    urls,
    photosImages
}