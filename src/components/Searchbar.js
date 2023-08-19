import React from 'react';
import { BiSearch } from 'react-icons/bi';
import {
  SearchbarStyled,
  SearchFormBtn,
  SearchFormSpan,
  SearchFormInput,
} from './Searchbar.styled';

export const Searchbar = ({ handleQuery }) => {
  return (
    <header className="searchbar">
      <SearchbarStyled
        className="form"
        onSubmit={evt => {
          evt.preventDefault();
          handleQuery(evt.target.elements.query.value);
          evt.target.reset();
        }}
      >
        <SearchFormBtn type="submit" className="button">
          <SearchFormSpan className="button-label">
            <BiSearch />
          </SearchFormSpan>
        </SearchFormBtn>
        <SearchFormInput
          className="input"
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchbarStyled>
    </header>
  );
};
