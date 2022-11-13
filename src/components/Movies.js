import React from 'react';
import Header from './Header';
import SearchForm from './Movies/SearchForm';
import MoviesCardList from './Movies/MoviesCardList';
import More from './Movies/More';
import Footer from './Footer';

function Movies({
  loggedIn,
  isOpen,
  onClose,
  handleCheckBox,
  isCheckBox,
  moviesRender,
  handleSubmitSearchForm,
  handleButtonYet,
  isVisible,
  isPhrase,
  isLike,
  handleLikeClick,
  handleDeleteLikeClick,
  savedMovies,
}) {
    return (
      <div className="page">
        <Header
          loggedIn={loggedIn}
          onClick={isOpen}
          onClose={onClose}
        />
        <main >
          <SearchForm
            handleCheckBox={handleCheckBox}
            isCheckBox={isCheckBox}
            handleSubmitSearchForm={handleSubmitSearchForm}
            isPhrase={isPhrase}
          />
          <MoviesCardList
            moviesRender={moviesRender}
            isLike={isLike}
            handleLikeClick={handleLikeClick}
            handleDeleteLikeClick={handleDeleteLikeClick}
            savedMovies={savedMovies}
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
