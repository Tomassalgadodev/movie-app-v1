import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './MoviesContainer.css'

const MoviesContainer = ({ movies, setCurrentMovie, setCurrentMovieDetails, showDetailsPage, currentMovie, setBackgroundImage }) => {

    const movieCards = movies.map(movie => {
        return (
            <MovieCard 
                image={movie.poster_path} 
                id={movie.id}
                key={movie.id}
                setCurrentMovie={setCurrentMovie}
                setCurrentMovieDetails={setCurrentMovieDetails}
                showDetailsPage={showDetailsPage}
                isCurrent={movie.id === currentMovie.id ? true : false}
                setBackgroundImage={setBackgroundImage}
                backgroundImage={movie.backdrop_path}
            />
        )
    })

    return (
        <div className='movies-section'>
            <h3 className='movies-container-heading'>Popular on Movie App</h3>
            <div className='movies-container'>
                {movieCards}
            </div>
        </div>
    )
}

export default MoviesContainer;