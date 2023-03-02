import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from '../Header/Header';
import MovieDetails from '../MovieDetails/MovieDetails';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import LoadingPage from '../LoadingPage/LoadingPage';
import DetailsHeader from '../DetailsHeader/DetailsHeader';
import DetailsContainer from '../DetailsContainer/DetailsContainer';
import DetailsBody from '../DetailsBody/DetailsBody';
import VideosContainer from '../VideosContainer/VideosContainer';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            movies: '',
            currentMovie: '',
            currentMovieDetails: '',
            currentMovieVideos: [],
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

    setCurrentMovieVideos = id => {
        fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}/videos`)
            .then(res => res.json())
            .then(data => this.setState({ currentMovieVideos: data.videos }));
    }

    toggleDetailsPage = () => {
        this.setState(prevState => { 
            return ({
                detailsPage: !prevState.detailsPage
            })
        })
    }

    showDetailsPage = () => {
        this.setState({ detailsPage: true });
    }

    showHomePage = () => {
        this.setState({ detailsPage: false });
    }

    componentDidMount = () => {
        fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
            .then(res => res.json())
            .then(data => {
                this.setState({ movies: data.movies, currentMovie: data.movies[0] });
                this.setCurrentMovieDetails(data.movies[0].id);
                this.setCurrentMovieVideos(data.movies[0].id);
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
                    <Header showHomePage={this.showHomePage} />
                    <Route exact path='/' render={() => {
                        return (
                            <React.Fragment>
                                <MovieDetails 
                                    title={this.state.currentMovie.title}
                                    releaseDate={this.state.currentMovie.release_date}
                                    rating={this.state.currentMovie.average_rating}
                                    tagline={this.state.currentMovieDetails.tagline}
                                    genres={this.state.currentMovieDetails.genres}
                                    runtime={this.state.currentMovieDetails.runtime}
                                    showDetailsPage={this.showDetailsPage}
                                />
                                <MoviesContainer 
                                    movies={this.state.movies} 
                                    currentMovie={this.state.currentMovie}
                                    setCurrentMovie={this.setCurrentMovie}
                                    setCurrentMovieDetails={this.setCurrentMovieDetails}
                                    setCurrentMovieVideos={this.setCurrentMovieVideos}
                                    showDetailsPage={this.showDetailsPage}
                                />
                            </React.Fragment>
                        )
                    }}/>
                    {/* {!this.state.detailsPage &&
                        <React.Fragment>
                            <MovieDetails 
                                title={this.state.currentMovie.title}
                                releaseDate={this.state.currentMovie.release_date}
                                rating={this.state.currentMovie.average_rating}
                                tagline={this.state.currentMovieDetails.tagline}
                                genres={this.state.currentMovieDetails.genres}
                                runtime={this.state.currentMovieDetails.runtime}
                                showDetailsPage={this.showDetailsPage}
                            />
                            <MoviesContainer 
                                movies={this.state.movies} 
                                currentMovie={this.state.currentMovie}
                                setCurrentMovie={this.setCurrentMovie}
                                setCurrentMovieDetails={this.setCurrentMovieDetails}
                                setCurrentMovieVideos={this.setCurrentMovieVideos}
                                showDetailsPage={this.showDetailsPage}
                            />
                        </React.Fragment>
                    } */}
                    {this.state.detailsPage &&
                        <React.Fragment>
                            <DetailsHeader 
                                title={this.state.currentMovieDetails.title}
                                genres={this.state.currentMovieDetails.genres}
                            />
                            <DetailsContainer 
                                score={this.state.currentMovieDetails.average_rating}
                                release={this.state.currentMovieDetails.release_date}
                                budget={this.state.currentMovieDetails.budget}
                                length={this.state.currentMovieDetails.runtime}
                            />
                            <DetailsBody 
                                description={this.state.currentMovieDetails.overview}
                                rating={this.state.currentMovieDetails.average_rating}
                            />
                            <VideosContainer 
                                videos={this.state.currentMovieVideos}
                            />
                        </React.Fragment>
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