import React, { useState, useEffect, useCallback } from 'react';

import VideoSearchHeader from './components/VIDEO/VideoSearchHeader/VideoSearchHeader';
import VideoList from './components/VIDEO/VideoList/VideoList';
import VideoPlayer from './components/VIDEO/VideoPlayer/VideoPlayer';
import styles from './App.module.css';

const App = ({ youtube }) => {
  const [videos, setVideos] = useState([]);
  const [videoPlayer, setVideoPlayer] = useState(null);

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((items) => setVideos(items));
  }, [youtube]);

  const searchHandler = useCallback(
    (keyword) => {
      youtube
        .search(keyword) //
        .then((items) => {
          setVideos(items);
          setVideoPlayer(null);
        });
    },
    [youtube]
  );
  const logoHandler = useCallback(() => {
    youtube
      .mostPopular() //
      .then((items) => {
        setVideos(items);
        setVideoPlayer(null);
      });
  }, [youtube]);

  const VideoClick = (video) => {
    setVideoPlayer(video);
  };
  return (
    <>
      <VideoSearchHeader
        className={styles.search}
        onSearch={searchHandler}
        onLogoClick={logoHandler}
      />
      <section className={styles.content}>
        {videoPlayer && (
          <VideoPlayer video={videoPlayer} className={styles.player} />
        )}
        <VideoList
          className={styles.list}
          list={videos}
          isPlayer={videoPlayer}
          onClickVideo={VideoClick}
        />
      </section>
    </>
  );
};

export default App;
