import React, { useState, useEffect } from 'react';

import VideoSearch from './components/VIDEO/VideoSearch/VideoSearch';
import VideoList from './components/VIDEO/VideoList/VideoList';
import styles from './App.module.css';

const App = () => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
    fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=KR&maxResults=26&key=${apiKey}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        setVideos(data.items);
      })
      .catch((error) => console.log('error', error));
  }, []);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <img
            src={process.env.PUBLIC_URL + '/images/logo.png'}
            alt='youtube logo'
          />
          <h2>YOUTUBE</h2>
        </div>
        <VideoSearch className={styles.search} />
      </header>
      <VideoList list={videos} />
    </>
  );
};

export default App;
