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
        <div className={styles.titleBox}>
          <p className={styles.title}>{props.video.snippet.title}</p>
          <p className={styles.channel}>{props.video.snippet.channelTitle}</p>
        </div>
      </Card>
    </li>
  );
};

export default VideoItem;
