import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLightbulb} from '@fortawesome/free-solid-svg-icons';

import '../../index.css';
import {Search} from "../SearchMovie/Search";
import {useDispatch, useSelector} from "react-redux";
import {movieActions} from "../../redux";

const Header = ({toggleTheme}) => {
    
    const {show} = useSelector(state => state.movieReducer);

    const dispatch = useDispatch();

    return (
        <div>
            <div className={'wrapper'}>
                <div>
                    <FontAwesomeIcon className={'icon'} icon={faLightbulb} onClick={toggleTheme}></FontAwesomeIcon>
                </div>

                <Search/>

                <button onClick={() => dispatch(movieActions.show(!show))}>Genres</button>
            </div>

        </div>
    );
}

export {Header};