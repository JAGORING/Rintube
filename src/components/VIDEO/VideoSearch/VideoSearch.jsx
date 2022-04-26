import React from 'react';

import styles from './VideoSearch.module.css';

const VideoSearch = () => {
  return (
    <div className={styles.search}>
      <input type='text' placeholder='Search' />
      <button type='button' className={styles.button}>
        <img
          src={process.env.PUBLIC_URL + '/images/search.png'}
          alt='youtube logo'
        />
      </button>
    </div>
  );
};

export default VideoSearch;
