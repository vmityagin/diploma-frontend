import React from 'react';
import Header from './Header';
import SearchForm from './Movies/SearchForm';
import MoviesCardList from './Movies/MoviesCardList';
import More from './Movies/More';
import Footer from './Footer';

function Movies({
  isLoggedIn,
  isOpen,
  onClose,
  handleCheckBox,
  isCheckBox,
  moviesRender,
  moviesRenderShort,
  handleSubmitSearchForm,
  handleButtonYet,
  isVisible,
}) {
    return (
      <div className="page">
        <Header
          isLoggedIn={true}
          onClick={isOpen}
          onClose={onClose}
        />
        <main >
          <SearchForm
            handleCheckBox={handleCheckBox}
            isCheckBox={isCheckBox}
            handleSubmitSearchForm={handleSubmitSearchForm}
          />
          <MoviesCardList
            typeButton="like"
            moviesRender={moviesRender}
            moviesRenderShort={moviesRender}
            isCheckBox={isCheckBox}
            />
          <More
            isVisible={isVisible}
            handleButtonYet={handleButtonYet}
          />
        </main>
        <Footer />
      </div>
    );
  }

  export default Movies;
