import React, {useEffect, useState} from 'react';
import {BarLoader} from "react-spinners";

import {movieService} from "../../services";
import {MovieCard} from "../Movie/MovieCard";
import '../../index.css';

const MovieList = () => {

    const [movies,setMovies] = useState([]);
    const [loading,setLoading] = useState(false);

    useEffect(() => {
        movieService.getAll().then(res => {
            setMovies(res.data.results)
            setLoading(true)
        })
    },[]);

    return (
        <div className={'containerMovie'}>
            {
               loading ?  movies.map(movie =>  {
                   return <MovieCard key={movie.id} movie={movie} />
               }):  <div className={'loading'}><BarLoader color="#8A2BE2" cssOverride={{}} height={15} width={400}/></div>
            }

        </div>
    );
};

export {MovieList};