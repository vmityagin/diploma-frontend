import React from 'react';
import searchBox from '../../images/search__checkBox.svg';
import searchIcon from '../../images/search__icon.svg';

function SearchForm() {
  return (
    <section className="search">
      <div className="search__box">
        <img className="search__icon" src={searchIcon} alt="иконка поиска" />
        <input className="search__input" placeholder="Фильм" type="text" autofocus></input>
        <button className="search__button" type="button"></button>
      </div>

      <div className="search__filter">
        <img className="search__checkBox" src={searchBox} alt="иконка фильтр" />
        <p className="search__nameBox">Короткометражки</p>
      </div>

    </section>
  );
}

  export default SearchForm;
