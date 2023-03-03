import React, { Component } from "react";
import MovieDetails from '../MovieDetails/MovieDetails';
import MoviesContainer from '../MoviesContainer/MoviesContainer';

class HomePage extends Component {
    constructor() {
        super();
        this.state = {
            currentMovieDetails: {},
            loading: true,
            currentMovie: {}
        }
    }

    setCurrentMovie = id => {
        console.log(this.props.movies)
        this.setState({ currentMovie: this.props.movies.find(movie => movie.id === id) })
    }

    setCurrentMovieDetails = id => {
        fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
            .then(res => res.json())
            .then(data => {
                this.setState({ currentMovieDetails: data.movie, loading: false });
                this.props.setBackgroundImage(data.movie.backdrop_path, false);
            });
    }


    componentDidMount = () => {
        this.setCurrentMovieDetails(this.props.currentMovieId);
    }

    render() {
        if (!this.state.loading) {
            return (
                <React.Fragment>
                    <MovieDetails 
                        title={this.state.currentMovieDetails.title}
                        releaseDate={this.state.currentMovieDetails.release_date}
                        rating={this.state.currentMovieDetails.average_rating}
                        tagline={this.state.currentMovieDetails.tagline}
                        genres={this.state.currentMovieDetails.genres}
                        runtime={this.state.currentMovieDetails.runtime}
                        id={this.state.currentMovieDetails.id}
                    />
                    <MoviesContainer 
                        movies={this.props.movies} 
                        currentMovie={{ id: this.props.currentMovieId }}
                        setCurrentMovie={this.setCurrentMovie}
                        setCurrentMovieDetails={this.setCurrentMovieDetails}
                    />
                </React.Fragment>
                
            )
        }
        }
}

export default HomePage;