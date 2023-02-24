import React from 'react';
import DetailCard from '../DetailCard/DetailCard';
import './DetailsContainer.css';

const DetailsContainer = ({ score, release, budget, length }) => {

    let [year, month, day] = release.split('-');
    release = [month, day, year].join('/')

    return (
        <div className='details-container'>
            <DetailCard type='SCORE' value={score} />
            <DetailCard type='RATING' value='R' />
            <DetailCard type='RELEASE' value={release} />
            <DetailCard type='BUDGET' value={`$${budget}`} />
            <DetailCard type='LENGTH' value={`${length} min`} />
        </div>
    )
}

export default DetailsContainer;