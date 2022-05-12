import React from 'react';
import VideoItem from '../VideoItem/VideoItem';

import styles from './VideoList.module.css';

const VideoList = (props) => {
  return (
    <ul className={styles.list}>
      {props.list.map((item) => (
        <VideoItem key={item.id} video={item} />
      ))}
    </ul>
  );
};

export default VideoList;
