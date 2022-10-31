import React from 'react';
import searchIcon from '../../images/search__icon.svg';

function SearchForm({ isCheckBox }) {

  return (
    <section className="search">
      <form div className="search__box">
        <img className="search__icon" src={searchIcon} alt="иконка поиска" />
        <input
          className="search__input"
          placeholder="Фильм"
          type="text"
          name="search"
          autofocus
        >
        </input>
        <button className="search__button" type="submit"></button>
      </form>

      <div className="search__filter">
        <button className={`search__checkBox ${isCheckBox ? `search__checkBox_active` : ``}`} type="button"></button>
        <p className="search__nameBox">Короткометражки</p>
      </div>

    </section>
  );
}

  export default SearchForm;
