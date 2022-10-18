import React from 'react';

import {photosImages} from "../../configs";
import '../../index.css';

const MovieCard = ({movie}) => {

    return (
        <div className={"containerMovieCard"}>
            {
                movie.poster_path ? <img src={photosImages + movie.poster_path} alt={movie.title} /> : null
            }
            <h2>{movie.title}</h2>
            <p>{movie.release_date}</p>
        </div>
    );
};

export {MovieCard};