import React, {useState} from 'react';

import {useDispatch} from "react-redux";
import {movieActions} from "../../redux";

const Search = () => {

    const [query, setQuery] = useState('');

    // const {movies} = useSelector(state => state.movieReducer);

    const dispatch = useDispatch();


    const searchMovies = (e) => {
        e.preventDefault()
        if (query) {
            dispatch(movieActions.searchMovie(query))
        } else dispatch(movieActions.getAllMovie())
    }

    return (
        <form onChange={searchMovies}>
            <input type="text"
                   placeholder={"Search..."}
                   onChange={(e) => setQuery(e.target.value)}
                   value={query}
            />
            <button>Search</button>
        </form>


    );
};

export {Search};