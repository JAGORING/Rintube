import React from 'react';
import VideoItem from '../VideoItem/VideoItem';

import styles from './VideoList.module.css';

const VideoList = (props) => {
  const display = props.isPlayer ? styles.list_player : styles.list;
  return (
    <ul className={`${styles.container} ${display} `}>
      {props.list.map((item) => (
        <VideoItem
          key={item.id}
          video={item}
          isPlayer={props.isPlayer}
          onClickVideo={props.onClickVideo}
        />
      ))}
    </ul>
  );
};

export default VideoList;
