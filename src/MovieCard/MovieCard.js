import React from 'react';
import { Link } from 'react-router-dom';
import './MovieCard.css';

const MovieCard = ({ image, id, setCurrentMovie, setCurrentMovieDetails, setCurrentMovieVideos, showDetailsPage, isCurrent, key }) => {

    return (
        <img 
            className={`movie-card ${isCurrent ? 'current-movie' : ''}`} 
            src={image}
            onClick={() => {
                setCurrentMovie(id);
                setCurrentMovieDetails(id);
                setCurrentMovieVideos(id);
            }}
        />
    )
}

export default MovieCard;