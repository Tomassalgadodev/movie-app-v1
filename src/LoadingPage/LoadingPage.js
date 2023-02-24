import React from 'react';
import loadingRing from '../assets/loading-ring.png';
import './LoadingPage.css'

const LoadingPage = () => {
    return (
        <main className='loading-page'>
            <img className='loading-ring' src={loadingRing}></img>
            <h1 className='welcome-message'>Welcome</h1>
        </main>
    )
}

export default LoadingPage;