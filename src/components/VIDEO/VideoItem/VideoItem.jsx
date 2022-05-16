import React, { memo } from 'react';

import styles from './VideoItem.module.css';
import Card from '../../UI/Card/Card';

const VideoItem = memo((props) => {
  const videoClickHandler = () => {
    props.onClickVideo(props.video);
  };
  return (
    <li
      className={props.isPlayer ? styles.item_player : styles.item}
      onClick={videoClickHandler}
    >
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
});

export default VideoItem;
