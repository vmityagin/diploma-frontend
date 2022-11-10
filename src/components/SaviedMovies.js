import React from 'react';
import Header from './Header';
import SearchForm from './Movies/SearchForm';
import MoviesCardList from './Movies/MoviesCardList';
import More from './Movies/More';
import Footer from './Footer';

function Movies({ loggedIn, isOpen, onClose, handleDeleteLikeClick, savedMovies, handleSubmitSearchForm }) {
    return (
      <main className="page">
        <Header
          loggedIn={loggedIn}
          onClick={isOpen}
          onClose={onClose}
        />
        <SearchForm
          handleSubmitSearchForm={handleSubmitSearchForm}
          type={"savedMovie"}
        />
        <MoviesCardList
          typeButton="cross"
          moviesRender={savedMovies}
          handleDeleteLikeClick={handleDeleteLikeClick}
         />
        <Footer />
      </main>
    );
  }

  export default Movies;
