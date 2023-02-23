import React, { Component } from 'react';
import movieData from '../movie-data';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            movieData: movieData,
            currentMovie: movieData.movies[0]
        }
    }

    render() {
        return (
            <main style={{backgroundImage: `url(${this.state.currentMovie.backdrop_path})`}}>
    
            </main>
        )
    }
}

export default App;