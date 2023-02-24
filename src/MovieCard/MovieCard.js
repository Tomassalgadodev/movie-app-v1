import React from 'react';
import './MovieCard.css';

const MovieCard = ({ image, id, setCurrentMovie, isCurrent }) => {
    return (
        <img 
            className={`movie-card ${isCurrent ? 'current-movie' : ''}`} src={image}
            onClick={() => setCurrentMovie(id)}
        />
    )
}

export default MovieCard;