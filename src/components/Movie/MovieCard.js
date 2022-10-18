import React from 'react';

import {photosImages} from "../../configs";
import '../../index.css';

const MovieCard = ({movie}) => {


    return (
        <div className={"containerMovieCard"}>
            {
                movie.poster_path ? <img src={photosImages + movie.poster_path} alt={movie.title} /> :
                    <img
                        src="https://media.istockphoto.com/vectors/default-image-icon-vector-missing-picture-page-for-website-design-or-vector-id1357365823?k=20&m=1357365823&s=612x612&w=0&h=ZH0MQpeUoSHM3G2AWzc8KkGYRg4uP_kuu0Za8GFxdFc="
                        alt="No picture"
                    />
            }
            <h2>{movie.title}</h2>
            <p>{movie.release_date}</p>
        </div>
    );
};

export {MovieCard};