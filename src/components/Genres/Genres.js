import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {movieActions} from "../../redux";

const Genres = () => {

    const {genres} = useSelector(state => state.movieReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(movieActions.getAllGenres())
    }, [])

    return (
        <div>
            <div>
                {
                    genres?.genres?.map(genre =>  <div key={genre.id}>
                        <label>
                            <input
                                type="checkbox"
                                value={genre.name}
                                name={genre.name}
                                onClick={()=> dispatch(movieActions.selectGenre(genre.id))}
                            />
                            {genre.name}
                        </label>
                    </div>)
                }

            </div>
                <button onClick={() => dispatch(movieActions.show(false))}>Hide</button>
        </div>
);
};

export
    {
        Genres
    }
;