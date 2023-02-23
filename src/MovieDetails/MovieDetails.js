import React from 'react';
import './MovieDetails.css';

const MovieDetails = () => {
    return (
        <section>
            <h2 className='movie-title'>Movie Title</h2>
            <div className='details-subheading'>
                <p>Rating</p>
                <p>Year Released</p>
                <p>Genres</p>
                <p>Length</p>
            </div>
            <p className='tagline'>This is where the movie details will go. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <button>LEARN MORE</button>
        </section>
    )
}

export default MovieDetails;