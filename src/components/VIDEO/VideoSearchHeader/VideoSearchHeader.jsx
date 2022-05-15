import React, { memo, useState } from 'react';

import styles from './VideoSearchHeader.module.css';

const VideoSearchHeader = memo((props) => {
  const [searchInput, setSearchInput] = useState('');

  const searchInputHandler = (event) => {
    setSearchInput(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    props.onSearch(searchInput.trim());
    setSearchInput('');
  };
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img
          src={process.env.PUBLIC_URL + '/images/logo.png'}
          alt='youtube logo'
        />
        <h2>YOUTUBE</h2>
      </div>
      <form className={styles.search} onSubmit={submitHandler}>
        <input
          type='text'
          placeholder='Search'
          value={searchInput}
          onChange={searchInputHandler}
        />
        <button type='submit' className={styles.button}>
          <img
            src={process.env.PUBLIC_URL + '/images/search.png'}
            alt='youtube logo'
          />
        </button>
      </form>
    </header>
  );
});

export default VideoSearchHeader;
