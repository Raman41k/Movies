import React from 'react';
import {useParams} from "react-router-dom";

const MovieInfo = () => {

    const { id } = useParams();
    console.log(id)

    return (
        <div>
            MovieInfo
        </div>
    );
};

export {MovieInfo};