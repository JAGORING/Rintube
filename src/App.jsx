import React, { useState, useEffect } from 'react';

import VideoSearchHeader from './components/VIDEO/VideoSearchHeader/VideoSearchHeader';
import VideoList from './components/VIDEO/VideoList/VideoList';
import styles from './App.module.css';

const App = ({ youtube }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((items) => setVideos(items));
  }, []);

  const searchHandler = (keyword) => {
    youtube
      .search(keyword) //
      .then((items) => setVideos(items));
  };
  return (
    <>
      <VideoSearchHeader className={styles.search} onSearch={searchHandler} />
      <VideoList list={videos} />
    </>
  );
};

export default App;
