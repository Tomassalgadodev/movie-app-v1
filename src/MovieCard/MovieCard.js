import React from 'react';
import './MovieCard.css';

const MovieCard = ({ image, id, setCurrentMovie, setCurrentMovieDetails, showDetailsPage, isCurrent }) => {

    return (
        <img 
            className={`movie-card ${isCurrent ? 'current-movie' : ''}`} src={image}
            onClick={() => {
                setCurrentMovie(id);
                setCurrentMovieDetails(id);
            }}
            onDoubleClick={() => showDetailsPage()}
        />
    )
}

export default MovieCard;