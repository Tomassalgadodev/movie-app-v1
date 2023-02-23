import React from 'react';
import './MovieCard.css';

const MovieCard = ({ image, id, setCurrentMovie }) => {
    return (
        <img 
            className='movie-card' src={image}
            onClick={() => setCurrentMovie(id)}
        />
    )
}

export default MovieCard;