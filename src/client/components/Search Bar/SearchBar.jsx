import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <form>
      <label>
        <input type="text" placeholder="looking for something?" />
      </label>
    </form>
  );
};

export default SearchBar;
