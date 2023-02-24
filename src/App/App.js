import React, { Component } from 'react';
import movieData from '../movie-data';
import Header from '../Header/Header';
import MovieDetails from '../MovieDetails/MovieDetails';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import LoadingPage from '../LoadingPage/LoadingPage';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            movies: '',
            currentMovie: '',
            currentMovieDetails: '',
            loading: false,
            detailsPage: false
        }
    }

    setCurrentMovie = id => {
        this.setState({ currentMovie: this.state.movies.find(movie => movie.id === id) })
    }

    setCurrentMovieDetails = id => {
        fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
            .then(res => res.json())
            .then(data => this.setState({ currentMovieDetails: data.movie }));
    }

    toggleDetailsPage = () => {
        this.setState(prevState => { 
            return ({
                detailsPage: !prevState.detailsPage
            })
        })
    }

    componentDidMount = () => {
        fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
            .then(res => res.json())
            .then(data => {
                this.setState({ movies: data.movies, currentMovie: data.movies[0] });
                this.setCurrentMovieDetails(data.movies[0].id)
            } 
        );
        
    }

    render() {
        if (this.state.movies && this.state.currentMovie && this.state.currentMovieDetails && !this.state.loading) {
            return (
                <main style={
                        {
                            backgroundImage: `${!this.state.detailsPage ? 
                                'linear-gradient(to right, #000, #000 10%, rgb(0, 0, 0, .8) 35%, rgb(0, 0, 0, .7) 40%, rgb(0, 0, 0, 0.1) 60%),' : 
                                'linear-gradient(to top, rgb(9, 22, 29), rgb(9, 22, 29) 30%, rgb(9, 22, 29, .8) 60%, rgb(9, 22, 29, .7) 70%, rgb(9, 22, 29, 0.1) 90%),'} 
                                url(${this.state.currentMovie.backdrop_path})`
                        }
                    }>
                    <Header toggleDetailsPage={this.toggleDetailsPage} />
                    {!this.state.detailsPage &&
                        <React.Fragment>
                            <MovieDetails 
                                title={this.state.currentMovie.title}
                                releaseDate={this.state.currentMovie.release_date}
                                rating={this.state.currentMovie.average_rating}
                                tagline={this.state.currentMovieDetails.tagline}
                                genres={this.state.currentMovieDetails.genres}
                                runtime={this.state.currentMovieDetails.runtime}
                            />
                            <MoviesContainer 
                                movies={this.state.movies} 
                                currentMovie={this.state.currentMovie}
                                setCurrentMovie={this.setCurrentMovie}
                                setCurrentMovieDetails={this.setCurrentMovieDetails}
                            />
                        </React.Fragment>
                    }
                    {this.state.detailsPage &&
                        <h1 style={{color: 'white'}}>Details</h1>
                    }
                </main>
            )
        } else {
            return (
                <LoadingPage />
            )
        }
    }
}

export default App;