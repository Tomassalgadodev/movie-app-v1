import React, { Component } from 'react';
import movieData from '../movie-data';
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
    
            </main>
        )
    }
}

export default App;