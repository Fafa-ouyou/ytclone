import React from 'react';

const VideoList = ({ videos }) => {
    return (
        <ul>
            {videos.map((video) => (
                <li key={video.id.videoId}>
                    <h3>{video.snippet.title}</h3>
                    <p>{video.snippet.description}</p>
                    <iframe
                        width="560"
                        height="315"
                        src={`https://www.youtube.com/embed/${video.id.videoId}`}
                        title={video.snippet.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </li>
            ))}
        </ul>
    );
};

export default VideoList;
