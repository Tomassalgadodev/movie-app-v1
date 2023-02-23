import React, { Component } from 'react';
import movieData from '../movie-data';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            movieData: movieData
        }
    }

    render() {
        return (
            <h1>Hello</h1>
        )
    }
}

export default App;