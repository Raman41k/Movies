import React, {useState} from 'react';

import {movieService} from "../../services";

const Search = () => {

    const [query, setQuery] = useState('');


    const searchMovies = (e) => {
        e.preventDefault()
        movieService.searchMovie(query).then(res=> console.log(res))
    }

    return (
        <form onChange={searchMovies}>
            <input type="text"
                   placeholder={"Search..."}
                   onChange={(e) => setQuery(e.target.value)}
                   value={query}
            />
        </form>
    );
};

export {Search};