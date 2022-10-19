import React, {useEffect} from 'react';
import {BarLoader} from "react-spinners";
import {useDispatch, useSelector} from "react-redux";

import {movieActions} from "../../redux";
import {MovieCard} from "../Movie/MovieCard";
import {Pagination} from "../Pagination/Pagination";

const MovieList = () => {

    const {movies,loading,page} = useSelector(state => state.movieReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(movieActions.getAllMovie(page))
    }, [page]);

    return (
        <div>
            <Pagination/>
            <div className={'containerMovie'}>
                {
                    loading
                        ?
                        <div className={'loading'}><BarLoader color="#8A2BE2" cssOverride={{}} height={15} width={400}/></div>
                        :
                        movies?.map(movie => <MovieCard key={movie.id} movie={movie}/>)
                }
            </div>
        </div>
    );
};

export {MovieList};