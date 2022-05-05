import React from 'react';
import VideoItem from '../VideoItem/VideoItem';

import styles from './VideoList.module.css';

const videoItems = [];

const VideoList = () => {
  return (
    <ul>
      {videoItems.map((item) => (
        <VideoItem item={item} />
      ))}
    </ul>
  );
};

export default VideoList;
