import React from 'react';

import styles from './VideoItem.module.css';
import Card from '../../UI/Card/Card';

const VideoItem = (props) => {
  return (
    <li className={styles.item}>
      <Card>
        <img
          src={props.video.snippet.thumbnails.medium.url}
          alt={props.video.snippet.title}
        />
        <div className={styles.title}>
          <h1>{props.video.snippet.title}</h1>
          <h2>{props.video.snippet.channelTitle}</h2>
        </div>
      </Card>
    </li>
  );
};

export default VideoItem;
