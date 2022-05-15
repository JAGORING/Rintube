import React, { useMemo, useState } from 'react';

import styles from './VideoPlayer.module.css';

const VideoPlayer = (props) => {
  const [isShowMore, setIsShowMore] = useState(false);
  const textContent = props.video.snippet.description;

  const preContent = useMemo(() => {
    const shortPre = props.video.snippet.description.slice(0, 50);

    if (textContent.length > 50) {
      if (isShowMore) {
        return textContent;
      }
      return shortPre;
    }
    return textContent;
  }, [isShowMore, textContent]);

  const showMoreHandler = () => {
    setIsShowMore(!isShowMore);
  };

  return (
    <section className={styles.player}>
      <div className={styles.container}>
        <iframe
          className={styles.video}
          type='text/html'
          src={`https://www.youtube.com/embed/${props.video.id}`}
          frameborder='0'
          allowfullscreen
        ></iframe>
      </div>
      <h1>{props.video.snippet.title}</h1>
      <div className={styles.content}>
        <h2>{props.video.snippet.channelTitle}</h2>

        <pre>{preContent}</pre>
        <span onClick={showMoreHandler} className={styles.showBtn}>
          {isShowMore ? '간략히' : '더보기'}
        </span>
      </div>
    </section>
  );
};

export default VideoPlayer;
