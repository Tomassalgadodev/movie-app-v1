import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './MoviesContainer.css'

const MoviesContainer = ({ movies, setCurrentMovie }) => {

    const movieCards = movies.map(movie => {
        return (
            <MovieCard 
                image={movie.poster_path} 
                id={movie.id}
                key={movie.id}
                setCurrentMovie={setCurrentMovie}
            />
        )
    })

    return (
        <React.Fragment>
            <h3 className='movies-container-heading'>Popular on Movie App</h3>
            <div className='movies-container'>
                {movieCards}
            </div>
        </React.Fragment>
    )
}

export default MoviesContainer;