import React from 'react';
import { SearchbarStyled } from './Searchbar.styled';

export const Searchbar = () => {
  return (
    <header class="searchbar">
      <SearchbarStyled class="form">
        <button type="submit" class="button">
          <span class="button-label">Search</span>
        </button>

        <input
          class="input"
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
      </SearchbarStyled>
    </header>
  );
};
