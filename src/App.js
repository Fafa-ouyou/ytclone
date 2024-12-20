import React, { useState, useEffect } from 'react';
import { fetchVideos } from './YoutubeAPI';
import VideoList from './VideoList';
import './App.css'

const App = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const loadVideos = async () => {
            const fetchedVideos = await fetchVideos('React tutorials');
            setVideos(fetchedVideos);
            console.log(fetchedVideos)
        };
        loadVideos();
    }, []);

    return (
        <div>
            <h1>YouTube Videos</h1>
            <VideoList videos={videos} />
        </div>
    );
};

export default App;

