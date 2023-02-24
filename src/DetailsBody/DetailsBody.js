import React from 'react';
import './DetailsBody.css';

const DetailsBody = ({ description, rating }) => {
    return (
        <section className='details-body'>
            <div className='description'>
                <h4 className='description-heading'>DESCRIPTION</h4>
                <p>{description}</p>
            </div>
            <div className='rating'>
                <h4 className='description-heading'>RATING</h4>
                <p>{`<IMDb> ${rating}/10`}</p>
            </div>
        </section>
    )
}

export default DetailsBody;