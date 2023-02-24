import React from 'react';
import './DetailsHeader.css';

const DetailsHeader = ({ title, genres }) => {
    return (
        <div>
            <h2 className='title'>{title}</h2>
            <div className='genres-container'>

            </div>
        </div>
    )
}

export default DetailsHeader;