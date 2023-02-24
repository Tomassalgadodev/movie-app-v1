import React from 'react';
import './GenreCard.css';

const GenreCard = ({ genre }) => {
    return (
            <p className='genre'>{genre}</p>
    )
}

export default GenreCard;