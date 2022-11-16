import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <form>
      <label>
        <input type="text" placeholder="search for something to do" />
      </label>
    </form>
  );
};

export default SearchBar;
