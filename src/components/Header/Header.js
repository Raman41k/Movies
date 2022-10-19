import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLightbulb} from '@fortawesome/free-solid-svg-icons';

import '../../index.css';
import {Search} from "../SearchMovie/Search";
import {Genres} from "../Genres/Genres";

const Header = ({toggleTheme}) => {

    return (
        <div className={'wrapper'}>

            <div>
                <FontAwesomeIcon className={'icon'} icon={faLightbulb} onClick={toggleTheme}></FontAwesomeIcon>
            </div>

            <Search/>

            <Genres/>

        </div>
    );
};

export {Header};