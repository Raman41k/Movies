import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';

import '../../index.css';

const Header = ({toggleTheme}) => {

    return (
        <div className={'wrapper'}>
            <div>
               <FontAwesomeIcon className={'icon'} icon={faLightbulb} onClick={toggleTheme}></FontAwesomeIcon>
            </div>

            <div>
                <input type="text" placeholder={"Search..."}/>
            </div>

            <div>
                <select>
                    <option disabled value="volvo">Genres</option>
                    <option value="1">1</option>
                    <option value="2">1</option>
                    <option value="3">1</option>
                </select>
            </div>

        </div>
    );
};

export {Header};