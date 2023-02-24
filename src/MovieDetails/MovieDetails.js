import React from 'react';
import './MovieDetails.css';

const MovieDetails = ({ title, releaseDate, rating, tagline, genres, runtime }) => {

    const releaseYear = releaseDate.substring(0, 4);
    const averageRating = rating % 1 ? rating.toFixed(1) : rating;
    genres = genres.join(', ')


    return (
        <section className='movie-details-section'>
            <h2 className='movie-title'>{title}</h2>
            <div className='details-subheading'>
                <p>{'<IMDB>'} {averageRating}/10</p>
                <p className='details'>{releaseYear} • {genres} • {runtime}m</p>
            </div>
            <p className='tagline'>{tagline}</p>
            <button>LEARN MORE</button>
        </section>
    )
}

export default MovieDetails;