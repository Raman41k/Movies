import React, {useEffect} from 'react';
import {BarLoader} from "react-spinners";
import {useDispatch, useSelector} from "react-redux";

import {movieActions} from "../../redux";
import {MovieCard} from "../Movie/MovieCard";

const MovieList = () => {

    const {movies,loading} = useSelector(state => state.movieReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(movieActions.getAllMovie())
    }, []);

    return (
        <div className={'containerMovie'}>
            {
                loading
                    ?
                    <div className={'loading'}><BarLoader color="#8A2BE2" cssOverride={{}} height={15} width={400}/></div>
                    :
                    movies?.map(movie => <MovieCard key={movie.id} movie={movie}/>)
            }
        </div>
    );
};

export {MovieList};