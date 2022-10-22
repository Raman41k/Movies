import React, {useEffect, useState} from 'react';

import {useDispatch} from "react-redux";
import {movieActions} from "../../redux";

const Search = () => {

    const [query, setQuery] = useState('');

    const dispatch = useDispatch();

    useEffect(()=>{
        if (query) {
            dispatch(movieActions.searchMovie(query))
        }
    },[query])

    const clear = (e) => {
        e.preventDefault()
        if (query) {
            dispatch(movieActions.searchMovie(query))
        }
       setQuery('');
    }

    return (
        <form>
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