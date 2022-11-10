import React, { useEffect } from 'react';
import searchIcon from '../../images/search__icon.svg';
import { inputsSearch } from '../../utils/constants';

function SearchForm({
  handleSubmitSearchForm,
  handleCheckBox,
  isCheckBox,
  type,
  isPhrase
}) {
  const [ focused, setFocused ] = React.useState(false);
  const [ formValid, setFormValid ] = React.useState(false);
  const [ values, setValues] = React.useState({
    userText: `${isPhrase || ''}`,
  });

  useEffect(() => {
    if ( values.userText ) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  },[values])

  function handleFocus(e) {
    setFocused(true);
  }

  function onChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleSubmitSearchForm(values.userText, type);
  }

  return (
    <section className="search">
      <form className="search__box" onSubmit={handleSubmit} noValidate>
      <img className="search__icon" src={searchIcon} alt="иконка поиска" />
        <div className="search__form">
          <input
            className="search__input"
            onBlur={handleFocus}
            focused={focused.toString()}
            placeholder={inputsSearch.placeholder}
            value={values.userText}
            onChange={onChange}
            {...inputsSearch}
            required
          >
          </input>
          <span className={focused && (!values.userText) ? "search__error" : "search__label"}>
            Нужно ввести ключевое слово
          </span>
        </div>
        <button disabled={!formValid} className="search__button" type="submit"></button>
      </form>

      <div className="search__filter">
        <button
          onClick={handleCheckBox}
          className={`search__checkBox ${isCheckBox ? `search__checkBox_active` : ``}`}
          type="button"
        >
        </button>
        <p className="search__nameBox">Короткометражки</p>
      </div>

    </section>
  );
}

  export default SearchForm;
