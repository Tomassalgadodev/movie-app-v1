import React, { Component } from "react";
import DetailsHeader from "../DetailsHeader/DetailsHeader";
import DetailsContainer from "../DetailsContainer/DetailsContainer";
import DetailsBody from "../DetailsBody/DetailsBody";
import VideosContainer from "../VideosContainer/VideosContainer";
import LoadingPage from "../LoadingPage/LoadingPage";

class DetailsPage extends Component {
    
    constructor() {
        super();
        this.state = {
            movieDetails: {},
            videos: [],
            loading: true
        }
    }

    

    setVideos = id => {
        fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}/videos`)
            .then(res => res.json())
            .then(data => this.setState({ videos: data.videos, loading: false }));
    }

    componentDidMount() {
        fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.id}`)
        .then(res => res.json())
        .then(data => {
            this.setState({ movieDetails: data.movie });
            this.setVideos(this.props.id);
            this.props.setBackgroundImage(data.movie.backdrop_path, true);
            // this.props.setCurrentMovie(this.props.id);
        });
    }

    componentWillUnmount = () => {
        this.props.resetHomePage();
    }

    render() {
        console.log(this.state)
        if (!this.state.loading) {
            return (
                <React.Fragment>
                    <DetailsHeader title={this.state.movieDetails.title} genres={this.state.movieDetails.genres} />
                    <DetailsContainer 
                        score={this.state.movieDetails.average_rating}
                        release={this.state.movieDetails.release_date}
                        budget={this.state.movieDetails.budget}
                        length={this.state.movieDetails.runtime}
                    />
                    <DetailsBody 
                        description={this.state.movieDetails.overview}
                        rating={this.state.movieDetails.average_rating}
                    />
                    <VideosContainer 
                        videos={this.state.videos}
                    />
                </React.Fragment>
            )
        } else {
            return (
                <LoadingPage />
            )
        }
    }

}

export default DetailsPage;