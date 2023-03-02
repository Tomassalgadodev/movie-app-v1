import React from 'react';
import { Link } from 'react-router-dom';
import './MovieDetails.css';

const MovieDetails = ({ title, releaseDate, rating, tagline, genres, runtime, id, showDetailsPage }) => {

    const releaseYear = releaseDate.substring(0, 4);
    const averageRating = rating % 1 ? rating.toFixed(1) : rating;
    genres = genres.join(', ');
    runtime = runtime < 60 ? `${runtime}m` : `${Math.floor(runtime / 60)}h ${runtime % 60}m`


    return (
        <section className='movie-details-section'>
            <h2 className='movie-title'>{title}</h2>
            <div className='details-subheading'>
                <p name="rating">{'<IMDB>'} {averageRating}/10</p>
                <p className='details'>{releaseYear} • {genres} • {runtime}</p>
            </div>
            <p className='tagline'>{tagline}</p>
            <Link to={`/details/${id}`}>
                <button onClick={showDetailsPage}>LEARN MORE</button>
            </Link>
        </section>
    )
}

export default MovieDetails;