import React, {useState} from 'react';

import {useDispatch} from "react-redux";
import {movieActions} from "../../redux";

const Search = () => {

    const [query, setQuery] = useState('');

    const dispatch = useDispatch();

    const searchMovies = (e) => {
        e.preventDefault()
        if (query) {
            dispatch(movieActions.searchMovie(query))
        } else dispatch(movieActions.getAllMovie())
    }

    const clear = (e) => {
        e.preventDefault()

        if (query) {
            dispatch(movieActions.searchMovie(query))
        }
       setQuery('');
    }

    return (
        <form onChange={searchMovies}>
                <input type="text"
                       placeholder={"Search..."}
                       onChange={(e) => setQuery(e.target.value)}
                       value={query}
                />
                <button onClick={clear}>Search</button>
        </form>
    );
};

export {Search};