import React, {useEffect, useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {movieActions} from "../../redux";
import '../../index.css';

const Genres = () => {

    const ref = useRef(null);

    const {genres} = useSelector(state => state.movieReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(movieActions.getAllGenres())
    }, [])

    const handleSubmit = (id) => {
        if (ref.current.checked) {
            dispatch(movieActions.selectGenre(id))
        }else dispatch(movieActions.deleteGenre(id))
    }

    return (
        <div>
            <div className={"genre_select"}>
                {
                    genres?.genres?.map(genre => <div key={genre.id}>
                        <label className={"checkbox-el"}>
                            <input
                                type="checkbox"
                                value={genre.name}
                                name={genre.name}
                                ref={ref}
                                onClick={() => handleSubmit(genre.id)}
                            />
                            {genre.name}
                        </label>
                    </div>)
                }

            </div>
            <div className={'genre_select_btn'} >
                <button onClick={() => dispatch(movieActions.show(false))}>Hide</button>
            </div>
        </div>
    )
};

export {Genres};
