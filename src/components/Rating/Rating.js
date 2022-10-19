import React from 'react';
import StarRatings from "react-star-ratings/build/star-ratings";

import '../../index.css'

const Rating = ({rating}) => {
    return (
        <div className={'rating'}>
            <StarRatings
                classname={'ba'}
                rating={rating}
                starRatedColor="yellow"
                numberOfStars={10}
                name='rating'
                starDimension="30px"
                starSpacing="5px"
            />
        </div>

    );
};

export {Rating};