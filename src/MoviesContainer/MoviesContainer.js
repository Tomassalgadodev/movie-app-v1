import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './MoviesContainer.css'

const MoviesContainer = ({ movies }) => {
    return (
        <React.Fragment>
            <h3 className='movies-container-heading'>Popular on Movie App</h3>
            <div className='movies-container'>
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
            </div>
        </React.Fragment>
    )
}

export default MoviesContainer;