import React, { useState, useEffect } from 'react';

import VideoSearchHeader from './components/VIDEO/VideoSearchHeader/VideoSearchHeader';
import VideoList from './components/VIDEO/VideoList/VideoList';
import styles from './App.module.css';

const App = () => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const [videos, setVideos] = useState([]);
  const [keyword, setKeyword] = useState('');

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

  const searchHandler = (keyword) => {
    setKeyword(keyword);
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=26&q=${keyword}&regionCode=KR&type=video&key=${apiKey}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setVideos(
          result.items.map((item) => ({ ...item, id: item.id.videoId }))
        );
      })
      .catch((error) => console.log('error', error));
  };
  return (
    <>
      <VideoSearchHeader className={styles.search} onSearch={searchHandler} />
      <VideoList list={videos} />
    </>
  );
};

export default App;
