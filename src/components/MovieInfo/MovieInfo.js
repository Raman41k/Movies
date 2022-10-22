import React, {useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";

import '../../index.css';
import {movieActions} from "../../redux";
import {photosImages} from "../../configs";

const MovieInfo = () => {

    const {id} = useParams();

    const navigate = useNavigate();

    const {movie, genres} = useSelector(state => state.movieReducer);

    const dispatch = useDispatch();

    dispatch(movieActions.show(false))

    useEffect(() => {
        if (id) dispatch(movieActions.getMovie(id))
    }, [id])

    const findGenre = (id) => {
        const genre = genres?.genres?.find(value => value.id === id)
        return genre?.name;
    }

    return (
        <div className={'movie-container'}>
            <FontAwesomeIcon className={'back-icon'} icon={faArrowLeft} onClick={() => navigate(-1)}/>

            {movie ?
                <div className={'movie-wrapper'}>

                    <div>
                        <img src={photosImages + movie?.poster_path} alt={movie?.title}/>
                    </div>
                    <div className={'movie-container_content'}>
                        <h2>{movie?.original_title}</h2>

                        <div>
                            <span>Genre: </span>
                            {
                                movie?.genres?.map(genre => <span key={genre.id}> {findGenre(genre.id)}</span>)
                            }
                        </div>
                        <div><p>Released:<span>{movie?.release_date}</span></p></div>
                        <div><p>Rating: <span>{movie?.vote_average}</span></p></div>
                        <div><p>Runtime: <span>{movie?.runtime}</span></p></div>
                        <div><p>Overview: <span>{movie?.overview}</span></p></div>
                    </div>

                </div>
                :
                <h2 className={"no_info"}>No info</h2>
            }



        </div>
    );
}


export {MovieInfo};