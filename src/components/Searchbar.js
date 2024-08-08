import React from 'react';
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div className='search-care'>
      <div className='body-container'>
        <div className='find-care'>
          <p>Find Care</p>
          <div className='search-text'>
            <input type="text" placeholder='What are you looking for?'></input>
            <span><FaSearch /></span>
          </div>
        </div>
        <p>Need Help? We're here.</p>
      </div>
    </div>
  )
};

export default SearchBar;
