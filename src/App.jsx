import React from 'react';

import VideoSearch from './components/VIDEO/VideoSearch/VideoSearch';
import VideoList from './components/VIDEO/VideoList/VideoList';
import styles from './App.module.css';

const App = () => {
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
      <VideoList />
    </>
  );
};

export default App;
