import React from 'react';
import {useDispatch, useSelector} from "react-redux";

import {movieActions} from "../../redux";
import '../../index.css'

const Pagination = () => {

    const {movies} = useSelector(state => state.movieReducer);

    const dispatch = useDispatch();

    return (
        <div className={"pag-wrap"}>
            <button className={"pag-btn"} onClick={()=> dispatch(movieActions.prevPage(1))}>Previous page</button>
            <span>Current page: {movies.page}</span>
            <button className={"pag-btn"} onClick={()=> dispatch(movieActions.nextPage(1))}>Next page</button>
        </div>
    );
};

export {Pagination};