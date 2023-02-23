import React, { Component } from 'react';
import movieData from '../movie-data';
import Header from '../Header/Header';
import MovieDetails from '../MovieDetails/MovieDetails';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            movieData: movieData,
            currentMovie: movieData.movies[2]
        }
    }

    render() {
        return (
            <main style={{backgroundImage: `linear-gradient(to right, #000, #000 10%, rgb(0, 0, 0, .8) 35%, rgb(0, 0, 0, .7) 40%, rgb(0, 0, 0, 0.1) 60%), url(${this.state.currentMovie.backdrop_path})`}}>
                <Header />
                <MovieDetails />
            </main>
        )
    }
}

export default App;