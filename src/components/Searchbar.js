import React from 'react';
import {
  SearchbarStyled,
  SearchFormBtn,
  SearchFormSpan,
  SearchFormInput,
} from './Searchbar.styled';

export const Searchbar = () => {
  return (
    <header className="searchbar">
      <SearchbarStyled className="form">
        <SearchFormBtn type="submit" className="button">
          <SearchFormSpan className="button-label">Search</SearchFormSpan>
        </SearchFormBtn>
        <SearchFormInput
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchbarStyled>
    </header>
  );
};
