import React from 'react';
import VideoCard from '../VideoCard/VideoCard';
import './VideosContainer.css';

const VideosContainer = ({ videos }) => {

    const videoCards = videos.map(video => {
        return (
            <VideoCard 
                youtubeKey={video.key} 
                key={video.id}
            />
        )
    })

    return (
        <div>
            <h4 className='videos-heading'>VIDEOS</h4>
            <div className='videos-container'>
                {videoCards}
            </div>
        </div>
    )
}

export default VideosContainer;