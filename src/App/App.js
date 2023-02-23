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
            currentMovie: movieData.movies[2]
        }
    }

    setCurrentMovie = id => {
        this.setState({ currentMovie: this.state.movies.find(movie => movie.id === id) })
    }

    render() {
        return (
            <main style={{backgroundImage: `linear-gradient(to right, #000, #000 10%, rgb(0, 0, 0, .8) 35%, rgb(0, 0, 0, .7) 40%, rgb(0, 0, 0, 0.1) 60%), url(${this.state.currentMovie.backdrop_path})`}}>
                <Header />
                <MovieDetails />
                <MoviesContainer movies={this.state.movies} setCurrentMovie={this.setCurrentMovie} />
            </main>
        )
    }
}

export default App;