import React, { useState } from 'react';

import styles from './VideoSearch.module.css';

const VideoSearch = (props) => {
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
  );
};

export default VideoSearch;
