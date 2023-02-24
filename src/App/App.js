import React, { Component } from 'react';
import movieData from '../movie-data';
import Header from '../Header/Header';
import MovieDetails from '../MovieDetails/MovieDetails';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            movies: movieData.movies,
            currentMovie: movieData.movies[0]
        }
    }

    setCurrentMovie = id => {
        this.setState({ currentMovie: this.state.movies.find(movie => movie.id === id) })
    }

    render() {
        return (
            <main style={{backgroundImage: `linear-gradient(to right, #000, #000 10%, rgb(0, 0, 0, .8) 35%, rgb(0, 0, 0, .7) 40%, rgb(0, 0, 0, 0.1) 60%), url(${this.state.currentMovie.backdrop_path})`}}>
                <Header />
                <MovieDetails 
                    title={this.state.currentMovie.title}
                    releaseDate={this.state.currentMovie.release_date}
                    rating={this.state.currentMovie.average_rating}
                />
                <MoviesContainer 
                    movies={this.state.movies} 
                    currentMovie={this.state.currentMovie}
                    setCurrentMovie={this.setCurrentMovie}
                />
            </main>
        )
    }
}

export default App;