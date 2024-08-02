import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className="search-container">
      <button className="filter-button">
        <i className="fas fa-filter"></i>
      </button>
      <input type="text" placeholder="Type here to search" className="search-input" />
      <button className="search-button">
        <i className="fas fa-search"></i>
      </button>
    </div>
  );
};

export default SearchBar;
