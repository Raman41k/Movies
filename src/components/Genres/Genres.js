import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {movieActions} from "../../redux";

const Genres = () => {

    const {genres} = useSelector(state => state.movieReducer);

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(movieActions.getAllGenres())
    },[])

    return (
        <select>
            <option value="">Genres</option>
            {
                genres.genres?.map(genre => <option value={genre.name} key={genre.id}>{genre.name}</option>)
            }
        </select>
    );
};

export {Genres};