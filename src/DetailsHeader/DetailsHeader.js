import React from 'react';
import GenreCard from '../GenreCard/GenreCard';
import './DetailsHeader.css';

const DetailsHeader = ({ title, genres }) => {

    const genreCards = genres.map((genre, index) => <GenreCard genre={genre} key={index} />);

    return (
        <div>
            <h2 className='title'>{title}</h2>
            <div className='genres-container'>
                {genreCards}
            </div>
        </div>
    )
}

export default DetailsHeader;