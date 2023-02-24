import React from 'react';
import './DetailCard.css';

const DetailCard = ({ type, value }) => {
    return (
        <div className='detail-card'>
            <p>{type}</p>
            <h3 className='detail-value'>{value}</h3>
        </div>
    )
}

export default DetailCard;