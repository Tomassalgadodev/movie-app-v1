import React, { Component } from "react";
import DetailsHeader from "../DetailsHeader/DetailsHeader";

class DetailsPage extends Component {
    
    constructor() {
        super();
        this.state = {
            movieDetails: {},
            videos: [],
            loading: true
        }
    }

    setMovieDetails =id => {
        fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
            .then(res => res.json())
            .then(data => this.setState({movieDetails: data.movie, loading: false}));
    }

    setVideos = id => {
        fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}/videos`)
            .then(res => res.json())
            .then(data => this.setState({ videos: data.videos }));
    }

    componentDidMount() {
        this.setVideos(this.props.id);
        this.setMovieDetails(this.props.id);
    }

    render() {
        if (!this.state.loading) {
            return (
                <React.Fragment>
                    <DetailsHeader title={this.state.movieDetails.title} genres={this.state.movieDetails.genres} />

                </React.Fragment>
            )
        }
    }

}

export default DetailsPage;