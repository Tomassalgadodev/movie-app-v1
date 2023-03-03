import React from 'react';
import { useHistory } from 'react-router-dom';
import './MovieCard.css';

const MovieCard = ({ image, id, setCurrentMovie, setCurrentMovieDetails, isCurrent, setBackgroundImage, backgroundImage }) => {
    const history = useHistory();
    return (
        <img 
            className={`movie-card ${isCurrent ? 'current-movie' : ''}`} 
            src={image}
            onClick={() => {
                setCurrentMovie(id);
                setCurrentMovieDetails(id);
                setBackgroundImage(backgroundImage , false);
                // history.push(`/${id}`);
            }}
        />
    )
}

export default MovieCard;