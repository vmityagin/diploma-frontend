import React from 'react';
import Header from './Header';
import SearchForm from './Movies/SearchForm';
import MoviesCardList from './Movies/MoviesCardList';
import More from './Movies/More';
import Footer from './Footer';

function Movies({ isLoggedIn, isOpen, onClose, handleDeleteLikeClick, savedMovies }) {
    return (
      <main className="page">
        <Header
          isLoggedIn="true"
          onClick={isOpen}
          onClose={onClose}
        />
        <SearchForm />
        <MoviesCardList
          typeButton="cross"
          moviesRender={savedMovies}
          handleDeleteLikeClick={handleDeleteLikeClick}
         />
        <More />
        <Footer />
      </main>
    );
  }

  export default Movies;
